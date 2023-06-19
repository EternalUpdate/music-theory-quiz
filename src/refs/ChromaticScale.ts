export class ChromaticScale {
    static sharp: string[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A','A#', 'B'];
    static flat: string[] = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A','Bb', 'B'];
    static combined: string[] = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A','A#', 'Bb', 'B'];
}

export function getRandomNote(notes: string[] = ChromaticScale.combined): string {
    const randomIndex = Math.floor(Math.random() * notes.length);

    return notes[randomIndex];
}