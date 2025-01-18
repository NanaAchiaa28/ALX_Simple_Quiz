function checkAnswer() {
    // The correct answer for the quiz question
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Feedback element for displaying the result
    const feedbackElement = document.getElementById("feedback");

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Make feedback visually positive
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Make feedback visually negative
        }
    } else {
        // Inform the user to select an option if none is selected
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
    }
}

// Add an event listener to the submit button to invoke the checkAnswer function
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
