var mt = window.matchMedia("(max-width: 1024px)");

if (mt.matches) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#splide', {
            perPage: 1,
            perMove: 1,
            gap: "0rem",
            type: 'loop',
            autoplay: true,
            pagination: false,
            arrows: false,
            interval: 0,
            trimSpace: false,
            speed: 50000,
            waitForTransition: false,
            pauseOnHover: false,
        }).mount();
    });
} else {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#splide', {
            perPage: 3,
            perMove: 1,
            gap: "1rem",
            type: 'loop',
            autoplay: true,
            pagination: false,
            arrows: false,
            interval: 0,
            trimSpace: true,
            speed: 50000,
            waitForTransition: false,
            pauseOnHover: false,
        }).mount();
    });
}

var mx = window.matchMedia("(max-width: 700px)");

if (mx.matches) {

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide__infra', {
      direction: 'ttb',
      height: '35vh',
      perPage: 1,
      perMove: 1,
      type: 'loop',
      gap: "2rem",
      arrows: false,
      autoplay: true,
      interval: 3000,
      pauseOnFocus: true,
      trimSpace: true,
      speed: 1500,
    }).mount();
  });
} else {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide__infra', {
      direction: 'ttb',
      height: '81vh',
      perPage: 1,
      perMove: 1,
      type: 'loop',
      gap: "1rem",
      arrows: false,
      autoplay: true,
      interval: 3000,
      pauseOnFocus: true,
      trimSpace: true,
      speed: 1500,
    }).mount();
  });
}


var mp = window.matchMedia("(max-width: 700px)");

if (mp.matches) {



document.addEventListener('DOMContentLoaded', function () {
  var secondarySlider = new Splide('#secondary-slider', {
    fixedWidth: "100vw",
    width: "100vw",
    height: "75vh",
    gap: "1rem",
    direction: "ttb",
    perPage: 2,
    perMove: 1,
    focus: "center",
    cover: true,
    isNavigation: true,
    pagination: false,
    type: "loop",
  }).mount();

  var primarySlider = new Splide('#primary-slider', {
    type: 'loop',
    heightRatio: 0.5,
    width: "79vw",
    height: "75vh",
    pagination: false,
    arrows: false,
    cover: true,
  }); // do not call mount() here.    

  primarySlider.sync(secondarySlider).mount();
});

} else {


  document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
      fixedWidth: "30vw",
      width: "20vw",
      height: "75vh",
      gap: "1rem",
      direction: "ttb",
      perPage: 3,
      perMove: 1,
      focus: "center",
      cover: true,
      isNavigation: true,
      pagination: false,
      type: "loop",
      breakpoints: {
        '600': {
          fixedWidth: 66,
          height: 40,
        }
      },
    }).mount();
  
    var primarySlider = new Splide('#primary-slider', {
      type: 'loop',
      heightRatio: 0.5,
      width: "79vw",
      height: "75vh",
      pagination: false,
      arrows: false,
      cover: true,
    }); // do not call mount() here.    
  
    primarySlider.sync(secondarySlider).mount();
  });




}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("menu").style.opacity = "0.5";
  } else {
    document.getElementById("menu").style.opacity = "1";
  }
}





var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("sendbutton").style.display = "inline";
  } else {
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("sendbutton").style.display = "none";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}



function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById('infra').scrollLeft -= (delta * 20); // Multiplied by 40
      e.preventDefault();
  }
  if (document.getElementById('infra').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById('infra').addEventListener('mousewheel', scrollHorizontally, false);
      // Firefox
      document.getElementById('infra').addEventListener('DOMMouseScroll', scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.getElementById('infra').attachEvent('onmousewheel', scrollHorizontally);
  }
})();



