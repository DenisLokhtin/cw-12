const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');
const Image = require("./models/image");
const User = require("./models/User");

const run = async () => {
  await mongoose.connect(config.db.url);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  for (let i = 0; i < 5; i++) {
    let user = await User.create({
      email: `user${i}@gmail.com`,
      password: '1qaz@WSX29',
      token: nanoid(),
      displayName: `User${i}`,
    });
    for (let j = 0; j < 5; j++) {
      await Image.create({
        title: 'Title',
        image: `fixtures/${j + 1}.jpg`,
        author: user._id
      });
    }
  }

  await mongoose.connection.close();
};

run().catch(console.error);