function overBtn(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
    }

function outBtn(x) {
    x.style.backgroundColor = "#474e5d";
    x.style.color = "white";
    }
function SwapDivsWithClick(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex";
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
}

//function Redirect() {
//    alert('You are being redirected');
//}
function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    //alert(userResponse); //troubleshooting application
    if (userResponse) {
        var win = window.open("https://www.tuscanyaccommodation.com/tuscany-villas/?gclid=EAIaIQobChMIlcqH3bzi2QIVDEwNCh1Xbg9DEAAYAyAAEgLW1vD_BwE", '_blank');
        win.focus();
    }
}
function Greeting() {
    var x = document.getElementById("jumbomain");
    var userResponse = prompt('Welcome to Tuscany Villa. What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome to Tuscany Villa ' + userResponse;
}