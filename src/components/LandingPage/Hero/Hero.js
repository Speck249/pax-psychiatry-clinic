import {
  HeroSection,
  HeroContent,
  SectionTitle,
  HeroHighlight,
} from './HeroStyling';


const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <SectionTitle>Your Health Journey Starts Here</SectionTitle>
        <HeroHighlight>
          Book Your First Free Appointment & Prioritize Your Mental Health <br /> at PAX Private Psychiatry & Therapy Clinic.
        </HeroHighlight>
      </HeroContent>
    </HeroSection>
  )
};

export default Hero;