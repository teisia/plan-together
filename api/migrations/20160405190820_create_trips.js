exports.up = function(knex, Promise) {
  return knex.schema.createTable('trip', function(table){
    table.increments();
    table.string('title');
    table.text('description');
    table.string('trip_start');
    table.string('trip_end');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trip');
};
