const data = require('../data/zoo_data');

function getEmployeesCoverage({ name, id }) {
  // seu código aqui
  const fill = data.employees.filter((element) => element.firstName === name || element.lastName === name || element.id === id);
  const response = fill.map((element) => element.responsibleFor)[0];
  const searchAnimals = [];
  const teste = data.species;


  const obj = {
    id: fill.map((element) => element.id)[0],
    fullname: `${fill.map((element) => element.firstName)} ${fill.map((element) => element.lastName)}`,
  }

  // console.log(fillByName.map((element) => element.firstName)[0]);
  console.log(obj)
}

getEmployeesCoverage({ name: 'Sharonda' })

module.exports = getEmployeesCoverage;
