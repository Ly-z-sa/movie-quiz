// Quiz Data (20 questions)
const quizQuestions = [
    {
        plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        options: ["Inception", "Interstellar", "Tenet", "The Matrix"],
        correct: "Inception"
    },
    {
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        options: ["The Green Mile", "Forrest Gump", "The Shawshank Redemption", "Pulp Fiction"],
        correct: "The Shawshank Redemption"
    },
    {
        plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        options: ["Cast Away", "Big", "Forrest Gump", "Saving Private Ryan"],
        correct: "Forrest Gump"
    },
    {
        plot: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        options: ["Batman Begins", "The Dark Knight Rises", "The Dark Knight", "Joker"],
        correct: "The Dark Knight"
    },
    {
        plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        options: ["Reservoir Dogs", "Kill Bill", "Pulp Fiction", "Jackie Brown"],
        correct: "Pulp Fiction"
    },
    {
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        options: ["The Fellowship of the Ring", "The Two Towers", "The Lord of the Rings: The Return of the King", "The Hobbit"],
        correct: "The Lord of the Rings: The Return of the King"
    },
    {
        plot: "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.",
        options: ["Se7en", "Gone Girl", "Fight Club", "The Social Network"],
        correct: "Fight Club"
    },
    {
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        options: ["The Animatrix", "The Matrix Reloaded", "The Matrix Revolutions", "The Matrix"],
        correct: "The Matrix"
    },
    {
        plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        options: ["The Godfather", "Casino", "Goodfellas", "Scarface"],
        correct: "Goodfellas"
    },
    {
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        options: ["Gravity", "Arrival", "Interstellar", "2001: A Space Odyssey"],
        correct: "Interstellar"
    },
    {
        plot: "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
        options: ["The Lion King", "Madagascar", "Zootopia", "Finding Nemo"],
        correct: "The Lion King"
    },
    {
        plot: "A poor young woman falls in love with a wealthy man aboard an ill-fated ship that sinks after hitting an iceberg.",
        options: ["Titanic", "The Notebook", "Romeo + Juliet", "The Great Gatsby"],
        correct: "Titanic"
    },
    {
        plot: "A group of friends embark on a journey to destroy a powerful ring and save Middle-earth from the Dark Lord Sauron.",
        options: ["Harry Potter", "The Lord of the Rings: The Fellowship of the Ring", "The Hobbit", "Percy Jackson"],
        correct: "The Lord of the Rings: The Fellowship of the Ring"
    },
    {
        plot: "A young wizard attends a school of witchcraft and wizardry and discovers his destiny to defeat a dark lord.",
        options: ["Harry Potter and the Sorcerer's Stone", "The Hobbit", "The Chronicles of Narnia", "Fantastic Beasts"],
        correct: "Harry Potter and the Sorcerer's Stone"
    },
    {
        plot: "A cyborg is sent from the future to protect a young boy who is destined to lead the human resistance against machines.",
        options: ["Terminator 2: Judgment Day", "RoboCop", "I, Robot", "Blade Runner"],
        correct: "Terminator 2: Judgment Day"
    },
    {
        plot: "A man with short-term memory loss attempts to track down his wife's murderer.",
        options: ["Memento", "Inception", "Shutter Island", "The Prestige"],
        correct: "Memento"
    },
    {
        plot: "A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
        options: ["Arrival", "Contact", "Interstellar", "Gravity"],
        correct: "Arrival"
    },
    {
        plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        options: ["Ratatouille", "Rango", "Cloudy with a Chance of Meatballs", "Chef"],
        correct: "Ratatouille"
    },
    {
        plot: "A Brooklyn teenager becomes the Spider-Man of his reality and crosses paths with five counterparts from other dimensions.",
        options: ["Spider-Man: Into the Spider-Verse", "Spider-Man: Homecoming", "The Amazing Spider-Man", "Venom"],
        correct: "Spider-Man: Into the Spider-Verse"
    },
    {
        plot: "A young clownfish is captured and placed in a fish tank, and his father sets out on a journey to rescue him.",
        options: ["Finding Nemo", "Shark Tale", "The Little Mermaid", "Moana"],
        correct: "Finding Nemo"
    }
];

// Game State Variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 20; // seconds per question
let timerInterval;
let playerName = "Guest";
let historyData = [];
let isAnsweringBlocked = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const historyScreen = document.getElementById('history-screen');

const playerNameInput = document.getElementById('player-name');
const startGameBtn = document.getElementById('start-game-btn');
const viewHistoryBtnStart = document.getElementById('view-history-btn-start');

const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const answerOptionsDiv = document.getElementById('answer-options');

const finalScoreDisplay = document.getElementById('final-score');
const playerNameDisplay = document.getElementById('player-name-display');
const playAgainBtn = document.getElementById('play-again-btn');
const viewHistoryBtnEnd = document.getElementById('view-history-btn-end');

const historyList = document.getElementById('history-list');
const noHistoryMessage = document.getElementById('no-history-message');
const backToStartBtn = document.getElementById('back-to-start-btn');

const customModal = document.getElementById('custom-modal');
const modalMessage = document.getElementById('modal-message');
const modalConfirmBtn = document.getElementById('modal-confirm-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');

// Hide loading overlay (not needed for local)
document.getElementById('loading-overlay').classList.add('hidden');

// --- Game Functions ---

