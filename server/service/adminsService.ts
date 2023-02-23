import { Knex } from "knex";
import { Admins } from "./model";

export class AdminsService {
	constructor(private dbClient: Knex) {}

	async getAdmin(username: string) {
		const getAdmin = await this.dbClient<Admins>("admins")
			.select("username")
			.where({ username: username })
			.first();

		return getAdmin;
	}

	async checkAdmin(username: string) {
		const admin = await this.dbClient
			.select("*")
			.from<Admins>("admins")
			.where({ username: username })
			.first(["id", "username", "password"]);
		return admin;
	}
}
