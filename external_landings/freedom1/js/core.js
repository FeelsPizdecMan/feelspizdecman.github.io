function _s() {
  try {
    arguments[0] = parseFloat(String(arguments[0]).replace(/\s/g, ""));
    if (isNaN(arguments[0]) || arguments[0] == 'Infinity') return "-";

    if (arguments[0] % 1 === 0) {
      var zeroes = "";
      if (arguments[1] != null && arguments[1] != 0) {
        zeroes = ".";
        for (var i = 0; i < arguments[1]; i++) zeroes += '0';
      }
      return arguments[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + zeroes;
    } else {
      if (arguments[1]) {
        var multiplier = Math.pow(10, arguments[1]);
        arguments[0] = Math.round(arguments[0] * multiplier);
        arguments[0] = arguments[0] / multiplier;
      }
      var parts = arguments[0].toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      parts[1] = (arguments[1] != null && parts[1] != null) ? addZeroes(parts[1], arguments[1]) : parts[1];
    }

    if (parts[1] != "" && parts[1] != null) return parts.join(".");

    return parts[0];

  } catch (e) {

  }

  return arguments[0];
}

function _ss(param1, param2) {
  return _s(param1, param2);
}

/* ========================================================================================== */


function slick_all() {
  if ($(window).width() < 1024) {
    $(".sec2-items").slick({
      slidesToShow: 1.5,
      centerMode: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 9999,
          settings: {
            unslick: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    $(".sec6-items").slick({
      arrows: false,
      responsive: [
        {
          breakpoint: 9999,
          settings: {
            unslick: true,
          },
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  } else if ($(window).width() > 1024) {
    $(".sec2-items").slick("unslick");
    $(".sec6-items").slick("unslick");
  }
}
// $(".hsec1-sl-right-slider").slick({
//   slidesToShow: 1,
//   arrows: true,
// });

$(window).ready(function () {
 // slick_all();
});
$(window).resize(function () {
  slick_all();
});

var number1 = document.querySelector(".item1 .count"),
  numberTop1 = document
    .querySelector(".sec3-bottom-items .item1")
    .getBoundingClientRect().top,
  start1 = 0;
end1 = $(".item1 .count").attr("max");
window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset + 400 > numberTop1 - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval1 = setInterval(function () {
      number1.innerHTML = ++start1;
      if (start1 == end1) {
        clearInterval(interval1);
      }
    }, 35);
  }
});

var number2 = document.querySelector(".item2 .count"),
  numberTop2 = document
    .querySelector(".sec3-bottom-items .item2")
    .getBoundingClientRect().top,
  start2 = 0;
end2 = $(".item2 .count").attr("max");
window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset + 400 > numberTop2 - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval2 = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval2);
      }
    }, 17);
  }
});

var number3 = document.querySelector(".item3 .count"),
  numberTop3 = document
    .querySelector(".sec3-bottom-items .item3")
    .getBoundingClientRect().top,
  start3 = 1600;
end3 = $(".item3 .count").attr("max");
window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset + 400 > numberTop3 - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval3 = setInterval(function () {
      number3.innerHTML = ++start3;
      if (start3 == end3) {
        clearInterval(interval3);
      }
    }, 1);
  }
});

var number4 = document.querySelector(".item4 .count"),
  numberTop4 = document
    .querySelector(".sec3-bottom-items .item4")
    .getBoundingClientRect().top,
  start4 = 0,
  end4 = $(".item4 .count").attr("max");
window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset + 400 > numberTop4 - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval4 = setInterval(function () {
      number4.innerHTML = ++start4;
      if (start4 == end4) {
        clearInterval(interval4);
      }
    }, 200);
  }
});

var numberTop5;
var check1 = true;
window.addEventListener(
  "scroll",
  function onScroll() {
    if (check1) {
      numberTop5 = document.querySelector(".sec4-items").getBoundingClientRect()
        .top;
      var nn;
      var interval5 = setInterval(function () {
        nn = (numberTop5 - window.innerHeight / 2 - 320) * -1;
        if (nn < 850) {
          if (nn >= 0) {
            $(".svg1").attr("height", nn);
            $(".svg1").attr("viewBox", "0 0 2 " + nn);
            $(".svg1 path").attr("d", "M1 0V" + nn);
          } else {
            $(".svg1").attr("height", 0);
          }
        } else {
          $(".svg1").attr("height", 860);
          $(".svg1").attr("viewBox", "0 0 2 " + 850);
          $(".svg1 path").attr("d", "M1 0V" + 850);
          clearInterval(interval5);
          check1 = false;
        }
      }, 100);
    }
  },
  false
);

