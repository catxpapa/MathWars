/**
 * Thoth class for generating questions and validating answers.
 * This is a base class that can be extended for different types of question generators.
 */
export class Thoth {
  category: string;
  library: string;
  difficulty: number;
  points: number;
  penalty: number;
  protected correctAnswer: object;

  /**
   * Constructor to initialize the Thoth class.
   * @param category - The knowledge category of the question.
   * @param library - The knowledge library the question belongs to.
   * @param difficulty - The difficulty level of the question (0-9).
   * @param points - The points awarded for a correct answer (default is 0).
   * @param penalty - The points deducted for an incorrect answer (default is 0).
   */
  constructor(category: string, library: string, difficulty: number, points: number = 0, penalty: number = 0) {
    this.category = category;
    this.library = library;
    this.difficulty = difficulty;
    this.points = points;
    this.penalty = penalty;
    this.correctAnswer = new Object(null);
  }

  /**
   * Method to generate a question.
   * This method should be overridden by subclasses to provide specific question logic.
   * @param args - Additional arguments for generating the question.
   * @returns An object representing the question.
   */
  // Subclasses should implement this method to generate a question.
  // generateQuestion(args: { [key: string]: any }): { questionText: string; options?: string[]; correctOption?: number; correctAnswer?: number };

  /**
   * Method to validate the answer.
   * @param answer - The answer to validate.
   * @returns True if the answer is correct, false otherwise.
   */
  validateAnswer(answer: object): boolean {
    console.log('Answer:', answer,JSON.stringify(answer) );
    console.log('Correct Answer:', this.correctAnswer,JSON.stringify(this.correctAnswer)); 

    return JSON.stringify(answer) === JSON.stringify(this.correctAnswer);
  }
}
