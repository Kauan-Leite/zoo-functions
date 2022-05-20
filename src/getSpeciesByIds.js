// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const idA = ids[0];
  const idB = ids[1];

  if (idA === undefined) {
    return [];
  }

  const verifyID = () => (
    data.species.filter((specie) => (specie.id === idA) || (specie.id === idB))
  );
  return verifyID();
}

module.exports = getSpeciesByIds;
