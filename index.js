// MODULE CONTROL ARCHITECTURE
/**
 * 
 * 
 * QUIZ CONTROLLER
 * 
 */
let quizController = (function () {

    // question constructor
    function Question(id, questionText, options, correctAnswer){
        this.id = id
        this.questionText = questionText
        this.options = options
        this.correctAnswer = correctAnswer
    }
    return {
        addQuestionOnLocalStorage: function(newQuestionText, opts){
            console.log("hi")
        }
    }


})()

/**
 * 
 * UI CONTROLLER
 * 
 */

let UIController = (function () {

    let domItems = {
        // ADMIN PANEL ELEMENTS
        
        questionInsertBtn: document.getElementById('question-insert-btn'),
        newQuestionText: document.getElementById('new-question-text'),
        adminOptions: document.querySelectorAll('.admin-option')


    }

    return {
        getDomItems: domItems
    }



})()

/**
 * 
 * CENTRAL CONTROLLER
 * 
 */

let controller = (function (quizCtrl, UICtrl) {

    let selectedDomItems = UICtrl.getDomItems
    
    selectedDomItems.questionInsertBtn.addEventListener('click', function(){
        // console.log('Test')
        quizCtrl.addQuestionOnLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions)
    })


})(quizController, UIController)