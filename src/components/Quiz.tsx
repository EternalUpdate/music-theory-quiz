import { useState } from "react";
import { Text, Input, Button, VStack } from "@chakra-ui/react";
import { Question } from "../questions/Question";
import { Settings } from "../settings/Settings";

// TODO: add a timer
// TODO: add more questions (e.g. scales, chord progressions, spelling triads, intervals, etc.)

type QuizProps<T extends Settings> = {
    getQuestion: (settings: T) => Question;
    settings: T;
};

const Quiz = <T extends Settings>({ getQuestion, settings }: QuizProps<T>) => {
    const [question, setQuestion] = useState<Question | null>(null);
    const [answer, setAnswer] = useState("");

    const [started, setStarted] = useState(false);
    const [score, setScore] = useState(0);

    // Controller functions

    const handleBegin = () => {
        setStarted(true);
        getNextQuestion();
    };

    const getNextQuestion = () => {
        setQuestion(getQuestion(settings));
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

    return (
        <>
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
        </>
    );
};

export default Quiz;
