// home
function home() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
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
    xhttp.onreadystatechange = function() {
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
    xhttp.onreadystatechange = function() {
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
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "posts/software-testing/default.html", true);
    xhttp.send();
  }


//   light toggle
function light_toggle(){
    
    if(document.getElementById("lightToggle").value == 1){
        document.getElementById("body").style.color = "white";
        document.getElementById("body").style.backgroundColor="black";

        document.getElementById("lightToggle").innerHTML = "lights on";
        document.getElementById("lightToggle").value = 2;
    }
    else{
        document.getElementById("body").style.color = "black";
        document.getElementById("body").style.backgroundColor="white";
        document.getElementById("lightToggle").innerHTML = "lights off";
        document.getElementById("lightToggle").value = 1;
    }
 
}




