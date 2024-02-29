// script.js

let questions = [
	{
		prompt: `What is Express.js?`,
		options: [
		    "A web application framework for Node.js",
		    "A programming language",
		    "A database system",
		    "A web browser",
		],
		answer: "A web application framework for Node.js",
	    },
	    {
		prompt: `What HTTP method is used to retrieve data from a server in Express.js?`,
		options: [
		    "GET",
		    "POST",
		    "PUT",
		    "DELETE",
		],
		answer: "GET",
	    },
	    {
		prompt: `Which module is commonly used for middleware management in Express.js?`,
		options: [
		    "router",
		    "express",
		    "middleware",
		    "http",
		],
		answer: "middleware",
	    },
	    {
		prompt: `What does the "req" object represent in Express.js?`,
		options: [
		    "The request object",
		    "The response object",
		    "The middleware function",
		    "The route parameters",
		],
		answer: "The request object",
	    },
	    {
		prompt: `What does the "res" object represent in Express.js?`,
		options: [   
		    "The request object",
		    "The middleware function",
		    "The response object",
		    "The route parameters",
		],
		answer: "The response object",
	    },
	    {
		prompt: `Which template engine is commonly used with Express.js for server-side rendering?`,
		options: [
		    
		    "React",
		    "Angular",
		    "Handlebars",
		    "Vue.js",
		],
		answer: "Handlebars",
	    },
	    {
		prompt: `What is the purpose of middleware in Express.js?`,
		options: [	   
		    "To define routes in the application",
		    "To process requests before they reach the route handler",
		    "To send responses to clients",
		    "To render HTML templates",
		],
		answer: "To process requests before they reach the route handler",
	    },
	    {
		prompt: `What is the purpose of the "next" function in Express.js middleware?`,
		options: [
		    "To pass control to the next middleware function",
		    "To end the request-response cycle",
		    "To send a response to the client",
		    "To terminate the application",
		],
		answer: "To pass control to the next middleware function",
	    },
	    {
		prompt: `Which method is used to define a route handler in Express.js?`,
		options: [
		    "app.post()",
		    "app.route()",
		    "app.get()",
		    "app.use()",
		],
		answer: "app.get()",
	    },
	    {
		prompt: `What is the purpose of the "app.use()" method in Express.js?`,
		options: [
		    "To mount middleware functions",
		    "To define route handlers",
		    "To send responses to clients",
		    "To render HTML templates",
		],
		answer: "To mount middleware functions",
	    },
	    {
		prompt: `What does the "app.listen()" method do in Express.js?`,
		options: [
		    "Starts a server listening for connections",
		    "Sends a response to the client",
		    "Mounts middleware functions",
		    "Defines route handlers",
		],
		answer: "Starts a server listening for connections",
	    },
	    {
		prompt: `What is the purpose of the "req.params" object in Express.js?`,
		options: [
		    "To access route parameters",
		    "To access query parameters",
		    "To access request headers",
		    "To access request body",
		],
		answer: "To access route parameters",
	    },
	    {
		prompt: `What is the purpose of the "req.query" object in Express.js?`,
		options: [		    
		    "To access route parameters",
		    "To access query parameters",
		    "To access request headers",
		    "To access request body",
		],
		answer: "To access query parameters",
	    },
	    {
		prompt: `What is middleware in Express.js?`,
		options: [ 
		    "A template engine",
		    "A database system",
		    "Functions that have access to the request and response objects",
		    "A web browser",
		],
		answer: "Functions that have access to the request and response objects",
	    },
	    {
		prompt: `What is the purpose of the "express.static()" middleware in Express.js?`,
		options: [
		    "To serve static files",
		    "To parse JSON data",
		    "To handle form submissions",
		    "To render HTML templates",
		],
		answer: "To serve static files",
	    },
	    {
		prompt: `What does the "app.route()" method do in Express.js?`,
		options: [    
		    "Mounts middleware functions",
		    "Creates a new route",
		    "Defines route handlers",
		    "Combines multiple route handlers into a single route",
		],
		answer: "Combines multiple route handlers into a single route",
	    },
	    {
		prompt: `What is the purpose of the "app.all()" method in Express.js?`,
		options: [
		    "Matches all HTTP methods",
		    "Matches all routes",
		    "Mounts middleware functions",
		    "Defines route handlers",
		],
		answer: "Matches all routes",
	    },
	    {
		prompt: `What does the "res.json()" method do in Express.js?`,
		options: [		    
		    "Sends an HTML response",
		    "Sends a plain text response",
		    "Sends a response with a specific status code",
		    "Sends a JSON response",
		],
		answer: "Sends a JSON response",
	    },
	    {
		prompt: `What is the purpose of the "res.sendFile()" method in Express.js?`,
		options: [
		    "Sends a file as the response",
		    "Sends a redirect response",
		    "Sends a file as an attachment",
		    "Sends a JSON response",
		],
		answer: "Sends a file as the response",
	    },
	    {
		prompt: `What is Express.js routing?`,
		options: [
		    "Mapping HTTP methods and URLs to controller functions",
		    "Generating HTML templates",
		    "Serving static files",
		    "Connecting to a database",
		],
		answer: "Mapping HTTP methods and URLs to controller functions",
	    },
	    {
		prompt: `What is the purpose of the "express.Router()" method in Express.js?`,
		options: [		    
		    "Defines middleware functions",
		    "Serves static files",
		    "Parses request bodies",
		    "Creates modular route handlers",
		],
		answer: "Creates modular route handlers",
	    },
	    {
		prompt: `What is the purpose of the "req.body" object in Express.js?`,
		options: [
		    "To access route parameters",
		    "To access query parameters",
		    "To access request body data",
		    "To access request headers",
		],
		answer: "To access request body data",
	    },
	    {
		prompt: `What is Express.js middleware stack?`,
		options: [ 
		    "The stack data structure used for middleware management",
		    "The routing mechanism in Express.js",
		    "The order in which middleware functions are executed",
		    "The process of handling HTTP requests and responses",
		],
		answer: "The order in which middleware functions are executed",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
