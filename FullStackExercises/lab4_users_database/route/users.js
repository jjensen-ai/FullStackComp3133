const express = require('express');
const Users = require('../models/Users');
const route = express.Router();
const fs = require('fs');

route.post('/users', async (req, res) => {
  const userData = JSON.parse(fs.readFileSync('./UsersData.json', 'utf-8'));

  const seedData = async () => {
    try {
      await Users.create(userData);
      res.status(201).send({message: "Successfully added the JSON file"})
      res.end();
    } catch (error) {
        res.status(400).send(error.message)
    }
  };

  seedData();
});

module.exports = route;
