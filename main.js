$(document).ready(function() {
  // ******** for the sticky nav ********
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("stick-nav");
      } else {
        $("nav").removeClass("stick-nav");
      }
    },
    {
      offset: "30px"
    }
  );
  // ********** Scroll on button *********

  $(".js--scroll-to-plans").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
      // 1000 znaci brzina scrollovanja. 1000 miliseconds je 1 sec
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //  ********* Navigation scroll ************ radi i ovaj samo brzina ne radi, uvek je prebrzo. unkoment da vidis
  // $(function() {
  //   $("a[href*=#]:not([href=#])").click(function() {
  //     if (
  //       location.pathname.replace(/^\//, "") ==
  //         this.pathname.replace(/^\//, "") &&
  //       location.hostname == this.hostname
  //     ) {
  //       var target = $(this.hash);
  //       target = target.length
  //         ? target
  //         : $("[name=" + this.hash.slice(1) + "]");
  //       if (target.length) {
  //         $("html,body").animate(
  //           {
  //             scrollTop: target.offset().top
  //           },
  //           1000
  //         );
  //         return false;
  //       }
  //     }
  //   });
  // });
  //  ********* Navigation scroll pure CSS snippet ************ ovaj je pure css radi super sve
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      1000
    );
  });
});

// **********  ovo je snippet za scroll za jquery   ************

// var waypoints = $("#handler-first").waypoint(
//   function(direction) {
//     notify(this.element.id + " hit 25% from top of window");
//   },
//   {
//     offset: "25%" a ovo je za kolko daljine da se ukljuci od tog taga, mozes videti na primeru uzmedju backgroud sliku i sledecu section, menjaj px da vidis razliku u pojavljivanju scroll nava
//   }
// );

// ******** ovo je snipet za smooth scroll jquery pa ti manjaj sta treba **********

// $("a[href*=#]:not([href=#])").click(function() {
//   if (
//     location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") ||
//     location.hostname == this.hostname
//   ) {
//     var target = $(this.hash);
//     target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//     if (target.length) {
//       $("html,body").animate(
//         {
//           scrollTop: target.offset().top
//         },
//         1000
//       );
//       return false;
//     }
//   }
// });
