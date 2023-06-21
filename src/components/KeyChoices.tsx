import { Checkbox } from "@chakra-ui/react";
import { ChromaticScale } from "../refs/ChromaticScale";

interface keyChoicesProps {
    choices?: string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const KeyChoices = ({ choices, onChange }: keyChoicesProps) => {
    if (!choices) {
        choices = ChromaticScale.combined;
    }

    return (
        <>
            {choices.map((choice: string) => {
                return (
                    <Checkbox
                        key={choice}
                        value={choice}
                        size="lg"
                        onChange={onChange}
                        defaultChecked={choice === "C" ? true : false}
                    >
                        {choice}
                    </Checkbox>
                );
            })}
        </>
    );
};

export default KeyChoices;
