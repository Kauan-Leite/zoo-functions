const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  let manager = data.employees.filter((ids) => ids.id === id);
  let filNome = manager.every((nome) => nome.managers.length < 2);


  return filNome;
}


function getRelatedEmployees(managerId) {
  // seu código aqui
  try {
    if (isManager(managerId) === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    };

    const fillIncludeManager = data.employees.filter((id) => id.managers.includes(managerId));
    const fullNameColab = fillIncludeManager.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`)
    return fullNameColab;

  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
