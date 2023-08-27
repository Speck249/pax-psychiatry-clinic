import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubtitle,
  HeroP
} from './HeroStyling';
import { Button } from '../ButtonStyling';

/* Webiste Banner Section. */
const Hero = () => {
    return (
    <>
     <HeroContainer>
       <HeroContent>
         <HeroContentText>
           <HeroTitle>
             <HeroTitleText>Welcome to PAX</HeroTitleText>
          </HeroTitle>
           <HeroSubtitle>Start Your Health Journey Today.</HeroSubtitle>
          <HeroP>
            Book your first free appointment & prioritize your
            Mental Health at PAX Private Psychiatry & Therapy Clinic.
          </HeroP>
            <Button to='/services'>Learn More</Button>
         </HeroContentText>
        </HeroContent>
     </HeroContainer>
    </>
  );
};

export default Hero;
