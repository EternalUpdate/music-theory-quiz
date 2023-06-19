import { Key } from "tonal";
import { ChromaticScale, getRandomNote } from "../refs/ChromaticScale";

const grades = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

export type ChordGradesQuestion = {
    question: string;
    answer: string;
}

/**
 * Returns a question asking for the chord grade of a random key.
 * 
 * @returns {ChordGradesQuestion} A question asking for the chord grade of a random key.
 */
export function getChordGradesQuestion(keys: string[] = ChromaticScale.combined): ChordGradesQuestion {
    const note = getRandomNote(keys);
    let quality: string;
    let answer = "";
    const gradeIndex = Math.floor(Math.random() * grades.length);

    if (Math.random() > 0.5) {
        const key = Key.minorKey(note);
        answer = key.natural.triads[gradeIndex];
        quality = "minor";
    } else {
        const key = Key.majorKey(note);
        answer = key.triads[gradeIndex];
        quality = "major";
    }

    return {
        question: `What is the ${grades[gradeIndex]} chord in the key of ${note} ${quality}?`,
        answer: answer
    }
}