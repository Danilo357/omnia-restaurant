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
      // 1000 znaci brzina scrollovanja.
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //  ********* Navigation scroll ************
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      1000
    );
  });
  // ************ animation on scroll ****************
  $(".js--wp-1").waypoint(
    function() {
      $(".js--wp-1").addClass("animated fadeInDown");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-2").waypoint(
    function() {
      $(".js--wp-2").addClass("animated zoomInUp");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-3").waypoint(
    function() {
      $(".js--wp-3").addClass("animated fadeInDown");
    },
    {
      offset: "40%"
    }
  );

  $(".js--wp-4").waypoint(
    function() {
      $(".js--wp-4").addClass("animated rubberBand ");
    },
    {
      offset: "40%"
    }
  );
  //************** Mobile-nav ***************

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(230); // 230 je vreme otvaranja i zatvaranja 230ms

    if (icon.hasClass("fas fa-bars")) {
      icon.addClass("far fa-times-circle");
      icon.removeClass("fas fa-bars");
    } else {
      icon.addClass("fas fa-bars");
      icon.removeClass("far fa-times-circle");
    }
  });
});
