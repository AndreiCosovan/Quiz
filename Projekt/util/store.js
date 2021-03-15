const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./storage');

function getQuestions() {
  const questions = localStorage.getItem('QUESTIONS');
  return JSON.parse(questions);
}

function addQuestion(question) {

  let questionList = getQuestions();
  if(questionList===null) {
    questionList = [];
  }
  questionList.push(question);
  let jsonString = JSON.stringify(questionList);
  localStorage.setItem('QUESTIONS', jsonString);
}

function saveQuestions(questionList) {
  let jsonString = JSON.stringify(questionList);
  localStorage.setItem('QUESTIONS', jsonString);
}

function removeQuestion(indexOfQuestion){
  let questionList = getQuestions();
  questionList.splice(indexOfQuestion, 1)
  let jsonString = JSON.stringify(questionList);
  localStorage.setItem('QUESTIONS', jsonString);
}

function removeTopic(topic){
  let questionList = getQuestions();

  questionList = questionList.filter(function( question ) {
    return question.topic !== topic;
  });
  
  
  let jsonString = JSON.stringify(questionList);
  localStorage.setItem('QUESTIONS', jsonString);
}

function editQuestion(indexOfQuestion, newQuestion){
  let questionList = getQuestions();
  questionList.splice(indexOfQuestion, 1, newQuestion)
  let jsonString = JSON.stringify(questionList)
  localStorage.setItem('QUESTIONS', jsonString)
}



exports.getQuestions = getQuestions;
exports.addQuestion = addQuestion;
exports.saveQuestions = saveQuestions;
exports.removeQuestion = removeQuestion;
exports.editQuestion = editQuestion;
exports.removeTopic = removeTopic