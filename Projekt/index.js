const readline = require('readline-sync');
const { getRequestedTopic, getNumberOfQuestions, getQuestion, getMode, getAnswer, getDeleteMode, getQuestionToDelete, getTopicToDelete, getQuestionToEdit, getStatisticsMode } = require('./util/input.js')
const { getQuestions, addQuestion, saveQuestions, removeQuestion, removeTopic, editQuestion } = require('./util/store.js')
const { showRequestedQuestions, printTopics, printQuestion, printCorrectAnswer, printCongratulations, printChoices, printQuestionAdded, printQuestionList, printQuestionRemoved, printUniqueTopics, printTopicRemoved, printQuestionEdited, printEnterNewQuestion, printStatistics} = require('./util/output.js')

let questionList = getQuestions();
let topics = questionList.map(question => question.topic);
let uniqueTopics = [...new Set(topics)];

let mode = getMode()

while(mode != "exit"){

  questionList = getQuestions();
  topics = questionList.map(question => question.topic);
  uniqueTopics = [...new Set(topics)];
  
  switch(mode){
  case "answerMode":
    runAnswerMode(questionList, uniqueTopics);
    break;
  case "addQuestionMode":
    runAddQuestionMode(questionList);
    break;
  case "deleteMode":
    runDeleteMode(questionList, uniqueTopics);
    break;
  case "editQuestionMode":
    runEditQuestionMode(questionList);
    break;
  case "statisticsMode":
    runStatisticsMode(questionList)
    break;
  }
  mode = getMode()
}

function runDeleteMode(questionList, uniqueTopics){
 let deleteMode = getDeleteMode()
 switch(deleteMode){
   case "deleteQuestion":
   deleteQuestion(questionList)
   break;
   case "deleteTopic":
   deleteTopic(uniqueTopics)
   break;
 }
}

function deleteQuestion(questionList){
  printQuestionList(questionList)
  let questionToDelete = getQuestionToDelete(questionList);
  removeQuestion(questionToDelete)
  printQuestionRemoved()
}

function deleteTopic(uniqueTopics){
  printUniqueTopics(uniqueTopics)
  let topicToDelete = uniqueTopics[getTopicToDelete(uniqueTopics)]
  removeTopic(topicToDelete)
  printTopicRemoved()
}

function runEditQuestionMode(questionList){
  printQuestionList(questionList)
  let questionToEdit = getQuestionToEdit(questionList);
  printEnterNewQuestion();
  editQuestion(questionToEdit, getQuestion())
  printQuestionEdited()
}



function runAddQuestionMode(){

  addQuestion(getQuestion())
  printQuestionAdded();
  saveQuestions
}

function runAnswerMode(questionList, uniqueTopics){
  printTopics(uniqueTopics)
  let requestedTopic = getRequestedTopic(uniqueTopics.length);
 
  //Fragen abrufen
  let requestedQuestions = []
  questionList.forEach(question =>{
    if(requestedTopic == 1){
      requestedQuestions.push(question);
    }
    else if(question.topic == uniqueTopics[requestedTopic - 1])
    requestedQuestions.push(question)
  
  })
  let numberOfQuestions = getNumberOfQuestions();

    //Zufällige Frage auswählen
  for(i=0; i<numberOfQuestions; i++){
      let question = requestedQuestions[Math.floor(Math.random()*requestedQuestions.length)];
      while(question.text == null){
        question = requestedQuestions[Math.floor(Math.random()*requestedQuestions.length)];
      }
  printQuestion(question.text)
  if(question.multipleChoice){
    printChoices(question.choices)
  }
  let answer = getAnswer();
  if(answer == question.answer){
    question.answeredCorrectly++
    printCongratulations();
  }
  else{
    question.answeredFalsely++;
    printCorrectAnswer(question.answer)
  }
    //Übertragen der Statistiken im richtigen Array
    question.answered.push(getCurrentDate())
    question.lastTimeAnswered = getCurrentDate();

    questionList.forEach(function(questionInJSON) {
    if (questionInJSON.text == question.text ) {
        questionInJSON.answeredCorrectly = question.answeredCorrectly;
        questionInJSON.answeredFalsely = question.answeredFalsely;
        questionInJSON.answered = question.answered;
        questionInJSON.lastTimeAnswered = question.lastTimeAnswered;
        saveQuestions(questionList);
    }
  });
  }
}

function runStatisticsMode(questionList){
  let statisticsMode = getStatisticsMode()
  switch(statisticsMode){
    case "totalStatistics":
      let sumOfAnsweredFalsely = 0;
      let sumOfAnsweredCorrectly = 0;
      questionList.forEach(function(question){
      sumOfAnsweredFalsely += question.answeredFalsely;
      sumOfAnsweredCorrectly += question.answeredCorrectly;
      });
      printStatistics(sumOfAnsweredFalsely, sumOfAnsweredCorrectly)
      break;
    case "individualStatistics":
      printQuestionList(questionList)
      break;
  }
  
}

function getCurrentDate(){
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  return today;
}
