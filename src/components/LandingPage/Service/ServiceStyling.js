import { styled, css } from "styled-components";


export const DisplayLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  ${ DisplayLayout };
  max-width: 100%;
  background-color: #f5f3f4;
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  ${DisplayLayout};
  width: 1300px;
  max-width: 100%;
  padding: 1rem 0;
  gap: 15px;
`;

export const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 815px) {
    font-size: 2.3rem;
    max-width: 90%;
 } 
`;

export const SectionDescription = styled.p`
  font-size: 0.95rem;
  text-align: justify;
  line-height: 2;
  padding: 1rem 0;
  max-width: 90%;

`;

export const ServiceSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 1300px;
  max-width: 100%;
  overflow: hidden;
`;

export const ServiceContainer = styled.div`
  ${DisplayLayout};
  flex: 1;
  width: 100%;
  padding: 2rem;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 100vw;
    padding: 3rem 1.5rem;
 } 
`;

export const ServiceHighlight = styled.small`
  align-self: flex-start;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #09798c;

@media screen and (min-width: 650px) and (max-width: 1150px) {
  align-self: center;
 }
`;

export const OurServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 600px;
  max-width: 100%;
  padding: 0;
  margin: 2rem 0;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #000;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    height: 150px; 
  }
`;

export const ServiceType = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const Services = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
`;

export const AdditionalDescription = styled.div`
   display: none;
`;

export const ButtonContainer = styled.div`
  ${ DisplayLayout };
  margin-top: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 100vw;
  height: 500px;

  @media screen and (max-width: 1150px) {
    display: none; 
  }

`;

export const Image = styled.img`
  width: 85%;
  height: auto; 
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;

