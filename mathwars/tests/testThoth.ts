import { Thoth } from '../src/app/Thoth';

// Create an instance of the Thoth class
const thoth = new Thoth('Math', 'Basic Arithmetic', 1, 10, 5);

// Generate a question
const question = thoth.generateQuestion();
console.log('Generated Question:', question);

// Test with a correct answer
const correctAnswer = 0; // Assuming the correct answer is the first option
const isCorrect = thoth.validateAnswer(correctAnswer);
console.log(`Answering ${correctAnswer}:`, isCorrect ? 'Correct' : 'Incorrect');

// Test with an incorrect answer
const incorrectAnswer = 1; // Assuming the incorrect answer is the second option
const isIncorrect = thoth.validateAnswer(incorrectAnswer);
console.log(`Answering ${incorrectAnswer}:`, isIncorrect ? 'Correct' : 'Incorrect');