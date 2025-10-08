// $(document).ready(function() {
//   // Navbar active link highlight on scroll
//   const sections = $('section');
//   const navLinks = $('.navbar-nav .nav-link');

//   $(window).on('scroll', function() {
//     const currentPos = $(this).scrollTop() + 100;
//     sections.each(function() {
//       const top = $(this).offset().top;
//       const bottom = top + $(this).outerHeight();

//       if (currentPos >= top && currentPos <= bottom) {
//         navLinks.removeClass('active');
//         sections.removeClass('active');

//         $(this).addClass('active');
//         navLinks.filter('[href="#' + $(this).attr('id') + '"]').addClass('active');
//       }
//     });

//     // Fade-in animations
//     $('.fade-in').each(function() {
//       const elementTop = $(this).offset().top;
//       const windowBottom = $(window).scrollTop() + $(window).height();
//       if (windowBottom > elementTop + 100) {
//         $(this).addClass('show');
//       }
//     });
//   });

//   // Smooth scroll
//   $('a[href^="#"]').on('click', function(e) {
//     e.preventDefault();
//     const target = $($(this).attr('href'));
//     $('html, body').animate({
//       scrollTop: target.offset().top - 70
//     }, 800);
//   });
// });

$(document).ready(function() {

  // 🌿 Change navbar color on scroll
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 80) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // ✨ Fade-in animation on scroll
  function revealOnScroll() {
    $('.fade-in').each(function() {
      let top_of_element = $(this).offset().top;
      let bottom_of_screen = $(window).scrollTop() + $(window).height();

      if (bottom_of_screen > top_of_element + 50) {
        $(this).addClass('show');
      }
    });
  }

  $(window).on('scroll', revealOnScroll);
  revealOnScroll(); // initial run

});


