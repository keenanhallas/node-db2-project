exports.up = function(knex) {
    return knex.schema.createTable("car-dealer", tbl => {
        tbl.increments();
        tbl.string("vin", 17)
            .unique()
            .notNullable();
        tbl.string("make", 128)
            .notNullable();
        tbl.string("model", 128)
            .notNullable();
        tbl.integer("mileage")
            .unsigned()
            .notNullable();
        tbl.string("transmission", 128)
            .defaultTo("Unknown");
        tbl.string("titleStatus", 128)
            .defaultTo("Unknown");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car-dealer");
};