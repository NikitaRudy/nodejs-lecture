const _ = require('lodash');

const user = {
  name: 'John',
  age: 20,
  city: 'London',
  language: 'English',
}

const result = _.pick(user, ['name', 'age']);

console.log(result);