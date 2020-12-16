function myFunction() {
    var x = document.getElementById("more-about");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}

function myFunction2() {
    var x = document.getElementById("more-about2");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}

function myFunction3() {
    var x = document.getElementById("more-about3");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}

function myFunction4() {
    var x = document.getElementById("more-about4");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}

function myFunction11() {
    var x = document.getElementById("more-about11");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}

function myFunction11() {
    var x = document.getElementById("more-about11");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}

function myFunction12() {
    var x = document.getElementById("more-about12");
    if (x.style.transform === "translateY(1500px)") {
        x.style.transform = "translateY(0px)";
        
    } else {
      x.style.transform = "translateY(1500px)";
      
    }
}


// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});