var numberTop5;
var check2 = true;
window.addEventListener(
  "scroll",
  function onScroll() {
    if (check2) {
      numberTop5 = document.querySelector(".sec4-items").getBoundingClientRect()
        .top;
      var nnn;
      var interval5 = setInterval(function () {
        nnn = (numberTop5 - window.innerHeight / 2 - 300) * -1;
        if (nnn < 860) {
          if (nnn >= 0) {
            $(".svg2").attr("height", nnn);
            $(".svg2").attr("viewBox", "0 0 2 " + nnn);
            $(".svg2 path").attr("d", "M1 0V" + nnn);
          } else {
            $(".svg2").attr("height", 0);
          }
        } else {
          $(".svg2").attr("height", 860);
          $(".svg2").attr("viewBox", "0 0 2 " + 860);
          $(".svg2 path").attr("d", "M1 0V" + 860);
          clearInterval(interval5);
          check2 = false;
        }
      }, 100);
    }
  },
  false
);

var numberTop5;
var check3 = true;
window.addEventListener(
  "scroll",
  function onScroll() {
    if (check3) {
      numberTop5 = document.querySelector(".sec4-items").getBoundingClientRect()
        .top;
      var nnn;
      var interval5 = setInterval(function () {
        nnn = (numberTop5 - window.innerHeight / 2 - 300) * -1;
        if (nnn < 760) {
          if (nnn >= 0) {
            $(".svg3").attr("height", nnn);
            $(".svg3").attr("viewBox", "0 0 2 " + nnn);
            $(".svg3 path").attr("d", "M1 0V" + nnn);
          } else {
            $(".svg3").attr("height", 0);
          }
        } else {
          $(".svg3").attr("height", 760);
          $(".svg3").attr("viewBox", "0 0 2 " + 760);
          $(".svg3 path").attr("d", "M1 0V" + 760);
          clearInterval(interval5);
          check3 = false;
        }
      }, 100);
    }
  },
  false
);

$(".first__burger").click(function () {
  var center_span = $(".first__burger>span");
  if (!$(this).hasClass("show")) {
    $(center_span[1]).css({
      transform: "translate(-300px,0)",
      transition: ".5s",
    });
    $(center_span[0]).css("transform", "rotate(45deg) translate(0,11px)");
    $(center_span[2]).css("transform", "rotate(-45deg) translate(0,-11px)");
    $(this).addClass("show");
    $(".first__nav").slideDown();
  } else {
    $(".first__nav").slideUp();
    $(center_span[1]).css({
      transform: "translate(0,0)",
      transition: ".5s",
    });
    $(center_span[0]).css("transform", "rotate(0deg) translate(0,0)");
    $(center_span[2]).css("transform", "rotate(0deg) translate(0,0)");
    $(this).removeClass("show");
  }
});
$(".first__nav a").click(function () {
  var center_span = $(".first__burger>span");
  $(".first__nav").slideUp();
  $(center_span[1]).css({
    transform: "translate(0,0)",
    transition: ".5s",
  });
  $(center_span[0]).css("transform", "rotate(0deg) translate(0,0)");
  $(center_span[2]).css("transform", "rotate(0deg) translate(0,0)");
  $(".first__burger").removeClass("show");
});

$(".mob__menu-conten-footer").on("click", "a", function (event) {
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate(
    {
      scrollTop: top,
    },
    1200
  );
});

