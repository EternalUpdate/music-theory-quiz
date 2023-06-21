import React, { useState } from "react";
import {
    Heading,
    Text,
    Input,
    Button,
    VStack,
    Grid,
    Link,
} from "@chakra-ui/react";
import { Question } from "./questions/Question";
import { getChordGradesQuestion } from "./questions/ChordGradesQuestions";
import KeyChoices from "./components/KeyChoices";
import ModeChoices from "./components/ModeChoices";

// TODO: add a timer
// TODO: add more questions (e.g. scales, chord progressions, spelling triads, intervals, etc.)

function App() {
    const [question, setQuestion] = useState<Question | null>(null);
    const [answer, setAnswer] = useState("");

    const [started, setStarted] = useState(false);
    const [score, setScore] = useState(0);

    const [selectedKeys, setSelectedKeys] = useState<string[]>(["C"]);
    const [selectedModes, setSelectedModes] = useState<string[]>(["ionian"]);

    // Controller functions

    const handleBegin = () => {
        setStarted(true);
        getNextQuestion();
    };

    const getNextQuestion = () => {
        setQuestion(getChordGradesQuestion(selectedKeys, selectedModes));
    };

    // Answer input functions

    const validateAnswer = (input: string) => {
        if (question?.answer.toLowerCase() === input.toLocaleLowerCase()) {
            setAnswer("");
            setScore(score + 1);
            getNextQuestion();
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setAnswer(input);
        validateAnswer(input);
    };

    // Settings functions

    const handleKeyChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            ``;
            setSelectedKeys([...selectedKeys, e.target.value]);
        } else {
            setSelectedKeys(
                selectedKeys.filter((key) => key !== e.target.value)
            );
        }
    };

    const handleModeChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <VStack pt="2rem" pb="2rem">
                <Text fontSize="md" fontWeight={600}>
                    Music Theory Quiz
                </Text>

                {/* Quiz */}
                <VStack
                    className="quiz-container"
                    spacing={5}
                    mt={4}
                    pt={28}
                    pb={32}
                    paddingX={4}
                    bgColor={"gray.800"}
                    width="100%"
                    textAlign={"center"}
                >
                    {started ? (
                        <Text fontSize="lg" color="gray.500">
                            Score: {score}
                        </Text>
                    ) : (
                        ""
                    )}
                    <Text fontSize="2xl" fontWeight={500}>
                        {question?.question}
                    </Text>
                    {started ? (
                        <Input
                            value={answer}
                            size="lg"
                            maxWidth={"8rem"}
                            textAlign={"center"}
                            border={"2px"}
                            borderColor={"teal.300"}
                            focusBorderColor={"teal.300"}
                            autoFocus
                            onChange={handleInputChange}
                        />
                    ) : (
                        ""
                    )}
                    {started ? (
                        ""
                    ) : (
                        <Button size="lg" variant="solid" onClick={handleBegin}>
                            Begin
                        </Button>
                    )}
                </VStack>

                {/* Settings */}
                <VStack mt={14} width={"100%"} className="settings-container">
                    <Heading size="lg" pb="10">
                        Settings
                    </Heading>
                    <Grid
                        templateColumns={{
                            sm: "repeat(1, 1fr)",
                            md: "repeat(2, 1fr)",
                        }}
                        gap={{ base: 20, md: 6 }}
                        width={{ sm: "100%", md: "60%" }}
                    >
                        <VStack gap={8} className="key-settings-container">
                            <Heading size="md">Key</Heading>
                            <Grid
                                templateColumns="repeat(3, 1fr)"
                                gap={6}
                                p={{ sm: "0rem", md: "1rem" }}
                            >
                                <KeyChoices onChange={handleKeyChoiceChange} />
                            </Grid>
                        </VStack>
                        <VStack gap={8} className="mode-settings-container">
                            <Heading size="md">Mode</Heading>
                            <Grid
                                templateColumns={{
                                    base: "repeat(2, 1fr)",
                                    md: "repeat(1, 1fr)",
                                }}
                                gap={6}
                                p={{ sm: "0rem", md: "1rem" }}
                            >
                                <ModeChoices
                                    onChange={handleModeChoiceChange}
                                />
                            </Grid>
                        </VStack>
                    </Grid>
                </VStack>

                {/* Footer */}
                <Text fontSize="sm" mt={20}>
                    Brought to you by{" "}
                    <Link
                        href="https://github.com/EternalUpdate/music-theory-quiz"
                        target="_blank"
                        fontWeight={600}
                    >
                        EternalUpdate
                    </Link>
                </Text>
            </VStack>
        </>
    );
}

export default App;
