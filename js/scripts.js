$(document).ready(function() {
  $("form.one").submit(function() {
    event.preventDefault();
    $(".one").hide();
    $(".info").show();
  });
  $("form.name").submit(function() {
    event.preventDefault();
    let name = $("#name").val();
    $(".info").hide();
    $(".questions").show();
    alert(name);
  });
});