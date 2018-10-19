const positiveQuestionNumber = 5;
const negativeQuestionNumber = 2;
const optionNumber = 4;
const options = ["ruby", "php", "java", "csharp"];
const answerTypes = ["positiveAnswers", "negativeAnswers", "totalAnswers"];

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

var assemblePrefixArray = function(prefixString) {
  var exitArray = [];
  for(i = 0; i < optionNumber; i++) {
    exitArray.push(prefixString + options[i]);
  };
  return exitArray;
};

var addTotalArray = function(inputArray) {
  var exitArray = generateOptionArray();
  for(i = 0; i < inputArray.length; i++) {
    if(inputArray[i] != optionNumber) {
      exitArray[inputArray[i]]++;
    }
  };
  return exitArray;
};

var subtractTotalArray = function(inputArray) {
  var exitArray = generateOptionArray();
  for(i = 0; i < inputArray.length; i++) {
    if(inputArray[i] != optionNumber) {
      exitArray[inputArray[i]]--;
    }
  };
  return exitArray;
};

var combineTotalArray = function(inputArrayOne, inputArrayTwo) {
  var exitArray = [];
  for (i = 0; i < inputArrayOne.length; i++) {
    exitArray.push(inputArrayOne[i] + inputArrayTwo[i]);
  };
  return exitArray;
};

var generateOptionArray = function() {
  var exitArray = [];
  for(i = 0; i < optionNumber; i++) {
    exitArray.push(0);
  };
  return exitArray;
};

$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
    event.preventDefault();

    var positiveQuestions = createQuestionsArray("positiveQuestion", positiveQuestionNumber);
    var negativeQuestions = createQuestionsArray("negativeQuestion", negativeQuestionNumber);
    var positiveAnswers = createAnswersArray(positiveQuestions);
    var negativeAnswers = createAnswersArray(negativeQuestions);
    var posOptionsArray = assemblePrefixArray("pos");
    var negOptionsArray = assemblePrefixArray("neg");
    var totOptionsArray = assemblePrefixArray("tot");
    var allOptionsArray = [posOptionsArray, negOptionsArray, totOptionsArray];

    if(hasBlank(positiveAnswers) || hasBlank(negativeAnswers)) {
      $("#blankForm").show();
      return;
    }

    var posTotalAnswers = addTotalArray(positiveAnswers);
    var negTotalAnswers = subtractTotalArray(negativeAnswers);
    var totalAnswers = combineTotalArray(posTotalAnswers, negTotalAnswers);
    var allAnswers = [posTotalAnswers, negTotalAnswers, totalAnswers];

    var highValue = determineLargest(totalAnswers);
    if (hasNoResult(totalAnswers)) {
      $("#noResult").show();
    } else {
      $("#" + options[highValue]).show();
    }
    for (i = 0; i < 3; i++) {
      for (j = 0; j < optionNumber; j++) {
        $("#" + allOptionsArray[i][j]).text(allAnswers[i][j]);
      };
    };
    //Uncomment the line below to receive full output feedback
    //$("#output").show();
    $("#blankForm").hide();
    $("#formWrapper").hide();
  });
});
