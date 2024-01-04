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

$(document).ready(function() {
  $("#basic").click(function(e) {
    $("#selected_plan").val("Basic");
    $("#basic").css("border", "1px solid blue");
    $("#basic").css("box-shadow", "0px 7px 5px 0px #3033e3");

    $("#standard").css("border", "1px solid #dedede");
    $("#standard").css("box-shadow", "0px 3px 1px 0px #dedede");

    $("#premium").css("border", "1px solid #dedede");
    $("#premium").css("box-shadow", "0px 3px 1px 0px #dedede");
  })
});

$(document).ready(function() {
  $("#standard").click(function(e) {
    $("#selected_plan").val("Standard");
    $("#standard").css("border", "1px solid blue");
    $("#standard").css("box-shadow", "0px 7px 5px 0px #3033e3");

    $("#basic").css("border", "1px solid #dedede");
    $("#basic").css("box-shadow", "0px 3px 1px 0px #dedede");

    $("#premium").css("border", "1px solid #dedede");
    $("#premium").css("box-shadow", "0px 3px 1px 0px #dedede");
  })
});

$(document).ready(function() {
  $("#premium").click(function(e) {
    $("#selected_plan").val("Premium");
    $("#premium").css("border", "1px solid blue");
    $("#premium").css("box-shadow", "0px 7px 5px 0px #3033e3");

    $("#standard").css("border", "1px solid #dedede");
    $("#standard").css("box-shadow", "0px 3px 1px 0px #dedede");;

    $("#basic").css("border", "1px solid #dedede");
    $("#basic").css("box-shadow", "0px 3px 1px 0px #dedede");
  })
});


  