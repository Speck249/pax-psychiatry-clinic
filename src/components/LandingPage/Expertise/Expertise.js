import React from 'react';
import { 
  ExpertiseSection,
  ExpertiseContent,
  Column,
  ColumnHighlight,
  ColumnTitle,
  ColumnDescription
} from './ExpertiseStyling';


const Expertise = () => {
    return (
      <ExpertiseSection>
        <ExpertiseContent>
          <Column>
            <ColumnHighlight>Exceptional Services</ColumnHighlight>
            <ColumnTitle>Get the Quality Healthcare You Deserve.</ColumnTitle>
            <ColumnDescription>At PAX, we believe everyone deserves access to high-quality healthcare. That's why our team of medical professionals is committed to addressing
              your unique healthcare needs while offering flexible payment options. From preventive measures to specialized treatments, we are passionate about providing medical
              services that empower your best life. Discover the care you truly deserve with us.</ColumnDescription>
          </Column>
            
          <Column>
            <ColumnHighlight>Breaking Barriers</ColumnHighlight>
            <ColumnTitle>Cutting-Edge Therapy rooted in Evidence.</ColumnTitle>
            <ColumnDescription>Our unwavering commitment to your health drives us to stay at the forefront of the latest advancements in therapy. Experience the transformative
              power of progressive therapeutic approaches that have been rigorously tested, proven effective and guided by the most up-to-date research and techniques. Your mental 
              wellness is our priority, and evidence-based care is our foundation.</ColumnDescription>
          </Column>
            
          <Column>
            <ColumnHighlight>Proven Track Record</ColumnHighlight>
            <ColumnTitle>Rely on Certified Expert Medical Specialists.</ColumnTitle>
            <ColumnDescription>When it comes to your mental health, trust the expertise of our leading therapy specialists. With a deep understanding of the human mind and years of 
              experience, our specialists are dedicated to helping you achieve a happier and healthier life. From personalized treatment plans to compassionate care, we are dedicated 
              to providing you with the highest quality therapeutic support.</ColumnDescription>
          </Column>
        </ExpertiseContent>
      </ExpertiseSection>
    )
};

export default Expertise;