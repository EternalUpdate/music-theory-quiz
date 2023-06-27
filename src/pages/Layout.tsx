import Header from "../components/Header";
import Footer from "../components/Footer";
import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <VStack marginY="12" marginX="10" justifyContent={"space-between"}>
                <Header />
                <main>{children}</main>
                <Footer />
            </VStack>
        </>
    );
};

export default Layout;
