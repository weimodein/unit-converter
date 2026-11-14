// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
const feetPerMeter = 3.281;
const gallonPerLiter = 0.264;
const poundPerKilogram = 2.204;
const unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const lengthOutput = document.getElementById("length-output");
const volumeOutput = document.getElementById("volume-output");
const massOutput = document.getElementById("mass-output");

convertBtn.addEventListener("click", () => {
  const unit = Number(unitInput.value);
  if (unit) {
    calculateConversion(unit);
  } else {
    window.alert("Invalid Input");
    unitInput.value = "";
  }
});

function calculateConversion(unit) {
  // Calculate Length (Meter/Feet)
  let feetOutput = 0;
  feetOutput = unit * feetPerMeter; // Meters -> Feet
  let metersOutput = 0;
  metersOutput = unit / feetPerMeter; // Feet -> Meters

  // Calculate Volume (Liters/Galon)
  let gallonsOutput = 0;
  gallonsOutput = unit * gallonPerLiter; // Liters -> Gallons
  let litersOutput;
  litersOutput = unit / gallonPerLiter; // Gallons -> Liters

  // Calculate Mass (Kilograms/Pounds)
  let poundsOutput = 0;
  poundsOutput = unit * poundPerKilogram; // Kilos -> Pounds
  let kilosOutput = 0;
  kilosOutput = unit / poundPerKilogram; // Pounds -> Kilos

  renderLengthConversion(unit, feetOutput, metersOutput);
  renderVolumeConversion(unit, gallonsOutput, litersOutput);
  renderMassConversion(unit, poundsOutput, kilosOutput);
}

// FUNCTIONS
function renderLengthConversion(unit, feetOutput, metersOutput) {
  lengthOutput.innerHTML = `${unit} meters = ${feetOutput.toFixed(3)} feet | ${unit} feet = ${metersOutput.toFixed(3)} meters`;
}

function renderVolumeConversion(unit, gallonsOutput, litersOutput) {
  volumeOutput.innerHTML = `${unit} liters = ${gallonsOutput.toFixed(3)} gallons | ${unit} gallons = ${litersOutput.toFixed(3)} liters`;
}

function renderMassConversion(unit, poundsOutput, kilosOutput) {
  massOutput.innerHTML = `${unit} kilos = ${poundsOutput.toFixed(3)} pounds | ${unit} pounds = ${kilosOutput.toFixed(3)} kilos `;
}

// TO DO: Refactor to improve the code quality
