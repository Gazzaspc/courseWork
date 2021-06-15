/* celsius-to-fahrenheit.js */

/* Known as Object Destructuring... This only extracts the
 * function .celsiusToFahrenheit() and no others can be used. * /

/* This reads in from    converters.js    and uses the functions/methods that are in there */

/* Tells it to use   converters.js */
const { celsiusToFahrenheit } = require('./converters.js');
/* NOTE...If there were more than one function to use you would say... */
/*const { celsiusToFahrenheit, secondFunction, ...etc... } = require('./converters.js'); */

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(input);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);