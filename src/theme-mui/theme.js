import { createTheme } from '@mui/material'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 479.58,
            md: 767.50,
            lg: 1000,
            xl: 1440
        },
    },
    palette: {
        newItem: {
            main: "#FDDB16",
        },
    },
    typography: {
        fontFamily: [
            '"Montserrat", "sans-serif"'
        ]
    }
});

export default theme