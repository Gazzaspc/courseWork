/* secret-messages.js */
/* works in conjunction with dom-functions.js AND Node.html */

/* This file is used to toggle the DISPLAY property of a element from NONE to BLOCK & VICE-VERSA */

/* but first we need to know what file holds the functions we want to use and import the relevant ones */
import { toggleHiddenElement, changeToFunkyColor } from "./dom-functions.js";
/* I don't need the ./ before the file name as it is in the same directory as this file
 * but seeing as the examples I read always do this I wanted to do it to
 */

/* Create variables for the elements I will be using here */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

/* Add the 'onclick' method to the button */
buttonElement.addEventListener('click', () => {
    /* Now to call the function that I imported from dom-functions.js */
    toggleHiddenElement(pElement);

    /* and...for fun (and to make use of the 2nd function I imported) */
    changeToFunkyColor(pElement);
});