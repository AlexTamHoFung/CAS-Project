import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("coupon_transactions", function (table) {
		table.increments();
		table.date("transaction_date").notNullable();
		table.integer("total").notNullable();
		table.integer("quantity").notNullable();
		table.integer("customer_id").notNullable();
		table.foreign("customer_id").references("customers.id");
		table.integer("listing_id").notNullable();
		table.foreign("listing_id").references("coupon_listings.id");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("coupon_transactions");
}
