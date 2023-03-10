import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("store_users", function (table) {
		table.increments();
		table.string("name").notNullable();
		table.string("username").notNullable();
		table.string("password").notNullable();
		table.string("location").notNullable();
		table.integer("size").notNullable();
		table.integer("company_id");
		table.foreign("company_id").references("companies.id");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("store_users");
}
