import { useState } from "react";
import { Heading, Text, Input, Button, VStack, HStack } from "@chakra-ui/react";
import {
    ChordGradesQuestion,
    getChordGradesQuestion,
} from "./questions/ChordGradesQuestions";
import KeyChoices from "./components/KeyChoices";
import ModeChoices from "./components/ModeChoices";

function App() {
    const [question, setQuestion] = useState<ChordGradesQuestion | null>(null);
    const [answer, setAnswer] = useState("");

    const [started, setStarted] = useState(false);
    const [score, setScore] = useState(0);

    const [selectedKeys, setSelectedKeys] = useState<string[]>(["C"]);
    const [selectedModes, setSelectedModes] = useState<string[]>(["ionian"]);

    const handleBegin = () => {
        setStarted(true);
        getNextQuestion();
    };

    const getNextQuestion = () => {
        setQuestion(getChordGradesQuestion(selectedKeys, selectedModes));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
        validateAnswer();
    };

    const validateAnswer = () => {
        if (question?.answer.toLowerCase() === answer.toLocaleLowerCase()) {
            setAnswer("");
            setScore(score + 1);
            getNextQuestion();
        }
    };

    const handleKeyChoiceChange = (e: any) => {
        if (e.target.checked) {
            setSelectedKeys([...selectedKeys, e.target.value]);
        } else {
            setSelectedKeys(
                selectedKeys.filter((key) => key !== e.target.value)
            );
        }
    };

    const handleModeChoiceChange = (e: any) => {
        if (e.target.checked) {
            setSelectedModes([...selectedModes, e.target.value]);
        } else {
            setSelectedModes(
                selectedModes.filter((mode) => mode !== e.target.value)
            );
        }
    };

    return (
        <>
            <VStack p="2rem">
                <Text fontSize="md" fontWeight={500} color={"gray.800"}>
                    Music Theory Quiz
                </Text>
                <VStack
                    spacing={8}
                    mt={10}
                    p={20}
                    border={started ? "8px" : "0px"}
                    borderColor={"teal.300"}
                    borderRadius={"100px"}
                    maxWidth={"70%"}
                >
                    {started ? (
                        <Text fontSize="lg" color={"gray.500"}>
                            Score: {score}
                        </Text>
                    ) : (
                        ""
                    )}
                    <Text fontSize="2xl" fontWeight={500} color={"gray.800"}>
                        {question?.question}
                    </Text>
                    {started ? (
                        <Input
                            value={answer}
                            size="lg"
                            maxWidth={"5rem"}
                            textAlign={"center"}
                            border={"2px"}
                            borderColor={"gray.300"}
                            focusBorderColor={"gray.300"}
                            autoFocus
                            onChange={handleInputChange}
                        />
                    ) : (
                        ""
                    )}
                    {started ? (
                        ""
                    ) : (
                        <Button onClick={handleBegin}>Begin</Button>
                    )}
                </VStack>
                <VStack mt={20}>
                    <Heading size="lg" color={"gray.800"}>
                        Settings
                    </Heading>
                    <VStack>
                        <Heading size="md" color={"gray.800"}>
                            Key
                        </Heading>
                        <HStack maxWidth={"50%"} wrap={"wrap"} spacing={5}>
                            <KeyChoices onChange={handleKeyChoiceChange} />
                        </HStack>
                    </VStack>
                    <VStack>
                        <Heading size="md" color={"gray.800"}>
                            Mode
                        </Heading>
                        <HStack maxWidth={"50%"} wrap={"wrap"} spacing={5}>
                            <ModeChoices onChange={handleModeChoiceChange} />
                        </HStack>
                    </VStack>
                </VStack>
            </VStack>
        </>
    );
}

export default App;
