import { Knex } from "knex";
// import { InvalidInfoError } from "../utils/error";
import { checkPassword, hashPassword } from "../utils/hash";
// import { Customer } from "./model";

export class CustomerService {
	constructor(private dbClient: Knex) {}
	async createCustomer(
		name: string,
		email: string,
		phone: number,
		password: string
	) {
		const customer = await this.dbClient("customers")
			.where("email", "=", email)
			.first(["uuid", "name", "email", "password", "phone"]);
		if (!customer) {
			password = await hashPassword(password);
			const insertData = { name, email, password, phone };
			const result = await this.dbClient("customers")
				.insert(insertData)
				.returning("uuid");
			return result[0].uuid;
		}
	}
}
