import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable("transactions", (table) => {
        table.setNullable("customer_id");
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable("transactions", (table) => {
        table.dropNullable("customer_id");
    })
}

