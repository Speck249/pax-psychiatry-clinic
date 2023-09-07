import styled from 'styled-components';
import '../../fonts/webfont.css';

export const InfoContainer = styled.div`
  background-color: ${({ light }) => (light ? '#e6e6e6' : '#000')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 0px 4rem;
  max-width: 1500px;
  width: 100%;
  height: 500px;
  z-index: 1;

  @media screen and (max-width: 480px) {
    height: 1100px;
    margin-top: -10px;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
  }
`;

export const ColumnOne = styled.div`
  margin-right: 1rem;
  margin-left: 3rem;
  background-color: #000;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: -40px;
    margin-bottom: 1rem;
    margin-left: 4rem;
  }
`;

export const ColumnTwo = styled.div`
  margin-right: 1rem;
  background-color: #000;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 4rem;
  }
`;

export const ColumnThree = styled.div`
  background-color: #000;

  @media screen and (max-width: 480px) {
     width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 4rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 400px;
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.6rem;
  padding-bottom: 1rem;
`;

export const TopLine = styled.p`
  color: #09798c;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  color: ${({ lightTxt }) => (lightTxt ? '#000' : '#fff')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 13px;
  max-width: 350px;
  line-height: 22px;
  text-align: justify;
  color: ${({ darkTxt }) => (darkTxt ? '#fff' : '#000')};

  @media screen and (max-width: 480px) {
    font-size: 12px;
    max-width: 100%;
  }
`;