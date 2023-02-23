import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("coupons", function (table) {
		table.increments();
		table.uuid("uuid").defaultTo(knex.raw("gen_random_uuid()"));
		table.date("transaction_date").notNullable();
		table.string("name").notNullable();
		table.text("description").notNullable();
		table.date("expiry").notNullable();
		table.boolean("is_used").notNullable();
		table.boolean("is_expired").notNullable();
		table.integer("customer_id").notNullable();
		table.foreign("customer_id").references("customers.id");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("coupons");
}
