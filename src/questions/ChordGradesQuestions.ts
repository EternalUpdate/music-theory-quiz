import { Mode } from "tonal";
import { ChromaticScale, getRandomNote } from "../refs/ChromaticScale";
import { getRandomMode } from "../refs/Modes";
import { Question } from "./Question";

const grades = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

export function getChordGradesQuestion(keys: string[] = ChromaticScale.combined, modes: string[] = Mode.names()): Question {
    const note = getRandomNote(keys);
    const randomMode = getRandomMode(modes)

    let mode = "";
    let answer = "";
    const gradeIndex = Math.floor(Math.random() * grades.length);

    switch (randomMode) {
        case "major":
        case "ionian":
            mode = "ionian";
            answer = Mode.triads("ionian", note)[gradeIndex];
            break;
        case "dorian":
            mode = "dorian";
            answer = Mode.triads("dorian", note)[gradeIndex];
            break;
        case "phrygian":
            mode = "phrygian";
            answer = Mode.triads("phrygian", note)[gradeIndex];
            break;
        case "lydian":
            mode = "lydian";
            answer = Mode.triads("lydian", note)[gradeIndex];
            break;
        case "mixolydian":
            mode = "mixolydian";
            answer = Mode.triads("mixolydian", note)[gradeIndex];
            break;
        case "minor":
        case "aeolian":
            mode = "aeolian";
            answer = Mode.triads("aeolian", note)[gradeIndex];
            break;
        case "locrian":
            mode = "locrian";
            answer = Mode.triads("locrian", note)[gradeIndex];
            break;
    }

    return {
        question: `What is the ${grades[gradeIndex]} chord in ${note} ${mode}?`,
        answer: answer
    }
}