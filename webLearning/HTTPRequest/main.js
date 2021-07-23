// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy=";

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    //get the value of the element with
    //the id #input
    const wordQuery = inputField.value;

    //NOTE...Spaces must NOT go in the 'endpoint' string to seprate the fields
    //eg 
    //const endpoint = url + queryParams + wordQuery;   - would be ok
    //const endpoint = url + " " + queryParams + " " + wordQuery; - is not ok
    // and below (if setup for jQuery) is okay.
    // NOTE
    //If you need spaces then you MUST send  %20  where you want the space
    // (%20) = space in XHTTPRequest(s)
    // maybe use     wordQuery.replace(/ /g, "%20")
    const endpoint = `${url}${queryParams}${wordQuery}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {

            if (document.querySelector('input[name="display"]:checked').value == "1") {
                renderRawResponse(xhr.response);
            } else {
                renderResponse(xhr.response)
            }
        }
    }

    xhr.open("GET", endpoint);
    xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    };
    getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
