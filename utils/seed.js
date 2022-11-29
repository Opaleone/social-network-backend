const connection = require('../config/connection');
const { Thought , User } = require('../models');
const getRandomName = require('./data');

console.log(getRandomName());
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 1000; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    let usernameGen = []

    const emailCarriers = ['@gmail.com', '@hotmail.com', '@outlook.com', '@yahoo.com']

    const generateUsername = () => {

      let firstPart = first.split('')[0]

      let randomNum = Math.floor(Math.random() * 4000)

      usernameGen.push(firstPart)
      usernameGen.push(last)
      usernameGen.push(randomNum)
    }

    generateUsername()

    // console.log(usernameGen)

    users.push({
      username: usernameGen.join('').toLowerCase(),
      email: usernameGen.join('').toLowerCase() + emailCarriers[Math.floor(Math.random() * emailCarriers.length)],
    });
  }

  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});
