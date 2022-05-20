const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = species.filter((nome) => nome.name === animal, {});
  return animais[0].residents.every((ano) => ano.age >= age);
}

module.exports = getAnimalsOlderThan;
