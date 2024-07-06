import styled from 'styled-components';
import '../../fonts/webfont.css';

export const TitleContainer = styled.header`
  padding: 2rem;
  background-color: orange;
`;

export const MainTitle = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  text-align: center;
`;

export const InformationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #efefef;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 1rem 2rem;
  gap: 15px;
  width: 100%;
  height: auto;
`;

export const Column = styled.article`
  background-color: #000;
  width: 430px;
  height: auto;
  padding: 1.6rem;
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
  font-weight: 400;
  text-align: justify;
  color: #fff;
  line-height: 1.8;
  margin-top: 0.75rem;
`;