$(document).ready(function() {
  // document.querySelector("h1").innerHTML = "foobar";
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

  // document
  //   .querySelector("h1")

  //   .click(function() {
  //     $(this).css("background-color", "#ff000");
  //   });

  // $("h1").click(function() {
  //   $(this).css("background-color", "#ff000");
  // });
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
