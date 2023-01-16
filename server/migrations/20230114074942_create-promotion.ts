import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("companies", function (table) {
		table.increments();
		table.string("name").notNullable();
		table.string("category").notNullable();
		table.integer("store_number").notNullable();
		table.string("positioning");
		table.string("type");
		table.date("found_date");
		table.string("size");
		table.integer("avg_revenue");
		table.integer("avg_transaction_count");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("companies");
}
