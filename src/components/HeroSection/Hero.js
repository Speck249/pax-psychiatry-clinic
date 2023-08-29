import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroParagraph
} from './HeroStyling';
import { Button } from '../ButtonStyling';


const Hero = () => {
    return (
    <>
     <HeroContainer>
       <HeroContent>
         <HeroContentText>
             <HeroTitle>Your Health Journey Starts Here</HeroTitle>
          <HeroParagraph>
            Book your first free appointment & prioritize your
            Mental Health at PAX Private Psychiatry & Therapy Clinic.
          </HeroParagraph>
            <Button to='/services'>Learn More</Button>
         </HeroContentText>
        </HeroContent>
     </HeroContainer>
    </>
  );
};

export default Hero;
