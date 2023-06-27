import { useEffect, useState } from "react";
import { Text, Input, Button, VStack } from "@chakra-ui/react";
import { Question, equalQuestions } from "../questions/Question";
import { Settings } from "../settings/Settings";

// TODO: add a timer
// TODO: add more questions (e.g. scales, chord progressions, spelling triads, intervals, etc.)

// TODO: add accidentals buttons for mobile

type QuizProps<T extends Settings> = {
    getQuestion: (settings: T) => Question;
    settings: T;
};

const Quiz = <T extends Settings>({ getQuestion, settings }: QuizProps<T>) => {
    const [question, setQuestion] = useState<Question | null>(null);
    const [answer, setAnswer] = useState<string>("");

    const [started, setStarted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    // Controller functions

    const handleBegin = () => {
        setStarted(true);
        getNextQuestion();
    };

    const getNextQuestion = () => {
        let nextQuestion: Question = getQuestion(settings);

        while (question && equalQuestions(question, nextQuestion)) {
            nextQuestion = getQuestion(settings);
        }

        setQuestion(nextQuestion);
        setAnswer("");
    };

    // Answer input functions

    const validateAnswer = (input: string) => {
        if (question?.answer.toLowerCase() === input.toLocaleLowerCase()) {
            setIsCorrect(true);
            setScore(score + 1);
        } else {
            setIsCorrect(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setAnswer(input);
        validateAnswer(input);
    };

    // Add slight delay before next question
    useEffect(() => {
        console.log(isCorrect);

        if (isCorrect !== null) {
            setTimeout(() => {
                if (isCorrect) {
                    getNextQuestion();
                }
                setIsCorrect(null);
            }, 500);
        }
    }, [isCorrect]);

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
                        borderColor={"teal.500"}
                        focusBorderColor={
                            isCorrect === true
                                ? "green.300"
                                : isCorrect === false
                                ? "red.300"
                                : "teal.500"
                        }
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
