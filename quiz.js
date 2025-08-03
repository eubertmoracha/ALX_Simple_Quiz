function checkAnswer() {
  const correctAnswer = "4";

  // Retrieve selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Reference to feedback element
  const feedback = document.getElementById("feedback");

  if (selectedOption) {
    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "#28a745"; // Green for success
    } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "#dc3545"; // Red for error
    }
  } else {
    feedback.textContent = "Please select an answer before submitting.";
    feedback.style.color = "#dc3545";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
