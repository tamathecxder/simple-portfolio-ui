$(document).ready(function () {
  $("header nav .navbar-list li a").on("click", function (e) {
    const targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top,
      },
      650
    );

    e.preventDefault();
  });

  const header = ('header');
  const nav = ('header nav .navbar-brand a');
  $(window).on('scroll', function(e) {
    // console.log(window.scrollY);
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
      $(header).addClass('nav-colored');
      $(header).removeClass('nav-transparent');
    } else {
      $(header).addClass('nav-transparent');
      $(header).removeClass('nav-colored');
    }
  })
});
