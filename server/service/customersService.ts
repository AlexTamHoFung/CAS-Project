import { Knex } from "knex";
import { ApplicationError } from "../utils/error";
import { hashPassword } from "../utils/hash";
import { Customer } from "./model";

export class CustomersService {
	constructor(private dbClient: Knex) {}
	async getCustomerIdByUUID(uuid: string) {
		const getCustomerId = await this.dbClient("customers")
			.select("id")
			.where({ uuid: uuid })
			.first();

		return getCustomerId;
	}

	async createCustomer(
		name: string,
		email: string,
		password: string,
		phone: number
	) {
		const customer = await this.dbClient("customers")
			.where("email", "=", email)
			.where("phone", "=", phone)
			.first(["id", "uuid", "name", "email", "password", "phone"]);
		if (!customer) {
			const hashedPassword = await hashPassword(password);
			const insertData = {
				username: name,
				name,
				email,
				password: hashedPassword,
				phone
			};
			const result = await this.dbClient("customers")
				.insert(insertData)
				.returning("id");
			return result[0].id;
		}
		throw new ApplicationError("Duplicated User", 400);
	}

	async checkCustomer(email: string) {
		const customer = await this.dbClient
			.select("*")
			.from<Customer>("customers")
			.where({ email: email })
			.first(["id", "uuid", "email", "password"]);
		return customer;
	}
}
