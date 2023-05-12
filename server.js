// Worked with Seeso
const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const PORT = 8000;

// create fake user
const createUser = () => {
  const newFake = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.database.mongodbObjectId()
  };
  return newFake;
};

// users route
app.get('/api/users/new', (req, res) => {
  const newFakeUser = createUser();
  console.log(newFakeUser);
  res.json(newFakeUser)
});


// create fake company
const createCompany = () => {
  const newFake = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  };
  return newFake;
};

// company route
app.get('/api/companies/new', (req, res) => {
  const newFakeCompany = createCompany();
  console.log(newFakeCompany);
  res.json(newFakeCompany)
});


app.get('/api/user/company', (req, res) => {
  const newFakeUser = createUser();
  const newFakeCompany = createCompany();
  res.json({
    user: newFakeUser,
    company: newFakeCompany
  })
});


app.listen(PORT, () => console.log("server up on PORT:", PORT))