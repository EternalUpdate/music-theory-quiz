import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "gray.900",
                color: "gray.300",
            },
        }),
    },
    components: {
        Button: {
            variants: {
                solid: () => ({
                    bg: "teal.300",
                    color: "gray.900",
                    _hover: {
                        bg: "teal.200"
                    },
                }),
            },
        },
        Checkbox: {
            baseStyle: {
                control: {
                    borderColor: "gray.400",
                    _checked: {
                      bg: "teal.300",
                    }
                  }
                },
            defaultProps: {
                colorScheme: "teal",
            }
        },
        Link: {
            baseStyle: {
                color: "teal.300",
                _hover: {
                    color: "teal.200",
                }
            }
        }
    },
})

export default theme;