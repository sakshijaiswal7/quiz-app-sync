// Questions that will be asked
const Questions = [{
	q: "Q1: What is the full form of HTML?",
	a: [{ text: "Hey Text Markup Language", isCorrect: false },
	{ text: "Hello T0 My Land", isCorrect: false },
	{ text: "Hypertext Makeup Language", isCorrect: false },
	{ text: "Hypertext Markup Language", isCorrect: true }
	]

},
{
	q: "Q2: What is the full form of CSS?",
	a: [{ text: "Cascading Style Sheets", isCorrect: true, isSelected: false },
	{ text: "Cascading Style Sheeps", isCorrect: false },
	{ text: "Cartoon Style Sheets", isCorrect: false },
	{ text: "Cascading Super Sheets", isCorrect: false }
	]

},
{
	q: "Q3: What is the full form of HTTP?",
	a: [{ text: "Hypertext Transfer Product", isCorrect: false },
	{ text: "Hypertext Test Protocol", isCorrect: false },
	{ text: "Hey Transfer Protocol", isCorrect: false },
	{ text: "Hypertext Transfer Protocol", isCorrect: true }
	]

},{
	q: "Q4: What is the full form of JS?",
	a: [{ text: "Jorden score", isCorrect: true, isSelected: false },
	{ text: "James Sheeps", isCorrect: false },
	{ text: "Java Script", isCorrect: true},
	{ text: "Jonas Sheets", isCorrect: false }
	]

},
{
	q: "Q5: Inside which HTML element do we put the JavaScript?",
	a: [{ text: "<script>", isCorrect: true, isSelected: false },
	{ text: "<javascript>", isCorrect: false },
	{ text: "<scripting>", isCorrect: false },
	{ text: "<js>", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
  
    // Show the "Play Again" button when the quiz is completed
    const playAgainButton = document.getElementById("playAgain");
    playAgainButton.style.display = "block";
  }
  
  function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
  
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";
  
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
      const choicesdiv = document.createElement("div");
      const choice = document.createElement("input");
      const choiceLabel = document.createElement("label");
  
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
  
      choiceLabel.textContent = Questions[currQuestion].a[i].text;
  
      choicesdiv.appendChild(choice);
      choicesdiv.appendChild(choiceLabel);
      opt.appendChild(choicesdiv);
    }
  
    
    const playAgainButton = document.getElementById("playAgain");
    playAgainButton.style.display = "none";
  }
  


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("submit").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
