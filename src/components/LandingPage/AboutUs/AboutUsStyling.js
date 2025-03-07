import { styled, css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const DisplayLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  ${ DisplayLayout };
  width: 100%;  
  overflow: hidden;
  background-color: #f5f3f4;
`;

export const SectionHeader = styled.header`
  ${ DisplayLayout };
  width: 1300px;
  max-width: 100%;
  padding-top: 5rem;
  padding-bottom: 3rem;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    max-width: 100%;
 } 
`;

export const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  max-width: 90%;

 @media screen and (max-width: 815px) {
    font-size: 2.3rem;
 } 
`;

export const SectionDescription = styled.p`
  font-size: 0.95rem;
  text-align: justify;
  line-height: 2;
  max-width: 90%;
  padding: 0.5rem 0;
`;

export const AboutUsSection = styled.section`
  ${ DisplayLayout };
  flex-direction: row;
  width: 1300px;
  max-width: 100%;
  padding: 2rem 0;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    max-width: 100%;   
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 0.25rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 420px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

export const CompanyMission = styled.div`
  ${DisplayLayout};
  flex: 1;
  align-items: flex-start;
  font-weight: 700;
  padding: 2rem;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    padding: 1rem 0;
    max-width: 90%;
 } 
`;

export const MissionHighlight = styled.small`
  font-size: 1rem;
  color: #09798c;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
 } 
`;

export const Mission = styled.h2`
  font-size: 2.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    max-width: 100%;
 } 
`;

export const MissionDescription = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  text-align: justify;
  line-height: 2;
`;

export const ButtonContainer = styled.div`
  ${ DisplayLayout };
  margin-top: 1rem;
`;

export const MeetOurDoctors = styled(LinkRouter)`
  font-size: 0.95rem;
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #09798C;
  
  &:hover {
    cursor: pointer;
  }
`;