function languageGenerator(input1, input2, input3, input4) {
  const sum = input1 + input2 + input3 + input4;
  if (sum === 0) {
    return "C++";
  } else if (sum < 10) {
    return "C#";
  } else if (sum <= 14) {
    return "Ruby";
  } else if (sum <= 20) {
    return "JavaScript";
  } else if (sum <= 30) {
    return "Go";
  } else {
    return "Python";
  }
}

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
    const answerOne = $("input:radio[name=firstSet]:checked").val();
    if (answerOne === "yes") {
      $("#firstSet").hide();
      $("#openChoice").show();
    } else {
      $("#firstSet").hide();
      $("#notQuiz").hide();
      $("#quiz").show();
    }
  });
  $("form#yesChoice").submit(function() {
    event.preventDefault();
    const language = $("#choices").val();
    if (language === "Other") {
      $("form#yesChoice").hide();
      $("form#other").show();

    } else {
      $("#outcome").text(language);
      $(".survey").hide();
      $(".result").show();
    }
  });

  $("form#other").submit(function() {
    event.preventDefault();
    const other = $("#languageInput").val();
    $("#outcome").text(other);
    $(".survey").hide();
    $(".result").show();
  });

  $("form.realQuiz").submit(function() {
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=q1]:checked").val());
    const answer2 = parseInt($("input:radio[name=q2]:checked").val());
    const answer3 = parseInt($("input:radio[name=q3]:checked").val());
    const answer4 = parseInt($("input:radio[name=q4]:checked").val());
    const output = languageGenerator(answer1, answer2, answer3, answer4);
    $("#outcome").text(output);
    $(".survey").hide();
    $(".result").show();
  });
});