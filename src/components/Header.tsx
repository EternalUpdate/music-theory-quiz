import { Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link as={RouterLink} to="/" color="gray.300">
                <Heading size="md">Music Theory Quiz App</Heading>
            </Link>
        </>
    );
};

export default Header;
