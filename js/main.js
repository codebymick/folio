(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target     = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-button', {
    delay: 200,
    distance: '15px',
    origin: 'bottom',
    scale: 0.8
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    scale: 0
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  $(window).scroll(function () {
    var user          = 'mickwhite', domain = 'protonmail.com', element = document.getElementById('email');
    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">Email</a>'
  });


})(jQuery); // End of use strict


function initClock() {
  var d = new Date();
  var H = d.getHours();
  var N = d.getDay();

  $.fn.multiline = function (text) {
    this.text(text);
    this.html(this.html().replace(/\n/g, '<br/>'));
    return this;
  };

  updateClock();
  if (N !== 0) {
    if (H > 8 && H < 17) {
      window.setInterval("updateClock()", 1)
    } else if (H > 17) {
      $('#timedate').multiline('Total code time today: \n' + getRandomInt(6, 8) + ' hrs: ' + getRandomInt(2, 59) + ' minutes')
    } else {
      $('#timedate').multiline('Total code time yesterday: \n' + getRandomInt(6, 8) + ' hrs: ' + getRandomInt(2, 59) + ' minutes')
    }
  } else {
    $('#timedate').multiline('Total code time Friday: \n \n' + getRandomInt(6, 8) + ' hrs: ' + getRandomInt(2, 59) + ' minutes')
  }
}

Number.prototype.pad = function (n) {
  for (var r = this.toString();
       r.length < n; r = 0 + r) {
  }
  ;
  return r
};

function updateClock() {
  var now = new Date();
  var sec = now.getSeconds(), min = now.getMinutes(), currentHour = now.getHours();
  if (currentHour > 8) {
    currentHour = currentHour - 8;
  }
  if (min > 11 && min < 59) {
    min = min - 7
  }


  var tags = ["h", "m", "s"], corr = [currentHour.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i += 1) {
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i]
  }
}

initClock();

// var maxWidth = $('.skill_bar').width();

function getRandomInt(min, maxWidth) {
  return Math.floor(Math.random() * (maxWidth - min + 1) + min)
}

var HTML     = Math.floor(getRandomInt(20, 25));
var CSS      = Math.floor(getRandomInt(20, 35));
var VUE      = Math.floor(getRandomInt(20, 15));
var JS       = 100 - HTML - CSS - VUE;
var codeData = {'HTML': HTML, 'CSS': CSS, 'JS': JS, 'VUE': VUE};
for (let key of Object.keys(codeData)) {
  let codeValue                          = codeData[key];
  document.getElementById(key).innerHTML = codeValue + '%';

  $(window).scroll(function () {
    function elementScrolled(elem) {
      var docViewTop    = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop       = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop))
    }

    if (elementScrolled('.skills1')) {
      $(document).ready(function () {
        $('#' + key).animate({width: codeValue + '%'}, 1000)
      })
    }
  })
}
//secure display email in DOM
var user          = 'mickwhite', domain = 'protonmail.com', element = document.getElementById('email');
element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">Email</a>';

//set contributions chart
function addDays(date, daysToAdd) {
  var _24HoursInMilliseconds = 86400000;
  return new Date(date.getTime() + daysToAdd * _24HoursInMilliseconds)
}
function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}

var d          = new Date();
var month      = 0;
var currHour   = d.getHours();
var currMonth  = month - 10;
var currDay    = d.getDay();
var currDate   = d.getDate();
var currYear = d.getFullYear();
var lastDayThisMonth = daysInMonth(currMonth, currYear);

var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const squares  = document.querySelector('.squares');
var menuMonths = [];
var count      = 12;

