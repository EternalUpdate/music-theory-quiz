export interface Question {
    question: string;
    answer: string;
    information?: string;
    hint?: string;
}

export function equalQuestions(a: Question, b: Question): boolean {
    return a.question === b.question && a.answer === b.answer;
}