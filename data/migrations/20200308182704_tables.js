exports.up = async function(knex) {
    
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table
      .boolean("completed")
      .notNull()
      .defaultTo(false);
  });

  await knex.schema.createTable("resources", table => {
    table.increments("id");
    table
      .text("name")
      .notNull()
      .unique();
    table.text("description");
  });

  await knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table
      .boolean("completed")
      .notNull()
      .defaultTo(false);
    table
      .integer("projects_id")
      .references("id")
      .inTable("projects")
      .notNullable();
  });

  await knex.schema.createTable("project_resources", table => {
    table
      .integer("projects_id")
      .references("id")
      .inTable("projects");
    table
      .integer("resources_id")
      .references("id")
      .inTable("resources");
    table.primary(["projects_id", "resources_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("project_resources");
};