// Function to show custom modal
function showCustomModal(message, onConfirm, onCancel) {
    modalMessage.textContent = message;
    customModal.classList.remove('hidden');

    modalConfirmBtn.onclick = () => {
        customModal.classList.add('hidden');
        if (onConfirm) onConfirm();
    };

    modalCancelBtn.onclick = () => {
        customModal.classList.add('hidden');
        if (onCancel) onCancel();
    };
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    playerName = playerNameInput.value.trim();
    if (!playerName) {
        showCustomModal("Please enter your name to start the quiz.", null, null);
        return;
    }

    // Shuffle questions before starting
    shuffleArray(quizQuestions);

    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    endScreen.classList.add('hidden');
    historyScreen.classList.add('hidden');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        endGame();
        return;
    }

    isAnsweringBlocked = false; // Allow answering for new question
    const question = quizQuestions[currentQuestionIndex];
    questionText.textContent = question.plot;
    answerOptionsDiv.innerHTML = ''; // Clear previous options

    // Shuffle options to make it more dynamic
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((option, index) => {
        const inputId = `option-${index}`;
        const radioHtml = `
            <input type="radio" id="${inputId}" name="answer" value="${option}">
            <label for="${inputId}" class="block p-4 rounded-xl bg-gray-700 border border-gray-600 text-white cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out">
                ${option}
            </label>
        `;
        answerOptionsDiv.insertAdjacentHTML('beforeend', radioHtml);
    });

    // Add event listeners to the newly created radio buttons
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener('change', handleAnswerSelection);
    });

    // Reset timer for new question
    timeLeft = 20;
    timeDisplay.textContent = timeLeft;
    updateProgressBar();
    startTimer(); // Restart timer for the new question
}

function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        updateProgressBar();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleAnswerSelection(null, true); // Auto-submit if time runs out, no selection
        }
    }, 1000);
}

function updateProgressBar() {
    const progress = (timeLeft / 20) * 100;
    progressBar.style.width = `${progress}%`;
    if (progress < 25) {
        progressBar.style.backgroundColor = '#ef4444'; // Red if low time
    } else if (progress < 50) {
        progressBar.style.backgroundColor = '#f59e0b'; // Orange if medium time
    } else {
        progressBar.style.backgroundColor = '#38a169'; // Green if high time
    }
}

function handleAnswerSelection(event, timeUp = false) {
    if (isAnsweringBlocked) return; // Prevent multiple selections
    isAnsweringBlocked = true; // Block further selections

    clearInterval(timerInterval); // Stop the timer immediately

    const selectedOption = event ? event.target : null;
    const question = quizQuestions[currentQuestionIndex];

    // Disable all radio buttons after submission
    document.querySelectorAll('input[name="answer"]').forEach(radio => radio.disabled = true);

    if (selectedOption && selectedOption.value === question.correct) {
        score++;
        scoreDisplay.textContent = score;
        selectedOption.nextElementSibling.classList.add('answer-correct'); // Highlight correct
    } else {
        if (selectedOption) {
            selectedOption.nextElementSibling.classList.add('answer-incorrect'); // Highlight incorrect
        }
        // Always highlight the correct answer
        document.querySelectorAll('input[name="answer"]').forEach(radio => {
            if (radio.value === question.correct) {
                radio.nextElementSibling.classList.add('answer-correct');
            }
        });
    }

    // Wait for 1.5 seconds before moving to the next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 1500); // 1.5 second delay
}

function endGame() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = score;
    playerNameDisplay.textContent = playerName;
    saveGameHistory(playerName, score);
}

function playAgain() {
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    historyScreen.classList.add('hidden');
    playerNameInput.value = ''; // Clear player name for new game
}

// --- Local Storage History Functions ---

function saveGameHistory(name, finalScore) {
    const history = JSON.parse(localStorage.getItem('movie_quiz_history') || '[]');
    history.push({
        playerName: name,
        score: finalScore,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('movie_quiz_history', JSON.stringify(history));
}

function loadHistoryForPlayer(name) {
    const history = JSON.parse(localStorage.getItem('movie_quiz_history') || '[]');
    // Filter by player name (case-insensitive)
    return history.filter(entry => entry.playerName.toLowerCase() === name.toLowerCase());
}

function displayHistory() {
    const name = playerNameInput.value.trim() || playerName || "Guest";
    const playerHistory = loadHistoryForPlayer(name);

    historyList.innerHTML = ''; // Clear existing history
    if (playerHistory.length === 0) {
        noHistoryMessage.classList.remove('hidden');
    } else {
        noHistoryMessage.classList.add('hidden');
        // Sort by timestamp descending
        playerHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        playerHistory.forEach(entry => {
            const date = entry.timestamp ? new Date(entry.timestamp).toLocaleString() : 'N/A';
            const historyItem = `
                <div class="bg-gray-600 p-3 rounded-lg mb-2 flex justify-between items-center border border-gray-500">
                    <div>
                        <p class="font-semibold text-lg">${entry.playerName} - Score: <span class="text-green-300">${entry.score}</span></p>
                        <p class="text-sm text-gray-300">Played on: ${date}</p>
                    </div>
                </div>
            `;
            historyList.insertAdjacentHTML('beforeend', historyItem);
        });
    }
}

function viewHistory() {
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    historyScreen.classList.remove('hidden');
    displayHistory(); // Ensure history is displayed when screen is shown
}

// --- Event Listeners ---
startGameBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', playAgain);
viewHistoryBtnStart.addEventListener('click', viewHistory);
viewHistoryBtnEnd.addEventListener('click', viewHistory);
backToStartBtn.addEventListener('click', playAgain); // Back to start also acts as play again