const { db, Vegetable } = require('./models');


db.sync({force: true})
  .then(() => {
    return Vegetable.create({
      name: 'carrot',
      color: 'orange',
      planted_on: '2018-05-05'
    });
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close();
  });

// const vegetable = Vegetable.create({
//   name: 'carrot',
//   color: 'orange',
//   planted_on: '2018-05-05'
// }).then();

