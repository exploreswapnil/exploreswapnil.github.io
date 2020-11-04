// home
function home() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "posts/home/default.html", true);
  xhttp.send();
}

// azure
function azure() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "posts/azure/default.html", true);
  xhttp.send();
}

// devops
function devops() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "posts/devops/default.html", true);
  xhttp.send();
}

// software_testing
function software_testing() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", "posts/software-testing/default.html", true);
  xhttp.send();
}


//   light toggle
function light_toggle() {

  if (document.getElementById("lightToggle").value == 1) {
    document.getElementById("body").style.color = "white";
    document.getElementById("body").style.backgroundColor = "black";

    document.getElementById("lightToggle").innerHTML = "lights on";
    document.getElementById("lightToggle").value = 2;
  }
  else {
    document.getElementById("body").style.color = "black";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("lightToggle").innerHTML = "lights off";
    document.getElementById("lightToggle").value = 1;
  }

}

function letter() {

  // var encrypted = CryptoJS.AES.encrypt("bakait aurat", "Secret Passphrase");
  //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  var encrypted1 = "U2FsdGVkX18Fm1dPyhVztaOapbVsLcqByk2uNEctCWc=";
  var encrypted2 = "U2FsdGVkX1/X6S8R9cbsIzF5LuIgeNKKsEalcB3OUFM=";
  var decrypted1 = CryptoJS.AES.decrypt(encrypted1, "Secret Passphrase");
  var decrypted2 = CryptoJS.AES.decrypt(encrypted2, "Secret Passphrase");
  //4d657373616765

  // document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);


  var txt;
  var person = prompt("enter one of the nick names, obviously i call you with that name", "_h_ _ _ or _ _ _i_ _u_a_");

  if(person == decrypted1.toString(CryptoJS.enc.Utf8) || person == decrypted2.toString(CryptoJS.enc.Utf8)){
    txt = "Hello " + person + "! How are you today?";

    document.getElementById("demo").innerHTML = txt ;
    document.getElementById("letter-btn").style.display = "none";
  }
  else{
    txt = "looks like you entered wrong or you left the me blank, enter your name, its easy";
    document.getElementById("demo").innerHTML = txt;
    document.getElementById("letter-btn").innerText = "retry";
  }
  
}


