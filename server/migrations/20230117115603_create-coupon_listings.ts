import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("coupon_listings", function(table){
        table.increments();
        table.string("name").notNullable();
        table.text("description").notNullable();
        table.string("coupon_type").notNullable();
        table.integer("points_required").notNullable();
        table.date("valid_start").notNullable();
        table.date("valid_end").notNullable();
        table.boolean("is_deleted").defaultTo(false).notNullable();
        table.integer("company_id").notNullable();
        table.foreign("company_id").references("companies.id");
        table.timestamps(true, true);

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("coupon_listings");
}

