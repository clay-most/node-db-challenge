exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Resource 1",
      description: "Resource 1 description"
    },
    {
      id: 2,
      name: "Resource 2",
      description: "Resource 2 description"
    },
    {
      id: 3,
      name: "Resource 3",
      description: "Resource 3 description"
    }
  ]);
};
