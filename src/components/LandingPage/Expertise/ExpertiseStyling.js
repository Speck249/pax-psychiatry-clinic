import styled from "styled-components";


export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  background-color: #f5f3f4;
  overflow: hidden;
`;

export const ExpertiseSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0.85rem;
  margin-top: 5rem; 
  margin-bottom: 6rem;
  gap: 20px;
  width: 100%;
  overflow: hidden;
`;

export const CompanyExpertise = styled.article`
  max-width: 420px;
  padding: 1.5rem;
  background-color: #000;
`;

export const ExpertiseHighlight = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #09798c;
  line-height: 2;
  text-transform: uppercase;
`;

export const ExpertiseTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
  color: #efefef;
`;

export const ExpertiseDescription = styled.p`
  font-size: 0.85rem;
  text-align: justify;
  color: #fff;
  line-height: 1.8;
  margin: 0;
`;