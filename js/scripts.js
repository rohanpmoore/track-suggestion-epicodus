const questionNumber = 5;

var determineLargest = function(scores) {
  var highest = 0;
  for (i=1; i< scores.length; i++) {
    if (scores[i] > scores[highest]) {
      highest = i;
    }
  }
  return highest;
};

$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
    event.preventDefault();
    var answerTally = [0, 0, 0, 0];
    var questions = [];
    var answers = []
    for(i = 0; i < questionNumber; i++) {
      questions.push("question" + (i + 1));
    };
    for(i = 0; i < questionNumber; i++) {
      answers.push(parseInt($("#" + questions[i]).val()));
    };
    for(i = 0; i < questionNumber; i++) {
      if(!answers[i] && answers[i] != 0) {
        $("#blankForm").show();
        return;
      }
    };
    for(i = 0; i < questionNumber; i++) {
      answerTally[answers[i]]++;
    };
    var highValue = determineLargest(answerTally);
    if (highValue === 0) {
      $("#ruby").show();
    } else if (highValue === 1) {
      $("#php").show();
    } else if (highValue === 2) {
      $("#java").show();
    } else {
      $("#csharp").show();
    }
    $("#blankForm").hide();
    $("#formWrapper").hide();
  });
});
