// lol

$(document).ready(function () {
  $(".secondaryframe").hide();
});

function showIndex() {
  $(".secondaryframe").hide();
  $(".mainframe").show();
}

function showLink() {
  $(".mainframe").hide();
  $(".secondaryframe").show();
}
