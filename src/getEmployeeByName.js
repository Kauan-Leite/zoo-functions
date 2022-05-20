const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {}
  }

  return data.employees.find((nome) => (nome.firstName === employeeName) || (nome.lastName === employeeName), {});

}

module.exports = getEmployeeByName;
