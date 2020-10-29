$(document).ready(function () {
  var show = true;
  var show1 = true;
  var show2 = true;
  var countbox = ".counted";
  var countbox1 = ".counted1";
  var countbox2 = ".counted2";
  $(window).on("scroll load resize", function () {
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var e_top1 = $(countbox1).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var e_top2 = $(countbox2).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    var e_height1 = $(countbox1).outerHeight(); // Полная высота блока со счетчиками
    var e_height2 = $(countbox2).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 800 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      if (!show) {
      } else {
        // Отменяем показ анимации, если она уже была выполнена
        $(".counted").css("opacity", "1");
        $(".counted").spincrement({
          thousandSeparator: " ",
          duration: 800,
        });

        show = false;
      }
    }
    if (
      w_top + 800 >= e_top1 ||
      w_height + w_top == d_height ||
      e_height1 + e_top1 < w_height
    ) {
      if (!show1) {
      } else {
        // Отменяем показ анимации, если она уже была выполнена
        $(".counted1").css("opacity", "1");
        $(".counted1").spincrement({
          thousandSeparator: " ",
          duration: 800,
        });

        show1 = false;
      }
    }
    if (
      w_top + 800 >= e_top2 ||
      w_height + w_top == d_height ||
      e_height2 + e_top2 < w_height
    ) {
      if (!show2) {
      } else {
        // Отменяем показ анимации, если она уже была выполнена
        $(".counted2").css("opacity", "1");
        $(".counted2").spincrement({
          thousandSeparator: " ",
          duration: 800,
        });

        show2 = false;
      }
    }
  });
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
  $(".video__block").click(function () {
    $(this).html(
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/eg0O-wmdizI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
  $(".modal__over").click(function () {
    $("#modal").slideUp();
  });
  var num = 0;
  var interval5 = setInterval(function () {
    $(".rotate").css("transform", "rotate(" + num + "deg)");
    if (num > 360) {
      num = 0.025;
    } else {
      num = num + 0.025;
    }
  }, 4);
  var interval6 = setInterval(function () {
    $(".rotate2").css("transform", "rotate(-" + num + "deg)");
    if (num > 360) {
      num = 0.04;
    } else {
      num = num + 0.04;
    }
  }, 4);
  function validateEmail(email) {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    return pattern.test(email);
  }
  $(".hsec1-form-body").submit(function (event) {
    event.preventDefault();
    var name = $("input[name='name']").val();
    var email = $("input[name='email']").val();
    if (name != "") {
      $(".hsec1-form-error1").css("display", "none");
      if (email != "" && validateEmail(email)) {
        $(".hsec1-form-error2").css("display", "none");
        $.post("send.php", {
          name: name,
          email: email,
        }).done(function (data) {
          if (data.indexOf("done") > -1) {
            $("#modal").slideDown();
            setTimeout(function () {
              $("#modal").slideUp(400);
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
});
$(document).ready(function () {
  $(".first__links, .first__nav").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).offset().top - 75;
    $("body,html").animate({ scrollTop: top }, 500);
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
});
