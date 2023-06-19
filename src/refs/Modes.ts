import { Mode } from "tonal";

const modes = Mode.names();

export function getRandomMode(modeChoices: string[] = modes): string {
    const index = Math.floor(Math.random() * modeChoices.length);
    
    return modeChoices[index];
}