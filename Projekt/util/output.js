const { getQuestions, addQuestion } = require('./store')

function showRequestedQuestions(questionList, requestedTopic) {
 console.log(getQuestions(question => question.topic = requestedTopic));
}

function printTopics(uniqueTopics) {
  for (let i = 0; i < uniqueTopics.length; i++){
  console.log('[' + (i+1) + ']' + ' ' + uniqueTopics[i])
  }
}

function printQuestion(questionText){
  console.log(questionText)
}

function printCorrectAnswer(correctAnswer){
  console.log("Your answer is wrong. The correct answer is: " + correctAnswer);
}

function printCongratulations(){
  console.log('Congratulations, your answer is correct!');
}

function printChoices(choices){
  console.log(choices);
}

function printQuestionAdded(){
  console.log('Question added.')
}

function printQuestionList(questionList){
  console.log(questionList)
}

function printQuestionRemoved(){
  console.log("Question removed.")
}

function printUniqueTopics(topics){
  for(let i = 1; i <= topics.length; i++){
    console.log(topics[i])
  }
  
}

function printTopicRemoved(){
  console.log("Topic removed.")
}

function printQuestionEdited(){
  console.log("Question edited.")
}

function printEnterNewQuestion(){
  console.log("Please enter the new question.")
}

function printStatistics(sumOfAnsweredFalsely, sumOfAnsweredCorrectly){

  console.log('Questions answered: ' + (sumOfAnsweredFalsely + sumOfAnsweredCorrectly))
  console.log('Questions answered correctly: ' + sumOfAnsweredCorrectly)
  console.log('Questions answered falsely: ' + sumOfAnsweredFalsely)

}


exports.showRequestedQuestions = showRequestedQuestions;
exports.printTopics = printTopics
exports.printQuestion = printQuestion
exports.printCorrectAnswer = printCorrectAnswer
exports.printCongratulations = printCongratulations
exports.printQuestionAdded = printQuestionAdded
exports.printQuestionList = printQuestionList
exports.printQuestionRemoved = printQuestionRemoved
exports.printUniqueTopics = printUniqueTopics
exports.printTopicRemoved = printTopicRemoved
exports.printQuestionEdited = printQuestionEdited
exports.printEnterNewQuestion = printEnterNewQuestion
exports.printChoices = printChoices
exports.printStatistics = printStatistics