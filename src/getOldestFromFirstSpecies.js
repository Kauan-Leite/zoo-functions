const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const searchId = data.employees.filter((element) => element.id === id);
  const management = searchId.map((element) => element.responsibleFor[0])[0];

  const animal = data.species.filter((element) => element.id === management);
  const fillResids = animal.map((element) => element.residents)[0];

  let mostAge = 0;
  let indexToArr = 0;
  for (let index = 0; index < fillResids.length; index += 1) {
    if (fillResids[index].age > mostAge) {
      mostAge = fillResids[index].age;
      indexToArr = index;
    }
  }
  const msg = [fillResids[indexToArr].name, fillResids[indexToArr].sex, fillResids[indexToArr].age];
  return msg;
}

module.exports = getOldestFromFirstSpecies;
