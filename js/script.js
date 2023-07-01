$(document).ready(function () {

  // ymaps.ready(init);

  // function init() {
  //   ymaps.geolocation.get({
  //     provider: "yandex"
  //   })
  //     .then(function (res) {
  //       var g = res.geoObjects.get(0);
  //       $("input[name=city]").val(g.getLocalities()[0]);
  //       $("input[name=new_region]").val(g.getAdministrativeAreas()[0]);
  //     })
  //     .catch(function (err) {
  //       console.log('Не удалось установить местоположение', err);
  //     });
  // }

  //маска;
  $.mask.definitions["9"] = false;
  $.mask.definitions["5"] = "[0-9]";
  $("input[type=tel]")
    .mask("8(955) 555-5555")
    .on("click", function () {
      $(this).trigger("focus");
    });

  //форма;
  $("form").on("submit", function (e) {
    var formThis = this;
    $.ajax({
      url: "scripts/send.php",
      type: "POST",
      data: $(this).serialize(),
      beforeSend: function () {
        $(formThis)
          .children(".S4__form-step1")
          .fadeOut(300, function () {
            $(formThis).children(".S4__form-step2").fadeIn(300);
          });
      },
    }).done(function () { });
    e.preventDefault();
  });

  $('.slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('.slider-s7').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".card-s5__tab").on("click", function (e) {
    let th = $(this);
    let content = th.attr("href");
    let img = th.attr("data-img");
    
    $(".card-s5__tab").removeClass("active");
    th.addClass("active");
    
    $(".card-s5__tab-content").removeClass("active");
    $(content).addClass("active");

    $(".card-s5__tab-img").removeClass("active");
    $(img).addClass("active");
    
    e.preventDefault();
  })

  //popup;
  // $("").on("click", function () {
  //   $(".popup").fadeIn();
  //   $("body").css("overflow", "hidden");
  // });

  // $(".popup__close").on("click", function () {
  //   $(".popup").fadeOut();
  //   $("body").css("overflow", "auto");
  // });

  // $('.popup__ov').click(function (e) {
  //   if ($(e.target).closest('.popup__body').length == 0) {
  //     $(".popup").fadeOut();
  //     $("body").css("overflow", "auto");
  //   }
  // });


  // //спойлеры;
  // $(".cp-s5__tab-title").on("click", function () {
  //   $(this).toggleClass("active");
  //   $(this).offsetParent().toggleClass("active");
  //   $(this).next(".cp-s5__tab-content").fadeIn(300);
  //   if (!$(this).hasClass("active")) {
  //     $(this).next(".cp-s5__tab-content").fadeOut(300);
  //   }
  // });

  // //скрол при клике
  // $('a.cp-s1__link').on('click', function (e) {
  //   e.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: $($.attr(this, 'href')).offset().top
  //   }, 1500);
  // });

});

// //таймер;
// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes
//   };
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   };

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// };

// var deadline = $("#countdown").attr("data-time");
// initializeClock('countdown', deadline);

