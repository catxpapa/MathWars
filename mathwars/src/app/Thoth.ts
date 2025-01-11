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
  private correctAnswer: number | null; // Specify a more specific type

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
    this.correctAnswer = null;
  }

  /**
   * Method to generate a question.
   * This method should be overridden by subclasses to provide specific question logic.
   * @returns An object representing the question.
   */
  generateQuestion(): { questionText: string; options: string[]; correctOption: number } {
    const question = {
      questionText: "Sample question?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctOption: 0
    };
    this.correctAnswer = question.correctOption; // Set the correct answer
    return question;
  }

  /**
   * Method to validate the answer.
   * @param answer - The answer to validate.
   * @returns True if the answer is correct, false otherwise.
   */
  validateAnswer(answer: number): boolean {
    return this.correctAnswer === answer;
  }
}