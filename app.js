// $(".items").click(function () {
//   $(this).toggleClass("active");
//   //   $('.items').click(function() {
//   //     // `this` refers to the clicked element
//   //     $(this).toggleClass("active");
//   // });
// });

// box 1
$("#box1 .items").click(function () {
  // If the clicked element has the active class, remove the active class from EVERY #box1 .items>.state element
  if ($(this).hasClass("active")) {
    $("#box1 .items").removeClass("active");
  }
  // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
  else {
    $("#box1 .items").removeClass("active");
    $(this).addClass("active");
  }
});

// box 2
$("#box2 .items").click(function (e) {
  // If the clicked element has the active class, remove the active class from EVERY #box2 .items>.state element
  if ($(this).hasClass("active")) {
    $("#box2 .items").removeClass("active");
  }
  if (e.target.classlist == "active") {
    $(this).addClass("active");
  }
  // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
  else {
    $("#box2 .items").removeClass("active");
    $(this).addClass("active");
  }
});
