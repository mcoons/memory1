
exports.seed = function(knex, Promise) {
  return knex('resolution').del()
    .then(function () {
      return knex('resolution').insert([
        {dueDate: '1997-02-01', resolution: 'Go skiing'},
        {dueDate: '1997-05-01', resolution: 'Do stand-up'},
        {dueDate: '1997-09-01', resolution: 'Start knitting'}
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 4;");
  });
};

