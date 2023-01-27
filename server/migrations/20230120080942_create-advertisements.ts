import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("advertisements", function (table) {
        table.increments();
        table.string("advertisement_type").notNullable();
        table.text("description").notNullable();
        table.date("start_date").notNullable();
        table.date("end_date").notNullable();
        table.boolean("is_deleted").notNullable();
        table.integer("company_id").notNullable();
        table.foreign("company_id").references("companies.id");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("advertisements");
}

