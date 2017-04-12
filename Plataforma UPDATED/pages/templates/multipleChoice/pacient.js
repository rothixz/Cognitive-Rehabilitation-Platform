var config = {
    apiKey: "AIzaSyCWjs-R7KWD1Hqg1Ve4h1ZGynj06XbB-JQ",
    authDomain: "avcproject-fae11.firebaseapp.com",
    databaseURL: "https://avcproject-fae11.firebaseio.com",
    storageBucket: "avcproject-fae11.appspot.com",
    messagingSenderId: "1031859806052"
};

// Initialize Firebase
firebase.initializeApp(config);

// References
var database = firebase.database(); // database service

// Global variables
var templateRef = database.ref("templates/multiplechoice");

templateRef.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        rightAnswers = childSnapshot.val().respostasCertas,
        question = childSnapshot.val().pergunta,
        answers = childSnapshot.val().respostas,
        answerNumber = childSnapshot.val().nrEscolhas
    })
});


function start() {
    $('#start').hide();

    document.getElementById('rect').style.visibility = 'visible';
    
    inserirPergunta(); //gera pergunta
    shuffle(answers); // shuffles the array
    generateBtn(); //gera divs para palavra a descobrir

    $(":button").click(function () {

        var clickedButton = this.id;
        var chosenAnswer = $("#" + clickedButton).html();

        console.log(clickedButton);

        if (rightAnswers.includes(chosenAnswer)) {
            disableBtn(clickedButton);
            $("#" + clickedButton).attr('class', 'answer btn btn-success');

            rightAnswers.remove(chosenAnswer);
            checkIfDone();
        }
        else if(clickedButton == "rect"){
            try {
                recognizer.start();
              } catch(ex) {
                alert("error: "+ex.message);
              }
              document.getElementById('divBorder').style.visibility = 'visible';
              document.getElementById('rect').style.visibility = 'hidden';
        }
        else {
            disableBtn(clickedButton);
            $("#" + clickedButton).attr('class', 'answer btn btn-danger');
        }
    });
}

function inserirPergunta() {
    $("#question").html(question);
}

function generateBtn() {
    for (var i = 0; i < answerNumber; i++) {
        $("#answers").append("<button class=\"answer btn btn-outlined\" id=\"resposta" + i + "\">" + answers[i] + "</button>");
    }
}

function checkIfDone() {
    if (rightAnswers.length == 0) {
        recognizer.stop();
        $("#message").append("<h2>MUITO BEM! CONCLUIU A TAREFA COM SUCESSO!</h2>");
        for (var i = 0; i < answerNumber; i++) {
            $("#resposta" + i).attr('disabled', 'disabled');
        }
    }
}

function disableBtn(clickedButton) {
    $("#" + clickedButton).attr('disabled', 'disabled');
    $("#" + clickedButton).removeAttr('class');
}

/* Removes element from array by value*/
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

/*Shuffles array*/
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function voz(botao_escolhido){
    
    var clickedButton = botao_escolhido.id;
    var chosenAnswer = $("#" + clickedButton).html();

    console.log("botao " + botao_escolhido.id);
    console.log("chosenAnswer: " + chosenAnswer);


    if (rightAnswers.includes(chosenAnswer)) {
        console.log("certa");

        disableBtn(clickedButton);
        $("#" + clickedButton).attr('class', 'answer btn btn-success');

        rightAnswers.remove(chosenAnswer);
        checkIfDone();
    }
    else {
        console.log("errada");

        disableBtn(clickedButton);
        $("#" + clickedButton).attr('class', 'answer btn btn-danger');
    }
}

function getNoRespostas(){
    return answerNumber;
}