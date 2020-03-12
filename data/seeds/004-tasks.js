exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      description: "Task 1 description",
      notes: "Task 1 notes",
      completed: false,
      projects_id: 1
    },
    {
      id: 2,
      description: "Task 2 description",
      notes: "Task 2 notes",
      completed: false,
      projects_id: 3
    },
    {
      id: 3,
      description: "Task 3 description",
      notes: "Task 3 notes",
      completed: false,
      projects_id: 3
    },
    {
      id: 4,
      description: "Task 4 description",
      notes: "Task 4 notes",
      completed: false,
      projects_id: 2
    },
    {
      id: 5,
      description: "Task 5 description",
      notes: "Task 5 notes",
      completed: false,
      projects_id: 2
    },
    {
      id: 6,
      description: "Task 6 description",
      notes: "Task 6 notes",
      completed: false,
      projects_id: 1
    }
  ]);
};
