import { Checkbox } from "@chakra-ui/react";
import { Mode } from "tonal";

interface modeChoicesProps {
    choices?: string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
                        value={choice}
                        size="lg"
                        onChange={onChange}
                        defaultChecked={choice === "ionian" ? true : false}
                    >
                        {choice}
                    </Checkbox>
                );
            })}
        </>
    );
};

export default ModeChoices;
