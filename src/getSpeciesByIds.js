const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let idA = ids[0];
  let idB = ids[1];

  if (idA === undefined){
    return [];
  } else {
    const verifyID = () => (
      data.species.filter((specie) => (specie.id === idA) || (specie.id === idB))
    );
    return verifyID();
  }
}


module.exports = getSpeciesByIds;
