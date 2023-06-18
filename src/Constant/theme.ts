import { NativeBaseProvider, extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
        // Add new color
        primary: {},
        // Redefining only one shade, rest of the color will remain same.
        amber: {
            400: '#d97706',
        },
    },
    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
    },
    components: {
        Stack: {
            baseStyle: ({ colorMode }: { colorMode: string }) => {
                return {
                    backgroundColor: colorMode === 'dark' ? '#263238' : '#ffffff',
                }
            },
        }
    }
});