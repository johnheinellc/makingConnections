// connection requests card removal 1
var i=0;
var countElement = document.querySelector("#count");
function remove1(element) {
    console.log(element);
    element.style.display = "none"
    // This didnt work, but i wanted to leave to show my work
    if( element.style.display = "none");
        (i=0, i<1, i++)
        countElement.innerText = (i--) ;
        console.log(i)
}

// connection requests card removal 2

function remove2(element) {
    console.log(element);
    element.style.display = "none"
}

// edit Name

function editProfile(element) {
    console.log(element);
document.getElementById("myName").contentEditable = true;
}