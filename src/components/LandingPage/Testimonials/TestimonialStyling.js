import { styled, css } from "styled-components"


export const DisplayLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  ${ DisplayLayout };
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
  overflow: hidden;
  background-color: #f5f3f4; 
`;

export const TestimonialHeader = styled.header`
  max-width: 100%;
  margin: 1rem 0;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
 } 
`;

export const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 2.3rem;
 } 
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 140px;
  max-height: 70px;
`;

export const TestimonialSection = styled.section`
  ${ DisplayLayout };
  flex-wrap: wrap;
  width: 90%;
  gap: 30px;
  overflow: hidden;
`;

export const TestimonialContent = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 385px;
  padding: 1.5rem;
  margin: 0;
  overflow: hidden;
`;

export const Testimonial = styled.p`
  font-size: 0.8rem;
  text-align: center;
  line-height: 2;
  margin: 0;
`;

export const PatientInformation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  gap: 20px;
`;

export const PatientImage = styled.img`
  border-radius: 4rem;
  max-width: 75px;
  max-height: 75px;
`;

export const PatientName = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.9;
  width: 100%;
`;