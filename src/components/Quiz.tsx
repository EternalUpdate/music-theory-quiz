import { useEffect, useState, useRef } from "react";
import { Text, Input, Button, VStack } from "@chakra-ui/react";
import { Question, equalQuestions } from "../questions/Question";
import { Settings } from "../settings/Settings";
import AccidentalsButtons from "./AccidentalsButtons";

// TODO: add a timer
// TODO: add more questions (e.g. scales, chord progressions, spelling triads, intervals, etc.)

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

    const inputRef = useRef<HTMLInputElement | null>(null);

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

    const handleAccidentalsButtonsClick = (accidental: string) => {
        const input = answer + accidental;
        focusInput();
        setAnswer(input);
        validateAnswer(input);
    };

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
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
            <VStack
                className="quiz-container"
                spacing={5}
                mt={4}
                pt={28}
                pb={20}
                paddingX={4}
                bgColor={"gray.800"}
                width="100%"
                textAlign={"center"}
            >
                {started ? (
                    <VStack className={"quiz-elements"} spacing={10}>
                        <Text fontSize="lg" color="gray.500">
                            Score: {score}
                        </Text>
                        <VStack
                            className={"question-container"}
                            spacing={6}
                            mb={4}
                        >
                            <Text fontSize="2xl" fontWeight={500}>
                                {question?.question}
                            </Text>
                            <Input
                                ref={inputRef}
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
                        </VStack>
                        <AccidentalsButtons
                            onButtonClick={handleAccidentalsButtonsClick}
                        />
                    </VStack>
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
