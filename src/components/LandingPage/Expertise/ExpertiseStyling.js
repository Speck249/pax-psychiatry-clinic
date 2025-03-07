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
  padding: 5rem 1rem;
  gap: 20px;
  width: 100%;
  font-weight: 700;
  overflow: hidden;
`;

export const CompanyExpertise = styled.article`
  max-width: 420px;
  padding: 1.5rem;
  background-color: #000;
`;

export const ExpertiseHighlight = styled.h3`
  font-size: 1rem;
  color: #09798c;
  line-height: 2;
  text-transform: uppercase;
`;

export const ExpertiseTitle = styled.h2`
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  color: #efefef;
`;

export const ExpertiseDescription = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  text-align: justify;
  color: #fff;
  line-height: 2;
`;