//position last square of grid on correct day or week
var display_to_today = (364) + ((Math.floor(currDate / 7) * 7) + currDay);
if (currHour >= 10) {// display today's square with contributions only after 10am
  display_to_today = display_to_today + 1;
}
//chart function
for (var i = lastDayThisMonth; i < display_to_today; i += 1) {
  var level = Math.floor(Math.random() * 25);
  if (level === 1) {
    var popupText = 'contribution on '
  } else {
    popupText = 'contributions on '
  }

  var now        = new Date();
  var flexDate   = addDays(now, i - (364 + currDay));
  var contrDate  = flexDate.getDate() + ' ' + monthArray[flexDate.getMonth()] + ', ' + flexDate.getFullYear();
  var shortDate  = flexDate.getDate() + ' ' + monthArray[flexDate.getMonth()];
  var contrDay   = flexDate.getDay();
  var holidays   = ['21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec', '1 Jan', '1 Jul', '2 Jul', '3 Jul', '4 Jul', '5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul', '10 Jul', '11 Jul', '12 Jul', '13 Jul', '14 Jul', '15 Jul', '16 Jul', '17 Jul', '18 Jul', '19 Jul', '3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct', '11 Oct', '12 Oct'];
  var textInsert = `<span class="bubble-arrow">` + ` ${level} ` + popupText + contrDate + `</span></li>`;

  if (holidays.indexOf(shortDate) > -1 ) {//sundays and holidays
    level = 0;
    squares.insertAdjacentHTML('beforeend', `<li class="tips"><span class="bubble-arrow">0 ` + popupText + contrDate + `</span></li>`);
    if (i < 84) {
      $('.tips').addClass('short');
    }
  } else {
    squares.insertAdjacentHTML('beforeend', `<li class="tips" data-level="${level}">` + textInsert)
  }
}
//end of function

while (count > 0) {
  if (currMonth < 0) {
    currMonth += 13
  }
  if (currMonth >= 12) {
    currMonth -= 12
  }
  var month = monthArray[currMonth];
  menuMonths.push(month);
  currMonth = currMonth + 1;
  count     = count - 1
}
for (var j = 0; j < 12; j += 1) {
  var monthList = "<li>" + menuMonths[j] + "</li>";
  document.getElementById("months").innerHTML += monthList
}

$('.tips').hover(function () {
  $(this).toggleClass('show-tips');
});

//pie chart

var config    = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        HTML,
        CSS,
        JS,
        VUE,
      ],
      backgroundColor: [
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
      ],
      description: [
        'blah vlah blah',
        'blah vlah blah',
        'blah vlah blah',
        'blah vlah blah'
      ]
    }],
    labels: [
      'HTML',
      'CSS',
      'JS',
      'VUE'
    ]
  },
  options: {
    responsive: true,
    legend: false,
    labels: true,
    cutoutPercentage: 0,
    animation: {animateScale: true},
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: true,
      // description: [
      //   'blah vlah blah',
      //   'blah vlah blah',
      //   'blah vlah blah',
      //   'blah vlah blah'
      // ],
      // //customise tooltips
      // custom: function (tooltipModel) {
      //   // Tooltip Element
      //   var tooltipEl = document.getElementById('skill-container');
      //   // Create element on first render
      //   if (!tooltipEl) {
      //     tooltipEl           = document.createElement('div');
      //     tooltipEl.id        = 'skill-container';
      //     tooltipEl.innerHTML = `<div class="service-box mx-auto"></div>`;
      //     document.getElementById('skill-wrapper').appendChild(tooltipEl);
      //   }
      //
      //   function getBody(bodyItem) {
      //     return bodyItem.lines;
      //   }
      //
      //   // Set Text
      //   if (tooltipModel.body) {
      //     // const uniqueClass = body.map(([v]) => v);
      //     var bodyLines = tooltipModel.body.map(getBody);
      //     var innerHtml = ``;
      //
      //     bodyLines.forEach(function (body, i) {
      //       // var colors        = tooltipModel.datasets.description[i];
      //       var description =  this.options.data.datasets[i].description;
      //       var content = `<i class="fab fa-4x fa-html5 text-primary mb-3 sr-icon-1"></i>
      //     <h3 class="mb-3">HTML</h3>
      //     <div class="skill_bar">
      //       <div id="HTML" class="skill_bar_progress html">95%</div>
      //     </div>
      //     <p class="text-muted mb-0">`  + `</p>`;
      //       innerHtml += content + body;
      //     });
      //     var tableRoot       = tooltipEl.querySelector('div');
      //     tableRoot.innerHTML = innerHtml;
      //   }
      // }
    }
  }
};

//render pie chart
window.onload = function () {
  var ctx      = document.getElementById('chart-area').getContext('2d');
  window.myPie = new Chart(ctx, config);
};

// apod background image for masthead
var url = "https://api.nasa.gov/planetary/apod?api_key=AMz8lkRfduSiN1E4csXepee4xIptaPmASqDBFjEh";

$.ajax({
  url: url,
  success: function (result) {
    //if image of day is video, use fallback image
    if (result.media_type === "video") {
      result.url = "https://apod.nasa.gov/apod/image/1902/RedSprites_Broady_960.jpg";
    }
    $("header.masthead").css("background-image", 'url(' + result.url + ')');
  }
});
