import { extendTheme } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { DefaultTheme } from '@react-navigation/native';


export const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
};

export const LinearGradientConfig = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
};

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
                    background: 'linear-gradient(180deg, #000000 0%, #0B264F 97.92%)',
                }
            },
        }
    }
});