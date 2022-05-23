const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const residenteName = data.species.map((resids) => resids.name);
    const residenteQuant = data.species.map((resids) => resids.residents.length);
    const obj = {};
    for (let index = 0; index < residenteName.length; index += 1) {
      obj[`${residenteName[index]}`] = parseFloat(`${residenteQuant[index]}`);
    } return obj;
  }
  const searchName = data.species.find((nome) => nome.name === animal.specie);

  if (animal.specie !== undefined && animal.sex === undefined) {
    return searchName.residents.length;
  }
  const residenteSex = animal.sex;
  const searchSex = searchName.residents.filter((sex) => sex.sex === residenteSex).length;
  return searchSex;
}

module.exports = countAnimals;
