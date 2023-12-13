// async function getQuestions(){
//     const questions = fetch("./resource/questions.json")
//     .then((res)=>(console.log(JSON.stringify(res))))
//     .catch((e)=>(console.log(e)));
//     // console.log(questions);
// }

// getQuestions();

const questions = [
    {
        "question"  : "Qu'a inventé Amin Maalouf, oncle d'Ibrahim Maalouf ?",
        "answers"   : [
            {
                "text"      : "La trompette à son nasal",
                "isCorrect" : false
            },
            {
                "text"      : "La trompette à quatre pistons",
                "isCorrect" : true
            },
            {
                "text"      : "La trompette en bois",
                "isCorrect" : false
            },
            {
                "text"      : "Faisons trompette",
                "isCorrect" : false
            }
        ]
    },
    {
        "question"  : "Quelle était la particularité de Django Reinhardt, guitariste jazz ?",
        "answers"   : [
            {
                "text"      : "Il ne savait pas lire la musique",
                "isCorrect" : false
            },
            {
                "text"      : "Il jouait avec une guitare de gaucher alors qu'il était droitier",
                "isCorrect" : false
            },
            {
                "text"      : "Il ne jouait qu'avec trois doigts avec sa main droite",
                "isCorrect" : true
            },
            {
                "text"      : "Il s'accordait en pétant",
                "isCorrect" : false
            }
        ]
    },
    {
        "question"  : "Lequel de ces instruments fait partie de la famille des bois?",
        "answers"   : [
            {
                "text"      : "Saxophone",
                "isCorrect" : true
            },
            {
                "text"      : "Soubassophone",
                "isCorrect" : false
            },
            {
                "text"      : "Trombone",
                "isCorrect" : false
            },
            {
                "text"      : "Un chien",
                "isCorrect" : false
            }
        ]
    },
    {
        "question"  : "Lequel de ces artistes a participé à la composition de la musique du jeu Sonic the Hedgehog 3 ?",
        "answers"   : [
            {
                "text"      : "Cristophe Héral",
                "isCorrect" : false
            },
            {
                "text"      : "Koji Kondo",
                "isCorrect" : false
            },
            {
                "text"      : "Nobuo Uematsu",
                "isCorrect" : false
            },
            {
                "text"      : "Mickael Jackson",
                "isCorrect" : true
            }
        ]
    }
];

const container = document.getElementById("questionnaire__global-container");

const header    = document.getElementById("questionnaire__header");

const titleP    = document.createElement("p");
const titleText = document.createTextNode("Titre du questionnaire.");
titleP.appendChild(titleText);
header.appendChild(titleP);

const pointsP    = document.createElement("p");
pointsP.id = "questionnaire__counter";
const pointsText = document.createTextNode("Bonnes réponses: 0");
pointsP.appendChild(pointsText);
header.appendChild(pointsP);

let listOfCorrectAnswers = [];
for (let i = 0; i < questions.length; i++) {
    listOfCorrectAnswers.push(false);
}

const counterElement = document.getElementById("questionnaire__counter");

questions.forEach((question, questionIndex) => {

    const questionContainerNode = document.createElement("div");
    questionContainerNode.classList.add("questionnaire__question", "col");

    const questionNode = document.createElement("div");
    questionNode.classList.add("questionnaire__question__question", "row", "text-center");

    const questionP = document.createElement("p");
    const questionText = document.createTextNode(question.question);

    questionP.appendChild(questionText);
    questionNode.appendChild(questionP);
    questionContainerNode.appendChild(questionNode);

    const answerContainerNode = document.createElement("div");
    answerContainerNode.classList.add("questionnaire__question__reponses", "row", "d-flex", "flex-row");

    question.answers.forEach((answer) => {

        const answerNode = document.createElement("div");
        answerNode.classList.add("questionnaire__question__reponses__reponse", "mt-2", "p-3", "bd-highlight", "text-center", "d-flex");
        if (answer.isCorrect){
            answerNode.classList.add("is-correct");
        }

        const answerP = document.createElement("p");
        const answerText = document.createTextNode(answer.text);
        answerP.appendChild(answerText);
        answerNode.appendChild(answerP);
        answerNode.addEventListener("click", (event) => {
            console.log(event.target.classList);
            if(event.target.classList.contains("is-correct")){
                event.target.classList.toggle("bg-success");
                listOfCorrectAnswers[questionIndex] = true;
            } else {
                event.target.classList.toggle("bg-danger");
                listOfCorrectAnswers[questionIndex] = false;
            }
            newNumberOfCorrectAnswers = 0;
            listOfCorrectAnswers.forEach((correctAnswer) => {
                correctAnswer ? newNumberOfCorrectAnswers++ : null
            })
            newNumberOfCorrectAnswers = newNumberOfCorrectAnswers.toString();
            counterElement.innerText = "Bonnes réponses: " + newNumberOfCorrectAnswers;
        } )
        answerContainerNode.append(answerNode);
    })

    questionContainerNode.appendChild(answerContainerNode);

    container.appendChild(questionContainerNode);

})
