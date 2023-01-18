import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("companies", function (table) {
		table.increments();
		table.string("name").notNullable();
		table.string("username").notNullable();
		table.string("password").notNullable();
		table.integer("store_number").notNullable();
		table.string("target_customer");
		table.string("company_type");
		table.date("found_date");
		table.string("size");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("companies");
}
