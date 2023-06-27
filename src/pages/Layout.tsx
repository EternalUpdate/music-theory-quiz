import Header from "../components/Header";
import Footer from "../components/Footer";
import { VStack, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <VStack
                className="layout-container"
                marginY="12"
                justifyContent={"space-between"}
            >
                <Header />
                <Box className="children-container" width="100%">
                    {children}
                </Box>
                <Footer />
            </VStack>
        </>
    );
};

export default Layout;
