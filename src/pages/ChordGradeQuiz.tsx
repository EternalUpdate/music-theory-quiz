import { useState } from "react";
import { Heading, VStack, Grid } from "@chakra-ui/react";
import { getChordGradesQuestion } from "../questions/ChordGradesQuestions";
import KeyChoices from "../components/KeyChoices";
import ModeChoices from "../components/ModeChoices";
import Quiz from "../components/Quiz";
import { ChordGradesSettings } from "../settings/ChordGradesSettings";
import { Helmet } from "react-helmet";

const ChordGradeQuiz = () => {
    const [settings, setSettings] = useState<ChordGradesSettings>(
        new ChordGradesSettings()
    );

    // Settings functions

    const handleKeyChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let updatedKeys = settings.keys;

        if (e.target.checked) {
            updatedKeys = [...updatedKeys, e.target.value];
        } else {
            updatedKeys = updatedKeys.filter((key) => key !== e.target.value);
        }

        const updatedSettings = new ChordGradesSettings(
            updatedKeys,
            settings.modes
        );
        setSettings(updatedSettings);
    };

    const handleModeChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let updatedModes = settings.modes;
        if (e.target.checked) {
            updatedModes = [...updatedModes, e.target.value];
        } else {
            updatedModes = updatedModes.filter(
                (mode) => mode !== e.target.value
            );
        }

        const updatedSettings = new ChordGradesSettings(
            settings.keys,
            updatedModes
        );
        setSettings(updatedSettings);
    };

    return (
        <>
            <Helmet>
                <title>Chord Grade Quiz - Music Theory Quiz App</title>
            </Helmet>
            <VStack pt="2rem" pb="2rem">
                <Quiz
                    getQuestion={getChordGradesQuestion}
                    settings={settings}
                />

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
            </VStack>
        </>
    );
};

export default ChordGradeQuiz;
