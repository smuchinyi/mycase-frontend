import React from 'react'
import { LandingSection } from '../components/landing'
import { MobileLandingSection } from '../components/mobile_landing'
import { MediumLandingSection } from '../components/medium_landing';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';





export const Home = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches_medium = useMediaQuery(theme.breakpoints.up('sm'))
    const matches_large = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            {
                matches ? <MobileLandingSection /> : matches_medium && matches_large ? <MediumLandingSection /> : <LandingSection />
            }
        </>
    )
}
