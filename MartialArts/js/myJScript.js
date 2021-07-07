////Javascript in here

function resetBlocker() {
    var myBlocker = document.getElementsByClassName("blocker"); //set a variable as the BLOCKER element so I can change as necessary
    var myHeader = document.getElementById("header"); // This tells me which header to read the size of

    //In case there is more than one element with a 'blocker' class then I can read them all.
    for (x of myBlocker) {
        //set each 'blocker' element I found to be the same size as the header
        x.style.height = myHeader.offsetHeight + "px";
    }
}

resetBlocker(); // Need this here so it resizes straight away
window.onresize = resetBlocker; //Need this here so it resizes when the screen size changes
