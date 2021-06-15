/* dom-functions.js */

/* works in conjunction with secret-messages.js AND Node.html */

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

/* Tells the sysytem that these two functions can be imported and used in other .js files */
export { toggleHiddenElement, changeToFunkyColor };

/*
 * NOTE 
 * Instead of having a separate line for the   'export {..., ...}'   command you could just say - 
 * 
 * export const toggleHiddenElement = (domElement) => {
 *     if (domElement.style.display === 'none') {
 *          domElement.style.display = 'block';
 *     } else {
 *          domElement.style.display = 'none';
 *     }
 * }
 * 
 */
