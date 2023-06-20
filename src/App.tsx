import { useEffect, useState } from "react";
import { Heading, Text, Input, Button, VStack, Grid } from "@chakra-ui/react";
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
    };

    const handleKeyChoiceChange = (e: any) => {
        if (e.target.checked) {
            ``;
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

    useEffect(() => {
        // validate answer when the input changes
        if (question?.answer.toLowerCase() === answer.toLocaleLowerCase()) {
            setAnswer("");
            setScore(score + 1);
            getNextQuestion();
        }
    }, [answer]);

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
                <VStack mt={20} width={"100%"}>
                    <Heading size="lg" color={"gray.800"} pb="10">
                        Settings
                    </Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6} width="60%">
                        <VStack>
                            <Heading size="md" color={"gray.800"}>
                                Key
                            </Heading>
                            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                                <KeyChoices onChange={handleKeyChoiceChange} />
                            </Grid>
                        </VStack>
                        <VStack>
                            <Heading size="md" color={"gray.800"}>
                                Mode
                            </Heading>
                            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                                <ModeChoices
                                    onChange={handleModeChoiceChange}
                                />
                            </Grid>
                        </VStack>
                    </Grid>
                </VStack>
            </VStack>
        </>
    );
}

export default App;
