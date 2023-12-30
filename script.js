$(document).ready(function () {
    $("#login_btn").click(function (e) {
      $("html, body").animate({ scrollTop: 0 }, "normal");
      $(".login_form").css("display", "block");
      $("#page_mask").fadeIn("fast").css("display", "block");
    });
  });
  
  $(document).ready(function () {
    $("#page_mask").click(function (e) {
      $(".login_form").css("display", "none");
      $("#page_mask").css("display", "none");
    });
  });
  