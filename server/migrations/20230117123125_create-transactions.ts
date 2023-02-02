import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("transactions", function(table){
        table.increments();
        table.date("transaction_date").notNullable();
        table.integer("amount").notNullable();
        table.string("payment_method").notNullable();
        table.boolean("collect_point").notNullable();
        table.boolean("is_refund").defaultTo(false).notNullable();
        table.integer("customer_id").notNullable();
        table.foreign("customer_id").references("customers.id");
        table.integer("store_user_id").notNullable();
        table.foreign("store_user_id").references("store_users.id");
        table.timestamps(true, true);

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("transactions");
}

