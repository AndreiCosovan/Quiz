const readline = require('readline-sync');

function getRequestedTopic (numberOfTopics) {
  let requestedTopic = readline.questionInt('Please choose a topic.');
  while(requestedTopic > numberOfTopics || requestedTopic < 1){
    requestedTopic = readline.questionInt('Your Input is invalid. Please choose a valid Topic.');
  }
  return requestedTopic;
}


function getNumberOfQuestions(){
  let numberOfQuestions = readline.question('Great, how many questions do you want to answer?')
  return numberOfQuestions;
}

function getQuestionTopic(){
  let questionTopic = readline.question('What is the Topic of your question?')
  return questionTopic;
}

function getQuestionText() {
  let questionText = readline.question('Type in your question:')
  return questionText;
}

function getAnswer() {
  let questionAnswer = readline.question('What is the correct answer of the question?');
  return questionAnswer;
}

function getQuestion() {
  let _topic = getQuestionTopic();
  let _text = getQuestionText();
  let _multipleChoice = getMultipleChoice();

  if(_multipleChoice == true){
    let = _choices = getChoices();
  }
  else{
    _choices = null;
  }

  let _answer = getAnswer();

  return {topic: _topic, text: _text, multipleChoice: _multipleChoice, choices: _choices, answer: _answer, answeredCorrectly: 0, answeredFalsely: 0, answered: [], lastTimeAnswered: null}

}

function getMode(){
  let mode = readline.questionInt('Do you want to answer questions [1], to add questions [2], to access delete mode [3], to edit Questions [4], to view your statistics [5] or to leave [6]?')
  while(mode != 1 && mode != 2 && mode != 3 && mode != 4 && mode != 5 && mode != 6){
    mode = readline.questionInt('Your input is not valid. Please type in a number from 1 to 6.')
  }
  switch(mode){
    case 1:
    return "answerMode"
    break;
    case 2: 
    return "addQuestionMode"
    break;
    case 3: 
    return "deleteMode"
    break;
    case 4: 
    return "editQuestionMode"
    break;
    case 5:
    return "statisticsMode"
    break;
    case 6:
    return "exit"
    break
  }
  
}

 function getDeleteMode(){
  let deleteMode = readline.questionInt("Do you want to delete a question [1] or delete a topic [2]?")
  while(deleteMode != 1 && deleteMode != 2){
    deleteMode = readline.questionInt("Please enter a valid Number [1,2]")
  }
   switch(deleteMode){
     case 1:
     return "deleteQuestion"
     break;
     case 2:
     return "deleteTopic"
     break;
   }
 }

 function getQuestionToDelete(questionList){
   let questionToDelete = readline.questionInt('Here are your questions. Type in the number off the question you want to delete. Ignore the first question and start counting at 1.')
    while(questionToDelete < 1 && questionToDelete > questionList.length -1){
      questionToDelete = readline.questionInt('Your input is invalid. Type in the number off the question you want to delete. Ignore the first question and start counting at 1.')
    }
   return questionToDelete;

 }

 function getQuestionToEdit(questionList){
   let questionToEdit = readline.questionInt('Here are your questions. Type in the number off the question you want to edit. Ignore the first question and start counting at 1.')
    while(questionToEdit < 1 && questionToEdit > questionList.length -1){
      questionToEdit = readline.questionInt('Your input is invalid. Type in the number off the question you want to edit. Ignore the first question and start counting at 1.')
    }
   return questionToEdit;

 }

 function getTopicToDelete(topics){
   let topicToDelete = readline.questionInt('Here are your topics. Type in the number off the topic you want to delete. Please start counting at 1.')
    while(topicToDelete < 1 && topicToDelete > topics.length -1){
      questionToDelete = readline.questionInt('Your input is invalid. Type in the number off the topic you want to delete. Please start counting at 1.')
    }
   return topicToDelete;

 }


function getNumberOfQuestions(){
  let numberOfQuestions = readline.questionInt('How many questions do you want to answer?')
  while(numberOfQuestions < 0){
    numberOfQuestions = readline.questionInt('Please type in a valid number of questions.')
  }
  return numberOfQuestions;
}

function getMultipleChoice(){
  let multipleChoice = readline.questionInt('Is it a multiple choice question? Type [1] if yes and [2] if no.')
  while(multipleChoice != 1 && multipleChoice != 2){
    multipleChoice = readline.questionInt('Your Input is invalid. Is it a multiple choice question? Type [1] if yes and [2] if no.')
  }
  if(multipleChoice == 1){
    return true;
  }
  else if(multipleChoice == 2){
    return false;
  }
}

function getChoices(){
  let choices = [];
  let choice1 = '[1] ' +  readline.question('Type in the first choice:');
  let choice2 = '[2] ' +  readline.question('Type in the second choice:');
  let choice3 = '[3] ' +  readline.question('Type in the third choice:');
  choices.push(choice1);
  choices.push(choice2);
  choices.push(choice3);
  return choices;
}

function getStatisticsMode(){
  let statisticsMode = readline.questionInt('What kind of statistics do you want to view? Type [1] for total statistics and [2] for question-releated statistics.')
  while(statisticsMode != 1 && statisticsMode != 2){
    statisticsMode = readline.questionInt('Your input is invalid. Type [1] for total statistics and [2] for question-releated statistics.')
  }
  switch(statisticsMode){
    case 1:
    return "totalStatistics"
    break;
    case 2:
    return "individualStatistics"
    break;
  }
  
}

exports.getNumberOfQuestions = getNumberOfQuestions
exports.getRequestedTopic = getRequestedTopic
exports.getQuestion = getQuestion
exports.getMode = getMode
exports.getAnswer = getAnswer
exports.getDeleteMode = getDeleteMode
exports.getQuestionToDelete = getQuestionToDelete
exports.getTopicToDelete = getTopicToDelete
exports.getQuestionToEdit = getQuestionToEdit
exports.getStatisticsMode = getStatisticsMode