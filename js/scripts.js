$(document).ready(function() {
  $("form.one").submit(function() {
    event.preventDefault();
    $(".one").hide();
    $(".info").show();
  });
});