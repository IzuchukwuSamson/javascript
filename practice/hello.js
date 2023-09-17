const EXPECTED_MINUTES_IN_OVEN = 40;
const actualMinutesInOven = 30;
const numberOfLayers = 3;

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// console.log(remainingMinutesInOven(30));

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const preparation_time = preparationTimeInMinutes(numberOfLayers);
  return preparation_time + actualMinutesInOven;
}

export default {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes,
};
