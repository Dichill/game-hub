import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    disableTransitionOnChange: false
}

const theme = extendTheme({ config,
    colors: {
        gray: 
        {
            50: '#f2f2f2',
            100: '#d9d9d9',
            200: '#bfbfbf',
            300: '#a6a6a6',
            400: '#8c8c8c',
            500: '#737373',
            600: '#3b3b3b',
            700: '#202020',
            800: '#151515',
            900: '#151515',
        }
    }
})
export default theme;