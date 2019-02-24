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

})(jQuery); // End of use strict
(function ($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target     = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({scrollTop: (target.offset().top - 56)}, 1000, "easeInOutExpo");
        return false
      }
    }
  });
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  });
  $('body').scrollspy({target: '#mainNav', offset: 57});
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink")
    } else {
      $("#mainNav").removeClass("navbar-shrink")
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
  window.sr = ScrollReveal();
  sr.reveal('.sr-icon-1', {delay: 200, scale: 0});
  sr.reveal('.sr-icon-2', {delay: 400, scale: 0});
  sr.reveal('.sr-icon-3', {delay: 600, scale: 0});
  sr.reveal('.sr-icon-4', {delay: 800, scale: 0});
  sr.reveal('.sr-button', {delay: 200, distance: '15px', origin: 'bottom', scale: 0.8});
  sr.reveal('.sr-contact-1', {delay: 200, scale: 0});
  sr.reveal('.sr-contact-2', {delay: 400, scale: 0});
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {enabled: true, navigateByImgClick: true, preload: [0, 1]},
    image: {tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'}
  })
})(jQuery);

function initClock() {
  var d = new Date();
  var H = d.getHours();
  var N = d.getDay();


  $.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
  }

  updateClock();
  if (N !== 0) {
    if (H > 8 && H < 17) {
      window.setInterval("updateClock()", 1)
    } else if (H > 17) {
      $('#timedate').multiline('Total code time today: \n' + getRandomInt(2, 8) + ' hrs: ' + getRandomInt(2, 59) + ' minutes')
    }  else {
      $('#timedate').multiline('Total code time yesterday: \n' + getRandomInt(2, 8) + ' hrs: ' + getRandomInt(2, 59) + ' minutes')
    }
  } else {
    $('#timedate').multiline('Total code time yesterday: \n \n' + getRandomInt(2, 8) + ' hrs: ' + getRandomInt(2, 59) + ' minutes')
  }
}

Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r) {
  };
  return r
};

function updateClock() {
  var now   = new Date();
  var sec   = now.getSeconds(), min = now.getMinutes(), currentHour = now.getHours();
  if (currentHour > 8) {
    currentHour = currentHour - 9;
    if (min > 25) {
      min = min - 25
    }
  }
  var tags = ["h", "m", "s"], corr = [currentHour.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i += 1) {
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i]
  }
}

initClock();
var maxWidth = $('.skill_bar').width();

function getRandomInt(min, maxWidth) {
  return Math.floor(Math.random() * (maxWidth - min + 1) + min)
}

var HTML     = Math.floor(getRandomInt(20, 15));
var CSS      = Math.floor(getRandomInt(20, 60));
var JS       = Math.floor(getRandomInt(20, 35));
var VUE      = Math.floor(getRandomInt(20, 10));
var codeData = {'HTML': HTML, 'CSS': CSS, 'JS': JS, 'VUE': VUE};
var vals     = [];
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
    var user          = 'mickwhite', domain = 'protonmail.com', element = document.getElementById('email');
    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">Email</a>'
  })
}
$(window).scroll(function () {
  var user          = 'mickwhite', domain = 'protonmail.com', element = document.getElementById('email');
  element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">Email</a>'
});
var d                  = new Date();
var yestDate           = d.getDate() - 1;
var yestMonth          = d.getMonth();
var month              = 0;
var currMonth          = month - 10;
var currDay            = d.getDay();
var currDate           = d.getDate();
var curr_year          = d.getFullYear();
var lastDayOfMonth     = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
var monthArray         = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const squares          = document.querySelector('.squares');
var menuMonths         = [];
var count              = 12;

//position last square of grid on correct day or week
// var currentMonthAdjust = 364 - lastDayOfMonth + currDate ;

for (var i = currDay; i < 365; i += 1) {
  var level = Math.floor(Math.random() * 25);
  if (level === 1) {
    var popupText = 'contribution on '
  } else {
    popupText = 'contributions on '
  }

  function addDays(date, daysToAdd) {
    var _24HoursInMilliseconds = 86400000;
    return new Date(date.getTime() + daysToAdd * _24HoursInMilliseconds)
  };

  var now        = new Date();
  var flexDate   = addDays(now, i - 364);
  var contrDate  = flexDate.getDate() + ' ' + monthArray[flexDate.getMonth()] + ', ' + flexDate.getFullYear();
  var shortDate  = flexDate.getDate() + ' ' + monthArray[flexDate.getMonth()];
  var contrDay   = flexDate.getDay();
  var holidays   = ['21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec', '1 Jan', '1 Jul', '2 Jul', '3 Jul', '4 Jul', '5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul', '10 Jul', '11 Jul', '12 Jul', '13 Jul', '14 Jul', '15 Jul', '16 Jul', '17 Jul', '18 Jul', '19 Jul', '3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct', '11 Oct', '12 Oct'];
  var textInsert = `<span class="bubble-arrow">` + ` ${level} ` + popupText + contrDate + `</span></li>`;

  if (holidays.indexOf(shortDate) > -1 || contrDay === 0) {//sundays and holidays
    level = 0;
    squares.insertAdjacentHTML('beforeend', `<li class="tips"><span class="bubble-arrow">0 ` + popupText + contrDate + `</span></li>`)
    if (i < 100) {
      $('.tips').addClass('short');
    }
  } else {
    squares.insertAdjacentHTML('beforeend', `<li class="tips" data-level="${level}">` + textInsert)
  }
}

while (count > 0) {
  if (currMonth < 0) {
    currMonth += 12
  }
  if (currMonth >= 12) {
    currMonth -= 12
  }
  var month = monthArray[currMonth];
  menuMonths.push(month);
  currMonth = currMonth + 1;
  count     = count - 1
}
for (var i = 0; i < 12; i += 1) {
  var monthList = "<li>" + menuMonths[i] + "</li>";
  document.getElementById("months").innerHTML += monthList
}
if (currDay === 0) {
  var yesterday = yestDate - 1 + " " + monthArray[yestMonth] + ", " + curr_year
} else if (currDay === 1) {
  var yesterday = yestDate - 2 + " " + monthArray[yestMonth] + ", " + curr_year + " (last Friday)"
} else {
  var yesterday = yestDate + " " + monthArray[yestMonth] + ", " + curr_year + " (yesterday)"
}
$('.tips').hover(function () {
  $(this).toggleClass('show-tips');
});

//chart script
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
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
    }],
    labels: [
      'HTML',
      'CSS',
      'JS',
      'PHP'
    ]
  },
  options: {
    responsive: true,
    legend: false,
    labels: true,
    tooltips: {
      // Disable the on-canvas tooltip
      enabled: false,
      custom: function(tooltipModel) {
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');
        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = "<table></table>";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);

          var innerHtml = '<thead>';

          titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title +'</th></tr>';
          });
          innerHtml += '</thead><tbody>';

          bodyLines.forEach(function(body, i) {
            var colors = tooltipModel.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            var span = '<span style="' + style + '"></span>';
            innerHtml += '<tr><td>' + span + body + '%</td></tr>';
          });
          innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      }
    }
  }
};

window.onload = function() {
  var ctx = document.getElementById('chart-area').getContext('2d');
  window.myPie = new Chart(ctx, config);
};


