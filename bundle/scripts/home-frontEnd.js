//Accent location interpreter for about us section

// // Function to set the position of the image based on container coordinates
// function setPosition() {
//   // Get the container and image elements
//   var container = $(".aboutUs > div div:nth-child(1)");
//   var image = $(".aboutUs > div:nth-child(1) img");
//   var containerOffset = container.offset();
//   var containerTop = containerOffset.top;
//   var containerLeft = containerOffset.left;
//   var imageOffset = image.offset();
//   var imageTop = imageOffset.top;
//   var imageLeft = imageOffset.left;
//   var Top = containerTop - imageTop;
//   var Left = containerLeft - imageLeft;

//   // Set the position of the image relative to the container
//   image.css({
//     position: "relative",
//     top: Top,
//     left: Left,
//   });
// }

// $(window).on("load resize", function () {
//     setTimeout(setPosition(), 800);
//   });


var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  focus: 0,
  gap: "20px",
  drag: "none",
  snap: true,
  autoplay: true,
  omitEnd: true,
  breakpoints: {
    768: {
      perPage: 1,
    },
    992: {
      perPage: 2,
    }
  }
});

splide.mount();

var splide1 = new Splide('.splide-1', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  focus: 0,
  gap: "20px",
  drag: "none",
  snap: true,
  autoplay: true,
  omitEnd: true,
  breakpoints: {
    768: {
      perPage: 1,
    },
    992: {
      perPage: 2,
    }
  }
});

splide1.mount();