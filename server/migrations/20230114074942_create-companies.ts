import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("companies", function (table) {
		table.increments();
		table.string("name").notNullable();
		table.string("username").notNullable();
		table.string("password").notNullable();
		table.integer("number_of_store").notNullable();
		table.string("target_customer").notNullable();
		table.string("company_type").notNullable();
		table.string("category").notNullable();
		table.date("found_date").notNullable();
		table.string("size").notNullable();
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("companies");
}
