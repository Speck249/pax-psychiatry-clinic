import { styled, css } from "styled-components";


export const DisplayLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  ${ DisplayLayout };
  width: 100%;
  background-color: #f5f3f4;
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  ${ DisplayLayout };
  width: 1300px;
  max-width: 100%;
  padding: 1rem;
  margin-top: 3rem;
`;

export const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
`;

export const SectionDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;
  line-height: 2.2;
  max-width: 75%;
  padding: 1rem 0;
  margin: 0;
`;

export const ServiceSection = styled.section`
  ${ DisplayLayout };
  flex-wrap: wrap;
  flex-direction: row;
  width: 1200px;
  max-width: 100%;
  padding: 0 1rem;
  margin: 0;
  overflow: hidden;
`;

export const ServiceContainer = styled.div`
  ${DisplayLayout};
  align-items: flex-start;
  flex: 1.2;
  padding: 2rem;
`;

export const ServiceHighlight = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #09798c;
  text-transform: uppercase;
  padding: 1rem 0;
  margin: 0;
`;

export const OurServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 8px;
  overflow: hidden;
`;

export const ContentContainer = styled.article`
  ${ DisplayLayout };
  position: relative;
  width: 250px;
  height: 200px;
  padding: 0.5rem;
  margin: 0;
  border: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #000;

  &:hover {
    cursor: pointer;
  }
`;

export const ServiceType = styled.div`
  ${DisplayLayout};
  padding: 0.5rem 1rem;
`;

export const Services = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  padding: 0;
  margin: 0;
`;

export const AdditionalDescription = styled.div`
   display: none;
`;

export const ButtonContainer = styled.div`
  ${ DisplayLayout };
  margin-top: 1rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin: 0;

  @media screen and (max-width: 900px) {
    display: none;  
  }
`;

export const Image = styled.img`
  display: block;
  height: 490px;
`;
