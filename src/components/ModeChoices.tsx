import { Checkbox } from "@chakra-ui/react";
import { Mode } from "tonal";

interface modeChoicesProps {
    choices?: string[];
    onChange: () => void;
}

const ModeChoices = ({ choices, onChange }: modeChoicesProps) => {
    if (!choices) {
        choices = Mode.names();
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

export default ModeChoices;
