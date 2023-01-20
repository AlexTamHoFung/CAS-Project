import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("customers", function (table) {
		table.increments();
		table.string("name", 64).unique().notNullable();
		table.string("email").unique().notNullable();
		table.string("password", 64).notNullable();
		table.integer("phone").unique();
		table.string("gender");
		table.integer("yob");
		table.integer("mob");
		table.string("occupation");
		table.string("income_group");
		table.string("region");
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("customers");
}
