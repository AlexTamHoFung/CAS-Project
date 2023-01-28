import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("points", function (table) {
        table.increments();
        table.integer("amount").notNullable();
        table.string("point_type").notNullable();
        table.integer("customer_id").notNullable();
        table.foreign("customer_id").references("customers.id");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("points");
}

