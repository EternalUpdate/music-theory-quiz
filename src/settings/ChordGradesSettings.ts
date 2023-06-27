import { Settings } from './Settings';

export class ChordGradesSettings extends Settings {
    keys: string[];
    modes: string[];

    constructor(keys: string[] = ['C'], modes: string[] = ['major']) {
        super();
        this.keys = keys;
        this.modes = modes;
    }
}