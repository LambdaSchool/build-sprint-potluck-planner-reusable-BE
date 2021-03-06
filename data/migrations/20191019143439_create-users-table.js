
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments()

        tbl.string("username", 255).notNullable().unique()
        tbl.string("password", 255).notNullable()
        tbl.string("email", 255).unique()
    })
    .createTable("events", tbl => {
      tbl.increments()

      tbl.string("event_name", 255).notNullable()
      tbl.string("time", 255).notNullable()
      tbl.string("address", 255).notNullable()
      tbl.string("dates", 255).notNullable()
      tbl.string("guests", 255).notNullable()
      tbl.integer("users_id")
    })
    .createTable("foods", tbl => {
      tbl.increments()

      tbl.string("food_item", 255).notNullable()
      tbl.integer("events_id", 255).notNullable()
      tbl.boolean("completed").notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("foods")
  .dropTableIfExists("events")
 .dropTableIfExists("users")
};
