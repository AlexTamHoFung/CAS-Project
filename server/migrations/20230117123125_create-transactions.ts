import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("transactions", function(table){
        table.increments();
        table.timestamp("transaction_date").notNullable;
        table.integer("amount").notNullable;
        table.string("payment_method").notNullable;
        table.boolean("collect_point").notNullable;
        table.boolean("is_refund").defaultTo(false).notNullable;
        table.uuid("customer_id").notNullable;
        table.foreign("customer_id").references("customers.uuid");
        table.integer("store_id").notNullable;
        table.foreign("store_id").references("stores.id");
        table.timestamps(true, true);

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("transactions");
}

