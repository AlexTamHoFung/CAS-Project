import { Knex } from "knex";
import { ApplicationError } from "../utils/error";
import {  hashPassword } from "../utils/hash";
import { Customer } from "./model";

export class CustomersService {
	constructor(private dbClient: Knex) {}

	async getCustomer(name: string) {
		const getCustomer = await this.dbClient("customers")
			.select("name")
			.where({ name: name });

		return getCustomer;
	}

	async getCustomerByUUID(uuid: string) {
		const getCustomer = await this.dbClient<Customer>("customers")
			.select("*")
			.where("uuid", uuid)
			.first();

		return getCustomer;
	}

	async createCustomer(
		name: string,
		email: string,
		password: string,
		phone: number,
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
		throw new ApplicationError("Duplicated User", 400);
	}

	async checkCustomer(name: string ) {
		const customer = await this.dbClient.select("*")
		.from<Customer>("customers")
			.where({ name: name })
			.first(["uuid", "name", "password"]);
			return customer;
		// if (customer && (await checkPassword(password, customer.password))) {
		// }
		// throw new InvalidInfoError();
	}
}
