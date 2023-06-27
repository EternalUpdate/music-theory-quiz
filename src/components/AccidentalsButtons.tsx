import { Button, HStack } from "@chakra-ui/react";

type AccidentalsButtonsProps = {
    onButtonClick: (accidental: string) => void;
};

const AccidentalsButtons = ({ onButtonClick }: AccidentalsButtonsProps) => {
    return (
        <>
            <HStack>
                <Button onClick={() => onButtonClick("#")}>#</Button>
                <Button onClick={() => onButtonClick("b")}>b</Button>
            </HStack>
        </>
    );
};

export default AccidentalsButtons;
