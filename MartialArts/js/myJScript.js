////Javascript in here

function resetBlocker() {
    var myBlocker = document.getElementsByClassName("blocker");
    var myHeader = document.getElementById("header");

    for (x of myBlocker) {
        x.style.height = myHeader.offsetHeight + "px";
    }
}

resetBlocker(); // Need this here so it resizes straight away
window.onresize = resetBlocker; //Need this here so it resizes when the screen size changes
