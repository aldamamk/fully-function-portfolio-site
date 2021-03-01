// ============ accordion 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}


// ============= animate on scroll
$(function() {

  var $window           = $(window),
  win_height_padded = $window.height() * 1.1,
  isTouch           = Modernizr.touch;

if (isTouch) { $('.revealOnScroll').addClass('animated'); }

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
var scrolled = $window.scrollTop(),
    win_height_padded = $window.height() * 1.1;

// Showed...
$(".revealOnScroll:not(.animated)").each(function () {
  var $this     = $(this),
      offsetTop = $this.offset().top;

  if (scrolled + win_height_padded > offsetTop) {
    if ($this.data('timeout')) {
      window.setTimeout(function(){
        $this.addClass('animated ' + $this.data('animation'));
      }, parseInt($this.data('timeout'),10));
    } else {
      $this.addClass('animated ' + $this.data('animation'));
    }
  }
});
// Hidden...
$(".revealOnScroll.animated").each(function (index) {
  var $this     = $(this),
      offsetTop = $this.offset().top;
  if (scrolled + win_height_padded < offsetTop) {
    $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
  }
});
}

revealOnScroll();
});