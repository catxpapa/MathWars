import { Thoth } from './Thoth';

/**
 * RandomNumberThoth class for generating random number questions.
 * This class extends the Thoth class.
 */
export class RandomNumberThoth extends Thoth {
  private question: { questionText: string, correctAnswer: number } | null = null;



  /**
   * Method to generate a random number question.
   * @param range - The range for generating the question, including min and max.
   * @returns An object representing the question.
   */
  generateQuestion(range: [number, number]): { questionText: string; correctAnswer: number } {
    const [min, max] = range;
    const correctAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
    this.question = {
      questionText: `What is the number? ${correctAnswer}`,
      correctAnswer
    };
    return this.question;
  }

  /**
   * Method to validate the answer.
   * @param answer - The answer provided by the user.
   * @returns A boolean indicating whether the answer is correct.
   */
  validateAnswer({ answer }: { answer: number }): boolean {
    if (!this.question) {
      throw new Error("Question not generated yet.");
    }
    return this.question.correctAnswer === answer;
  }
}
