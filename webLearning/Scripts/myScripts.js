
// (myScripts.js) This is the file that holds my Javascript Coding

function showMess(param1, param2) {
  document.getElementById(param1).innerHTML = param2;
  return;
}

function emptyString(e) {
    switch (e) {
        case "":
        case null:
        case typeof (e) == "undefined":
            return true;
        default:
            return false;
    }
}
