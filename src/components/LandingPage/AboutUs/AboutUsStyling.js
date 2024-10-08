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
  width: 1350px;
  max-width: 100%;
  padding: 2rem 1rem;
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

export const AboutUsSection = styled.section`
  ${ DisplayLayout };
  flex-direction: row;
  width: 1300px;
  max-width: 100%;
  padding: 0 0.75rem;
  margin: 0;
  gap: 20px;
  overflow: hidden;

  @media screen and (max-width: 1020px) {
    margin: 2rem 0;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.1;
  margin: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: block;
  height: 420px;
`;

export const CompanyMission = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 20px;
`;

export const MissionHighlight = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #09798c;
  text-transform: uppercase;
  margin: 0;
`;

export const Mission = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;

export const MissionDescription = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  line-height: 1.9;
  margin: 0;
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
  border: none;
  border-radius: 4px;
  background-color: #09798C;
  
  &:hover {
    cursor: pointer;
  }
`;