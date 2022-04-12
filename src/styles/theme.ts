import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellow: {
            '500': '#FFBA08',
            "300": "#rgba(255, 186, 8, 0.5)"
        },
        white: {
            '50': '#FFFFFF',
            '600': '#F5F8FA',
            '800': '#DADADA',
            '900': '#47585B',

        },

        gray: {
            "700": "#47585B",
            "500": "#999999",
            "400": "rgba(153,153,153, 0.5)",
            "300": "#DADADA",
            "100": "#F5F8FA",
        }
    },

    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.700'
            }
        }
    }

})


