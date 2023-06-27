import { Link, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <>
            <Text fontSize="sm" mt={20}>
                Brought to you by{" "}
                <Link
                    href="https://github.com/EternalUpdate/music-theory-quiz"
                    target="_blank"
                    fontWeight={600}
                >
                    EternalUpdate
                </Link>
            </Text>
        </>
    );
};

export default Footer;