$(function ($) {
  function menu_hide() {
    var center_span = $(".nav-burger>span");
    $(".mob__menu-content").delay(".3s").removeClass("show");
    $(center_span[1]).css({
      transform: "translate(0,0)",
      transition: ".5s",
    });
    $(center_span[0]).css("transform", "rotate(0deg) translate(0,0)");
    $(center_span[2]).css("transform", "rotate(0deg) translate(0,0)");
    $(this).removeClass("show");
    $(".mob__menu-content").slideUp();
  }

  $(".nav-burger").click(function () {
    var center_span = $(".nav-burger>span");
    if (!$(this).hasClass("show")) {
      $(center_span[1]).css({
        transform: "translate(-300px,0)",
        transition: ".5s",
      });
      $(center_span[0]).css("transform", "rotate(45deg) translate(0,11px)");
      $(center_span[2]).css("transform", "rotate(-45deg) translate(0,-11px)");
      $(this).addClass("show");
      $(".mob__menu-content").slideDown();
      $(".mob__menu-content").delay(".3s").addClass("show");
    } else {
      $(".mob__menu-content").delay(".3s").removeClass("show");
      $(center_span[1]).css({
        transform: "translate(0,0)",
        transition: ".5s",
      });
      $(center_span[0]).css("transform", "rotate(0deg) translate(0,0)");
      $(center_span[2]).css("transform", "rotate(0deg) translate(0,0)");
      $(this).removeClass("show");
      $(".mob__menu-content").slideUp();
    }
  });

  if ($(window).width() > 767) {
    menu_hide();
    $(".mob__menu-conten-footer-reg-btn").prependTo(".mob__menu-lg");
    $(".mob__menu-conten-links").prependTo(".mob__menu-lg");
  } else {
    $(".mob__menu-conten-footer-reg-btn").prependTo(".mob__menu-conten-footer");
    $(".mob__menu-conten-links").prependTo(".mob__menu-content");
  }

  $(window).on("resize", function () {
    if ($(window).width() > 767) {
      menu_hide();
      $(".mob__menu-conten-footer-reg-btn").prependTo(".mob__menu-lg");
      $(".mob__menu-conten-links").prependTo(".mob__menu-lg");
    } else {
      $(".mob__menu-conten-footer-reg-btn").prependTo(
        ".mob__menu-conten-footer"
      );
      $(".mob__menu-conten-links").prependTo(".mob__menu-content");
    }
  });

  $(".mob__menu-conten-links").on("click", "a", function () {
    menu_hide();
  });
  $(".mob__menu-conten-footer").on("click", "a", function () {
    menu_hide();
  });
});

$(document).ready(function () {
  $(".first__links, .first__nav").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).offset().top - 75;
    $("body,html").animate(
      {
        scrollTop: top,
      },
      500
    );
  });
});

