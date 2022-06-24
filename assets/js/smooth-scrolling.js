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
});
