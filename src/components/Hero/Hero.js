import { Button } from '../ButtonStyling';
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroParagraph
} from './HeroStyling';

/* Create Banner section that serves as the primary part of the landing page along with topbar. */
const Hero = () => {
  return (
    <>
     <HeroContainer>
       <HeroContent>
         <HeroContentText>
            <HeroTitle>Your Health Journey Starts Here</HeroTitle>
            <HeroParagraph>
            Book Your First Free Appointment & Prioritize Your
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
