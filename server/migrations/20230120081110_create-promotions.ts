import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("promotions", function (table) {
        table.increments();
        table.string("name").notNullable;
        table.text("description").notNullable;
        table.integer("discount").notNullable;
        table.string("promotion_type").notNullable;
        table.date("start_date").notNullable;
        table.date("end_date").notNullable;
        table.boolean("is_deleted").defaultTo(false).notNullable;
        table.integer("listing_id").notNullable;
        table.foreign("listing_id").references("coupon_listings.id");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("promotions");
}

