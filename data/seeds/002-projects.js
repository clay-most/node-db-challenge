exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "Project 1",
      description: "Project 1 description",
      completed: false
    },
    {
      id: 2,
      name: "Project 2",
      description: "Project 2 description",
      completed: false
    },
    {
      id: 3,
      name: "Project 3",
      description: "Project 3 description",
      completed: false
    }
  ]);
};
