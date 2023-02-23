import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { CustomersService } from "../service/customersService";
import { checkPassword } from "../utils/hash";
import { InvalidInfoError } from "../utils/error";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";

export class CustomersController {
	constructor(private customersService: CustomersService) {}

	getCustomerIdByUUID = async (req: Request, res: Response) => {
		try {
			const { uuid } = req.body;
			const userResult = await this.customersService.getCustomerIdByUUID(uuid);

			if (userResult) {
				res.json({ message: "found customer", customer_id: userResult.id });
				return;
			} else {
				res.status(400).json({ message: "no such user" });
			}
		} catch (error) {
			logger.error(error.message);
			res.status(500).json({ message: "internal server error" });
		}
	};

	register = async (req: Request, res: Response) => {
		console.log(req.body);
		const { name, email, password, phone } = req.body;
		let regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

		if (!email || !password || !regex.test(email) || !phone) {
			throw new InvalidInfoError();
		}

		const customer = await this.customersService.createCustomer(
			name,
			email,
			password,
			phone
		);
		const payload = { uuid: customer.uuid, email: customer.email };
		const token = jwtSimple.encode(payload, jwt.jwtSecret);
		if (customer) {
			res.json({ message: "signup success", token });
		} else {
			res.status(400).json({ message: "signup failed" });
		}
	};

	login = async (req: Request, res: Response) => {
		try {
			const { email, password } = req.body;
			console.log(req.body.email);
			if (!email || !password) {
				res.status(400).json({ message: "missing username / password" });
				return;
			}

			const customer = await this.customersService.checkCustomer(
				email
				// password,
			);

			if (!customer) {
				res.status(400).json({ message: "no such user" });
				return;
			} else {
				let result = await checkPassword(password, customer.password);
				if (!result) {
					res.status(400).json({ message: "wrong password" });
					return;
				}

				// start generating jwt
				const payload = {
					uuid: customer.uuid,
					email: customer.email
				};
				const token = jwtSimple.encode(payload, jwt.jwtSecret);

				res.json({ message: "login success", data: token });
			}
		} catch (error) {
			logger.error(error.message);
			res.status(500).json({ message: "internal server error" });
		}
	};
}
