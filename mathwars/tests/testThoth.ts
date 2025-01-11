console.log('\n***** 0.Test Thoth:');

// filepath: /Users/aeros/mathwars/mathwars/tests/testThoth.ts
import { Thoth } from '../src/app/Thoth';
// Create an instance of the Thoth class
const thoth = new Thoth('Math', 'Basic Arithmetic', 1, 10, 5);

// Test with a correct answer
console.log(`0.1.Answering True:`, thoth.validateAnswer(new Object(null)) ? 'Correct' : 'Incorrect');

// Test with an incorrect answer
console.log(`0.2.Answering False:`, thoth.validateAnswer(new Object(true)) ? 'Correct' : 'Incorrect');



console.log('\n***** 1. Test RandomNumberThoth:');
import { RandomNumberThoth } from '../src/app/RandomNumberThoth';

// Create an instance of the RandomNumberThoth class
const randomNumberThoth = new RandomNumberThoth('Math', 'Random Numbers', 1, 10, 5);

// Generate a question with a range [0-100]
const question = randomNumberThoth.generateQuestion([0, 100]);
console.log('1.1.Generated Question:', question);

// Test with the correct answer
const correctAnswer = question.correctAnswer;
const isCorrect = randomNumberThoth.validateAnswer({ answer: correctAnswer });
console.log(`1.2.Answering ${correctAnswer}:`, isCorrect ? 'Correct' : 'Incorrect');

// Test with an incorrect answer
const incorrectAnswer = correctAnswer + 1; // Assuming the incorrect answer is one more than the correct answer
const isIncorrect = randomNumberThoth.validateAnswer({ answer: incorrectAnswer });
console.log(`1.3.Answering ${incorrectAnswer}:`, isIncorrect ? 'Correct' : 'Incorrect');
