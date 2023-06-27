import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import ChordGradeQuiz from "./pages/ChordGradeQuiz.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route
                            path="chordGradeQuiz"
                            element={<ChordGradeQuiz />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
