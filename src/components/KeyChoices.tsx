import { Checkbox } from "@chakra-ui/react";
import { ChromaticScale } from "../refs/ChromaticScale";

interface keyChoicesProps {
    choices?: string[];
    onChange: () => void;
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
                        size="lg"
                        color={"gray.800"}
                        onChange={onChange}
                    >
                        {choice}
                    </Checkbox>
                );
            })}
        </>
    );
};

export default KeyChoices;
