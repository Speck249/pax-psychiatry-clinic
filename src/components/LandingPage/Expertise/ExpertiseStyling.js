import styled from 'styled-components';

export const ExpertiseSection = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const ExpertiseContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 0.85rem;
  gap: 15px;
  width: 100%;
  height: 100%;
`;

export const Column = styled.article`
  width: 420px;
  max-width: 100%;
  padding: 1.5rem;
  background-color: #000;
`;

export const ColumnHighlight = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #09798c;
  line-height: 2;
  text-transform: uppercase;
`;

export const ColumnTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
  color: #efefef;
`;

export const ColumnDescription = styled.p`
  font-size: 0.85rem;
  text-align: justify;
  color: #fff;
  line-height: 1.8;
  margin: 0;
`;