import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer,HeroBg, VideoBg,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState (false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>
                <HeroH1>Save the Trees</HeroH1>
                <HeroP>
                Plant a tree, so that the next generation can get air for free.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80} 
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
