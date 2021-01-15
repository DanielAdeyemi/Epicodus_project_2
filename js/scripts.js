$(document).ready(function() {
  $("form.one").submit(function() {
    event.preventDefault();
    $(".one").hide();
    $(".info").show();
  });
  $("form.name").submit(function() {
    event.preventDefault();
    const name = $("#name").val();
    $(".userName").text(name);
    $(".info").hide();
    $(".questions").show();
  });
  $("form.firstSet").submit(function() {
    event.preventDefault();
    let answerOne = $("input:radio[name=firstSet]:checked").val();
    alert(answerOne);
  })
});