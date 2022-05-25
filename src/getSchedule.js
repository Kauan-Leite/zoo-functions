const data = require('../data/zoo_data');

function getAnimalByName(animal) {
  return data.species.find(({ name }) => name === animal).availability;
}

function getOfficeHour(openH, closeH) {
  if (openH === 0 && closeH === 0) return 'CLOSED';

  return `Open from ${openH}am until ${closeH}pm`;
}

function getExhibition(weekDay) {
  if (weekDay === 'Monday') return 'The zoo will be closed!';

  return data.species.reduce((acc, curr) => {
    if (curr.availability.includes(weekDay)) {
      acc.push(curr.name);
    }
    return acc;
  }, []);
}

function getAll() {
  const result = {};
  const weekDays = Object.keys(data.hours);
  const officeHourObjects = Object.values(data.hours);
  officeHourObjects.forEach(({ open, close }, index) => {
    const officeHour = getOfficeHour(open, close);
    const exhibition = getExhibition(weekDays[index]);
    result[weekDays[index]] = {
      officeHour,
      exhibition,
    };
  });
  return result;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (data.species.some(({ name }) =>
    name === scheduleTarget)) return getAnimalByName(scheduleTarget);

  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const dayData = getAll()[scheduleTarget];
    const result = {};
    result[scheduleTarget] = dayData;
    return result;
  }

  return getAll();
}

module.exports = getSchedule;
