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
  $("form#firstSet").submit(function() {
    event.preventDefault();
    let answerOne = $("input:radio[name=firstSet]:checked").val();
    if (answerOne === "yes") {
      $("#firstSet").hide();
      $("#openChoice").show();
    } else {
      $("#firstSet").hide();
      $("#quiz").show();
    }
  });
  $("form#yesChoice").submit(function() {
    event.preventDefault();
    let language = $("#choices").val();
    if (language === "Other") {
      $("form#yesChoice").hide();
      $("form#other").show();

    } else {
      $("#outcome").text(language);
      $(".survey").hide();
      $(".result").show();
    }
  })
  $("form#other").submit(function() {
    event.preventDefault();
    let other = $("#languageInput").val();
    $("#outcome").text(other);
    $(".survey").hide();
    $(".result").show();
  })
});