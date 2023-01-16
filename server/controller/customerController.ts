import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { CustomersService } from "../service/customersService";
import { checkPassword } from "../hash";
import { InternalServerError, InvalidInfoError } from "../utils/error";
import jwtSimple from "jwt-simple";
import jwt from "../jwt";

export class CustomersController {
	constructor(private customersService: CustomersService) {}

    getCustomer =async (req: Request, res: Response) => {
        
    }


	register = async (req: Request, res: Response) => {
		const { name, email, password, phone } = req.body;
		let regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
		if (!email || !password || !regex.test(email)) {
			throw new InvalidInfoError();
		}
		const customer = await this.customersService.createCustomer(
			name,
			email,
			password,
			phone
		);
	};
}
