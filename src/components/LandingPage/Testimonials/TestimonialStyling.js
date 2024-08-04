import { styled, css } from "styled-components"


export const DisplayLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestimonialSection = styled.section`
  ${ DisplayLayout };
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
  overflow: hidden;
`;

export const SectionTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  max-width: 100%;
  padding: 1rem;
  margin: 0;
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

export const TestimonialContainer = styled.div`
  ${ DisplayLayout };
  flex-wrap: wrap;
  width: 90%;
  gap: 30px;
  padding: 3rem 2rem;
  overflow: hidden;
`;

export const TestimonialContent = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 385px;
  padding: 1.5rem;
  margin: 0;
  border-top: 10px solid black;
  background-color: #efefef;
  overflow: hidden;
`;

export const Testimonial = styled.p`
  font-size: 0.8rem;
  text-align: justify;
  line-height: 2;
  margin: 0;
`;

export const PatientInformation = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 65%;
  margin: 1rem 0;
  gap: 15px;
`;

export const PatientImage = styled.img`
  border-radius: 4rem;
  max-width: 75px;
  max-height: 75px;
`;

export const PatientName = styled.p`
  font-size: 0.8rem;
  line-height: 1.9;
  width: 100%;
`;