import React from "react";
import { 
  MainContainer,
  ExpertiseSection,
  CompanyExpertise,
  ExpertiseHighlight,
  ExpertiseTitle,
  ExpertiseDescription
} from "./ExpertiseStyling";


const Expertise = () => {
    return (
      <MainContainer>
        <ExpertiseSection>
          <CompanyExpertise>
            <ExpertiseHighlight>Exceptional Services</ExpertiseHighlight>
            <ExpertiseTitle>Get the Quality Healthcare You Deserve.</ExpertiseTitle>
            <ExpertiseDescription>At PAX, we believe everyone deserves access to high-quality healthcare. That's why our team of medical professionals is committed to addressing
              your unique healthcare needs while offering flexible payment options. From preventive measures to specialized treatments, we are passionate about providing medical
              services that empower your best life. Discover the care you truly deserve with us.</ExpertiseDescription>
          </CompanyExpertise>
            
          <CompanyExpertise>
            <ExpertiseHighlight>Breaking Barriers</ExpertiseHighlight>
            <ExpertiseTitle>Cutting-Edge Therapy rooted in Evidence.</ExpertiseTitle>
            <ExpertiseDescription>Our unwavering commitment to your health drives us to stay at the forefront of the latest advancements in therapy. Experience the transformative
              power of progressive therapeutic approaches that have been rigorously tested, proven effective and guided by the most up-to-date research and techniques. Your mental 
              wellness is our priority, and evidence-based care is our foundation.</ExpertiseDescription>
          </CompanyExpertise>
            
          <CompanyExpertise>
            <ExpertiseHighlight>Proven Track Record</ExpertiseHighlight>
            <ExpertiseTitle>Rely on Certified Expert Medical Specialists.</ExpertiseTitle>
            <ExpertiseDescription>When it comes to your mental health, trust the expertise of our leading therapy specialists. With a deep understanding of the human mind and years of 
              experience, our specialists are dedicated to helping you achieve a happier and healthier life. From personalized treatment plans to compassionate care, we are dedicated 
              to providing you with the highest quality therapeutic support.</ExpertiseDescription>
          </CompanyExpertise>
        </ExpertiseSection>
      </MainContainer>
    )
};

export default Expertise;