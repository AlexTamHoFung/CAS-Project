import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("customers", function (table) {
		table
			.uuid("uuid", { primaryKey: true })
			.defaultTo(knex.raw("gen_random_uuid()"));
		table.string("name", 64).unique().notNullable();
		table.string("email").notNullable();
		table.string("password", 64).notNullable();
		table.integer("phone");
		table.string("gender");
		table.integer("year_of_birth");
		table.integer("month_of_birth");
		table.string("occuption");
		table.string("income_group");
		table.string("region");
		table.string("qrcode");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("customers");
}
