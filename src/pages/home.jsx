import React from 'react'
import { LandingSection } from '../components/landing'
import { MobileLandingSection } from '../components/mobile_landing'
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';





export const Home = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            {
                matches ? <MobileLandingSection /> : <LandingSection />
            }
        </>
    )
}
