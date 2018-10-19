const positiveQuestionNumber = 5;
/*While it is not used in this program, I added functionality for questions that subtract points from options in order to provide more options should the code be used again in the future*/
const negativeQuestionNumber = 0;
const optionNumber = 4;

var determineLargest = function(scores) {
  var highest = 0;
  for (i = 1; i < scores.length; i++) {
    if (scores[i] > scores[highest]) {
      highest = i;
    }
  }
  return highest;
};

var hasNoResult = function(scores) {
  for (i = 0; i < scores.length; i++) {
    if (scores[i] > 0) {
      return false;
    }
  };
  return true;
}

$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
    event.preventDefault();
    var answerTally = [];
    var questions = [];
    var answers = []
    for(i = 0; i < optionNumber; i++) {
      answerTally.push(0);
    }
    for(i = 0; i < positiveQuestionNumber; i++) {
      questions.push("positiveQuestion" + (i + 1));
    };
    for(i = 0; i < positiveQuestionNumber; i++) {
      answers.push(parseInt($("#" + questions[i]).val()));
    };
    for(i = 0; i < positiveQuestionNumber; i++) {
      if(!answers[i] && answers[i] != 0) {
        $("#blankForm").show();
        return;
      }
    };
    for(i = 0; i < positiveQuestionNumber; i++) {
      if(answers[i] != optionNumber) {
        answerTally[answers[i]]++;
      }
    };
    var highValue = determineLargest(answerTally);
    if (hasNoResult(answerTally)) {
      $("#noSuggestion").show();
    } else if (highValue === 0) {
      $("#ruby").show();
    } else if (highValue === 1) {
      $("#php").show();
    } else if (highValue === 2) {
      $("#java").show();
    } else if (highValue === 3) {
      $("#csharp").show();
    } else {
      $("#invalidResult").show();
      return;
    }
    $("#blankForm").hide();
    $("#formWrapper").hide();
  });
});
