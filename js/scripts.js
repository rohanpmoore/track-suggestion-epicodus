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
};

var createQuestionsArray = function(name, size) {
  var exitArray = [];
  for(i = 0; i < size; i++) {
    exitArray.push(name + (i + 1));
  }
  return exitArray;
};

var createAnswersArray = function(questionsArray) {
  var exitArray = [];
  for(i = 0; i < questionsArray.length; i++) {
    exitArray.push(parseInt($("#" + questionsArray[i]).val()));
  };
  return exitArray;
};

var hasBlank = function(answersArray) {
  for (i = 0; i < answersArray.length; i++) {
    if (!answersArray[i] && answersArray[i] != 0) {
      return true;
    }
  };
  return false;
};

$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
    event.preventDefault();
    var answerTally = [];
    var positiveQuestions = createQuestionsArray("positiveQuestion", positiveQuestionNumber);
    var negativeQuestions = createQuestionsArray("negativeQuestion", negativeQuestionNumber);
    var positiveAnswers = createAnswersArray(positiveQuestions);
    var negativeAnswers = createAnswersArray(negativeQuestions);
    for(i = 0; i < optionNumber; i++) {
      answerTally.push(0);
    };
    if(hasBlank(positiveAnswers) || hasBlank(negativeAnswers)) {
      $("#blankForm").show();
      return;
    }
    for(i = 0; i < positiveQuestionNumber; i++) {
      if(positiveAnswers[i] != optionNumber) {
        answerTally[positiveAnswers[i]]++;
      }
    };
    for(i = 0; i < negativeQuestionNumber; i++) {
      if(negativeAnswers[i] != optionNumber) {
        answerTally[negativeAnswers[i]]--;
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
