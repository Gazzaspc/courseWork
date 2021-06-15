/* converters.js */

/* This will be a function that I will add to the module.exports object - for other files to read & use */
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

/*...Add to the module.exports object */
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

/* Another way of doing things...
 * it creates a function and adds it to the module.exports object at the same time */ 
module.exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};