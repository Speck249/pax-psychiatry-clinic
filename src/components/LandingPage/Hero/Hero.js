import {
  HeroContainer,
  HeroContentContainer,
  HeroTitle,
  HeroDescription,
} from './HeroStyling';


const Hero = () => {
  return (
    <HeroContainer>
      <HeroContentContainer>
        <HeroTitle>Your Health Journey Starts Here</HeroTitle>
        <HeroDescription>
          Book Your First Free Appointment & Prioritize Your
          Mental Health <br /> at PAX Private Psychiatry & Therapy Clinic.
        </HeroDescription>
      </HeroContentContainer>
    </HeroContainer>
  )
};

export default Hero;