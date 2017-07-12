const Promise = require('bluebird')
  , db = require('../server/db/db')
  , models = require('../server/db/models/')

const parents = [
  {
    name: 'Dolly',
    color: 'Black',
    sex: 'F',
    active: false
  },
  {
    name: 'Martin',
    color: 'Black',
    sex: 'M'
  },
  {
    name: 'Charlee',
    color: 'Black',
    sex: 'F'
  },
  {
    name: 'Max',
    color: 'White',
    sex: 'M'
  }
]

const litterOnePups = [
  {
    name: 'Tailee',
    bio: 'the nicest cutest dog ever! Active and playful and super pretty! Takes after her mama in temperament and loves to cuddle.',
    color: 'Black',
    status: 'AVAILABLE',
    eyeColor: 'Black',
    sex: 'M',
    price: 1200,
    imageUrl: 'images/litter1.jpg'
  },
  {
    name: 'Hailee',
    bio: 'the nicest cutest dog ever! Active and playful and super pretty! Takes after her mama in temperament and loves to cuddle.',
    color: 'White',
    status: 'SOLD',
    eyeColor: 'blue',
    sex: 'F',
    price: 1400,
    imageUrl: 'images/litter1.jpg'
  }
];

const litterTwoPups = [
  {
    name: 'Sage',
    bio: 'the nicest cutest dog ever! Active and playful and super pretty! Takes after her mama in temperament and loves to cuddle.',
    color: 'White',
    status: 'SOLD',
    eyeColor: 'black',
    sex: 'F',
    price: 1200,
    imageUrl: 'images/litter1.jpg'
  },
  {
    name: 'Basil',
    bio: 'the nicest cutest dog ever! Active and playful and super pretty! Takes after her mama in temperament and loves to cuddle.',
    color: 'Black',
    status: 'AVAILABLE',
    eyeColor: 'blue',
    sex: 'M',
    price: 1000,
    imageUrl: 'images/litter1.jpg'
  }
];

const myLitters = [
  {
    DOB: new Date("February 13, 2017 11:13:00"),
    puppies: litterOnePups,
    parents: [parents[0], parents[1]]
  },
  {
    DOB: new Date("February 25, 2017 12:00:00"),
    puppies: litterTwoPups,
    parents: [parents[2], parents[3]]
  }
];

parents[0].litter = [myLitters[0]];
parents[1].litter = [myLitters[0]];
parents[2].litter = [myLitters[1]];
parents[3].litter = [myLitters[1]];

db.sync({ force: true })
  .then(() => {
    return Promise.map(myLitters, (litter) => {
      return models.Litter.create(litter, {
        include: [models.Puppy, models.Parent]
      })
    })
  })
  .then(function () {
    console.log("Finished inserting data");
  })
  .catch(function (err) {
    console.error('There was totally a problem', err, err.stack);
  })
  .finally(function () {
    db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
