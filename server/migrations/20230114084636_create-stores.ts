import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("stores", function (table) {
		table.increments();
		table.string("location");
		table.string("size");
		table.integer("avg_transaction_count");
		table.integer("avg_revenue");
		table.integer("company_id");
		table.foreign("company_id").references("companies.id");
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("stores");
}
