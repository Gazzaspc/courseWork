/* water-limits.js */

/* This reads in from    converters.js    and uses the functions/methods that are in there */

/* Tells it to use   converters.js */
const converters = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

/* Tells it which function to use - converters.celsiusToFahrenheit(...) */
const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);