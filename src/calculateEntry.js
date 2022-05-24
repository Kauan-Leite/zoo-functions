const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const calcChildren = entrants.filter((element) => element.age < 18).length;
  const calcAdult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const calcSenior = entrants.filter((element) => element.age >= 50).length;

  const obj = { child: calcChildren, adult: calcAdult, senior: calcSenior };
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const numPessoas = countEntrants(entrants);

  const valueChild = numPessoas.child * 20.99;
  const valueAdult = numPessoas.adult * 49.99;
  const valueSenior = numPessoas.senior * 24.99;

  const finalValue = valueAdult + valueChild + valueSenior;

  return finalValue;
}

module.exports = { calculateEntry, countEntrants };