$(document).ready(function () {
  function toggleButton() {
    $(".js-back-to-top").toggleClass(
      "tm-f24eu-go-top-hide",
      window.scrollY <= 150
    );
  }

  $(window).off("scroll.back-to-top").on("scroll.back-to-top", toggleButton);

  toggleButton();
  $(".js-back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });
  var num = 0;
  var interval5 = setInterval(function () {
    $(".rotate").css(
      "transform",
      "translate(-50%, -50%) rotate(" + num + "deg)"
    );
    if (num > 360) {
      num = 0.025;
      //} else if (num > 3 && num < 87) {num = num + 0.2;} else if (num > 87 && num < 93) {num = num + 0.025;} else if (num > 93 && num < 177) {num = num + 0.2;} else if (num > 177 && num < 183) {num = num + 0.025;} else if (num > 183 && num < 267) {num = num + 0.2;} else if (num > 267 && num < 273) {num = num + 0.025;} else if (num > 273 && num < 357) {num = num + 0.2;} else if (num > 357 && num < 360) {num = num + 0.2;
    } else {
      num = num + 0.025;
    }
  }, 4);
  var interval6 = setInterval(function () {
    $(".rotate2").css(
      "transform",
      "translate(-50%, -50%) rotate(-" + num + "deg)"
    );
    if (num > 360) {
      num = 0.04;
      //} else if (num > 3 && num < 87) {num = num + 0.2;} else if (num > 87 && num < 93) {num = num + 0.025;} else if (num > 93 && num < 177) {num = num + 0.2;} else if (num > 177 && num < 183) {num = num + 0.025;} else if (num > 183 && num < 267) {num = num + 0.2;} else if (num > 267 && num < 273) {num = num + 0.025;} else if (num > 273 && num < 357) {num = num + 0.2;} else if (num > 357 && num < 360) {num = num + 0.2;
    } else {
      num = num + 0.04;
    }
  }, 4);
  $(".modal__over").click(function () {
    $("#modal").fadeOut(400);
  });
  function validateEmail(email) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    return pattern.test(email);
  }

  $(".hsec1-form-body").submit(function (event) {
    return  false;
    event.preventDefault();
    var email = $("#email_form1").val();
    var pass = $("#pass_form1").val();
    if (email != "") {
      $(".hsec1-form-error1").css("display", "none");
      if (pass != "" && validateEmail(pass)) {
        $(".hsec1-form-error2").css("display", "none");
        $.post("mail.php", { email: email, pass: pass }).done(function (data) {
          if (data == "done") {
            $("#modal").fadeIn(400);
            setTimeout(function () {
              $("#modal").fadeOut(400);
            }, 5000);
          } else {
            $(".alert-danger").fadeIn(400);
            setTimeout(function () {
              $(".alert-danger").fadeOut(400);
            }, 5000);
          }
        });
      } else {
        $(".hsec1-form-error2").css("display", "flex");
      }
    } else {
      $(".hsec1-form-error1").css("display", "flex");
    }
  });

  $(".sec7-form-body").submit(function (event) {
    return  false;
    event.preventDefault();
    var email = $("#email_form2").val();
    var pass = $("#pass_form2").val();
    if (email != "") {
      $(".sec7-form-error1").css("display", "none");
      if (pass != "" && validateEmail(pass)) {
        $(".sec7-form-error2").css("display", "none");
        $.post("mail.php", { email: email, pass: pass }).done(function (data) {
          if (data == "done") {
            $("#modal").fadeIn(400);
            setTimeout(function () {
              $("#modal").fadeOut(400);
            }, 5000);
          } else {
            $(".alert-danger").fadeIn(400);
            setTimeout(function () {
              $(".alert-danger").fadeOut(400);
            }, 5000);
          }
        });
      } else {
        $(".sec7-form-error2").css("display", "flex");
      }
    } else {
      $(".sec7-form-error1").css("display", "flex");
    }
  });

  // $('.hsec1-form-modal').submit(function (event) {
  //   event.preventDefault();
  //   var email = $('#email_form2').val();
  //   var pass = $('#pass_form2').val();
  //   $.post("mail.php", { email: email, pass: pass })
  //     .done(function (data) {
  //       $('#modal2').fadeOut(400);
  //       if (data == "done") {
  //         $('#modal').fadeIn(400);
  //         setTimeout(function () {
  //           $('#modal').fadeOut(400);
  //         }, 5000);
  //       } else {
  //         $('.alert-danger').fadeIn(400);
  //         setTimeout(function () {
  //           $('.alert-danger').fadeOut(400);
  //         }, 5000);
  //       }
  //     });
  // });
});
// if ($(window).width() < 769) {
//   var outerHeight = 0;
//   $(".sec4-item ").each(function () {
//     outerHeight += $(this).outerHeight();
//   });
//   var H = outerHeight + 60;

//   console.log("H__________", H);
//   $(".svg4").attr("height", H);
//   $(".svg4").attr("viewBox", "0 0 2 " + H);
//   $(".svg4 path").attr("d", "M1 0V" + H);
// }
if ($(window).width() > 768) {
  var outerHeight = 0;
  $(".sec4-item ").each(function () {
    outerHeight += $(this).outerHeight();
  });
  var H = outerHeight - 130;
  $(".svg4").attr("height", H);
  $(".svg4").attr("viewBox", "0 0 2 " + H);
  $(".svg4 path").attr("d", "M1 0V" + H);
}
if ($(window).width() < 769) {
  var outerHeight = 0;
  $(".sec4-item ").each(function () {
    outerHeight += $(this).outerHeight();
  });
  var H = outerHeight - 40;
  $(".svg4").attr("height", H);
  $(".svg4").attr("viewBox", "0 0 2 " + H);
  $(".svg4 path").attr("d", "M1 0V" + H);
}
if ($(window).width() < 475) {
  var outerHeight = 0;
  $(".sec4-item ").each(function () {
    outerHeight += $(this).outerHeight();
  });
  var H = outerHeight - 75;
  $(".svg4").attr("height", H);
  $(".svg4").attr("viewBox", "0 0 2 " + H);
  $(".svg4 path").attr("d", "M1 0V" + H);
}
if ($(window).width() < 330) {
  var outerHeight = 0;
  $(".sec4-item ").each(function () {
    outerHeight += $(this).outerHeight();
  });
  var H = outerHeight - 95;
  $(".svg4").attr("height", H);
  $(".svg4").attr("viewBox", "0 0 2 " + H);
  $(".svg4 path").attr("d", "M1 0V" + H);
}

$(document).on("click", ".header-scroll", function (event) {
  var id = $(this).attr("href"),
    top = $(id).offset().top - 81;
  $("body,html").animate(
    {
      scrollTop: top,
    },
    1200
  );
});
