import { styled, css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";


export const DisplayLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutUsSection = styled.section`
  ${ DisplayLayout };
  width: 100%;  
  overflow: hidden;
  background-color: #efefef;
`;

export const ContentContainer = styled.div`
  ${ DisplayLayout };
  flex-wrap: wrap;
  width: 1300px;
  padding: 0 0.75rem;
  margin: 5rem 0;
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

export const MissionHighlight = styled.h3`
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
  font-size: 0.85rem;
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