import { Heading, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Music Theory Quiz App</title>
            </Helmet>
            <VStack marginY={12} paddingX={10}>
                <Heading size="lg" marginY={16} textAlign={"center"}>
                    What do you want to be tested on?
                </Heading>
                <VStack className="all-categories-container">
                    <Heading size="md">Chord Degrees</Heading>
                    <Link as={RouterLink} to="/chordGradeQuiz">
                        What is the IV chord in D dorian?
                    </Link>
                </VStack>
            </VStack>
        </>
    );
};

export default Home;
