  
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
        document.getElementById('javascroll').scrollLeft -= (delta * 8); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('javascroll').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('javascroll').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('javascroll').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('javascroll').attachEvent('onmousewheel', scrollHorizontally);
    }
})();
