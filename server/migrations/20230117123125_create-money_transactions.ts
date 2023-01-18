import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("money_transactions", function(table){
        table.increments();
        table.timestamp("transaction_date").notNullable;
        table.integer("amount").notNullable;
        table.string("payment_method").notNullable;
        table.boolean("is_refund").defaultTo(false).notNullable;
        table.string("customer_uuid").notNullable;
        table.foreign("customer_uuid").references("customers.uuid");

        table.timestamps(true, true);

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("money_transactions");
}

