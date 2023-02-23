import type { Request, Response } from "express";
import { AdminsService } from "../service/adminsService";
import { checkPassword } from "../utils/hash";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";

export class AdminsController {
	constructor(private adminsService: AdminsService) {}

	// Get Admin UserInfo
	// Method: GET
	getAdmin = async (req: Request, res: Response) => {
		const username = req.params.username;
		const userResult = await this.adminsService.getAdmin(username);

		if (userResult) {
			res.json({ message: "found admin", data: userResult });
		} else {
			res.status(400).json({ message: "no such user" });
		}
	};

	login = async (req: Request, res: Response) => {
		const { username, password } = req.body;
		if (!username || !password) {
			res.status(400).json({ message: "missing username / password" });
			return;
		}

		const admin = await this.adminsService.checkAdmin(username);
		if (!admin) {
			res.status(400).json({ message: "no such user" });
			return;
		}

		let result = await checkPassword(password, admin.password);
		if (!result) {
			res.status(400).json({ message: "wrong password" });
			return;
		}

		// start generating jwt
		const payload = { id: admin.id, username: admin.username };
		const token = jwtSimple.encode(payload, jwt.jwtSecret);

		res.json({ message: "login success", data: token });
	};
}
