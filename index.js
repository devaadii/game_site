// window.addEventListener("scroll", function () {
//   var element = document.getElementsByClassName("points");
//   for (var i = 0; i < element.length; i++) {
//     if (window.scrollY < 5) {
//       element[i].classList.add("size");
//     } else {
//       element[i].classList.remove("size");
//     }
//   }
// });
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Parallax effect for the video background
  document.getElementById("vid").style.transform =
    "translateY(" + scrollPosition * 0.5 + "px)";

  // Scaling effect for the text overlay
  var elements = document.querySelectorAll(".points");

  for (var i = 0; i < elements.length; i++) {
    var scrollPercentage =
      (scrollPosition / (document.body.scrollHeight - window.innerHeight)) *
      100;
    var scaleFactor = 1 - (scrollPercentage / 100) * 0.5;

    elements[i].style.transform = "scale(" + scaleFactor + ")";
    elements[i].style.opacity = 1 - scrollPercentage / 100;
  }
});
