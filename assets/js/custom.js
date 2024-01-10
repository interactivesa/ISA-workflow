"use strict";

var scrollTo = function (sectionEl = "", callback = function () {}) {
  $("html, body").animate(
    {
      scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
    },
    800,
    "swing",
    callback()
  );
};
var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top);
};
// on ready state
$(function () {
  // breakpoint and up
  // $(window).resize(function () {
  //   if ($(window).width() >= 980) {
  //     // when you hover a toggle show its dropdown menu
  //     $(".navbar .dropdown-toggle").hover(function () {
  //       $(this).parent().toggleClass("show");
  //       $(this).parent().find(".dropdown-menu").toggleClass("show");
  //     });

  //     // hide the menu when the mouse leaves the dropdown
  //     $(".navbar .dropdown-menu").mouseleave(function () {
  //       $(this).removeClass("show");
  //     });

  //     // do something here
  //   }
  // });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var navbar = $(".main-navbar");
    var scrollUpBtn = $(".scroll-up");
    // if (scroll > 0) {
    //   scrollUpBtn.fadeIn();
    // } else {
    //   scrollUpBtn.fadeOut();
    // }
    // if ($(window).width() >= 992) {
    //   if (scroll > 140) {
    //     if (!navbar.hasClass("fixed")) {
    //       $("body").css({ "padding-top": navbar.height() + "px" });
    //       navbar.addClass("fixed");
    //       // $(".search-toggle").addClass("d-none");
    //     }
    //   } else {
    //     navbar.removeClass("fixed");
    //     $("body").css({ "padding-top": "0px" });
    //     $(".search-toggle").removeClass("d-none");
    //   }
    // }
 
   
  });




  
});











// bootstrap tooltip

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




// admin index chart

const bar1 = document.getElementById('barChart1');

  new Chart(bar1, {
    type: 'bar',
    data: {
      labels: [
       'accusamus tempora et molestiae omnis aut',
       'qui at beatae et culpa qui',
       'Annual vacation request workflow',
       'ducimus quidem voluptatem quae molestiae possimus',
       'eaque consequuntur ut est beatae omnis',
       'non aut architecto debitis et id',
       'accusamus tempora et molestiae omnis aut',
       'eveniet optio rerum magnam maiores et',
       'odio sit veritatis qui non laudantium',
       'accusamus iusto quidem est quidem quis',
       'nihil rerum voluptas laboriosam natus molestias',
       'iure quo ipsam est quia et',
       'facilis sit aliquid molestiae aut quo',
       'distinctio qui qui nobis est ea',
       'dolor explicabo eum omnis iusto ut',
       'molestiae a assumenda consectetur molestiae quis',
       'sint voluptas temporibus ipsa est facere',
       'voluptas porro ut voluptate aut incidunt',
     
    ],
      datasets: [{
        label: 'Running ',
        maxBarThickness: 25,
        data: [
         7,
         27,
         36,
         22,
         33,
         12,
         32,
         26,
         39,
         16,
         26,
         36,
         31,
         25.5,
         15,
         31,
         24,
         44
        ],
        borderWidth: 0,
        backgroundColor: '#0B6DDE',
        color:'#756B65'
      },]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      // plugins: {
      //   legend: {
      //     // display:false,
      //       labels: {
      //           // This more specific font property overrides the global property
      //           font: {
      //               size: 50,
      //               family:"Tajwal"
      //           }
      //       }
      //   }
      // }
    }
  });



  // advanced-a
  $(".advanced-a").on("click", function (e) {
    console.log("advanced-collapse");
    $(".advanced-a span").toggleClass("d-none")
    $(".hidden-section").toggleClass("show");
    e.stopPropagation();
    
    });