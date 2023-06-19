import { useState } from "react";
import "./App.css";
import { Heading, Text, Input, Button, VStack } from "@chakra-ui/react";
import {
    ChordGradesQuestion,
    getChordGradesQuestion,
} from "./questions/ChordGradesQuestions";

function App() {
    const [question, setQuestion] = useState<ChordGradesQuestion | null>(null);
    const [answer, setAnswer] = useState("");
    const [started, setStarted] = useState(false);
    const [score, setScore] = useState(0);

    const handleBegin = () => {
        setStarted(true);
        getNextQuestion();
    };

    const getNextQuestion = () => {
        setQuestion(getChordGradesQuestion());
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
        validateAnswer();
    };

    const validateAnswer = () => {
        if (question?.answer.toLowerCase() === answer.toLocaleLowerCase()) {
            setAnswer("");
            setScore(score + 1);
            getNextQuestion();
        }
    };

    return (
        <>
            <Heading>Music Theory Quiz</Heading>
            <VStack spacing={8} mt={10}>
                {started ? <Text fontSize="lg">Score: {score}</Text> : ""}
                <Text fontSize="2xl">{question?.question}</Text>
                {started ? (
                    <Input
                        value={answer}
                        size="lg"
                        variant="flushed"
                        onChange={handleInputChange}
                    />
                ) : (
                    ""
                )}
                {started ? "" : <Button onClick={handleBegin}>Begin</Button>}
            </VStack>
        </>
    );
}

export default App;
