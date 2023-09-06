import styled from 'styled-components';
import '../../fonts/webfont.css';

export const InfoContainer = styled.div`
  color: #e6e6e6;
  background-color: ${({ light }) => (light ? '#e6e6e6' : '#000')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin-left: 0;
  padding: 0px 5rem;
  max-width: 1468px;
  width: 100%;
  height: 550px;
  z-index: 1;

  @media screen and (max-width: 480px) {
    padding: 10rem 6rem;
  }

  @media screen and (max-width: 1440px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgOne }) => (imgOne ? `'colTwo colOne'` : `'colOne colTwo'`)};
  align-items: center;
  margin-right: 2rem;
  padding-left: 3.5rem;
  padding-top: 7px;
  margin-bottom: 2rem;
  margin-top: 5rem;
  padding-bottom: -10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    padding-left: 1rem;
  }
`;

export const ColumnOne = styled.div`
  margin-left: -8px;
  margin-right: 2rem;
  padding-right: 1rem;
  margin-bottom: 6rem;
  margin-top: -35px;
  border-radius: 3px;
  background-color: #000;

  @media screen and (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

export const ColumnTwo = styled.div`
  padding-left: 2px;
  padding-right: 1.5rem;
  margin-left: -40px;
  margin-right: 2rem;
  margin-bottom: 6rem;
  margin-top: 1rem;
  border-radius: 3px;
  background-color: #000;

  @media screen and (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

export const ColumnThree = styled.div`
  padding-left: 7px;
  padding-right: 1.2rem;
  margin-left: -50px;
  margin-right: 1rem;
  margin-bottom: 5rem;
  margin-top: 3rem;
  border-radius: 3px;
  background-color: #000;

  @media screen and (max-width: 480px) {
    margin-bottom: 3rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 20px;
  background-color: #000;
  padding-left: 1rem;
`;

export const TopLine = styled.p`
  color: #09798c;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
  margin-top: 2rem;
  margin-left: 0.2rem;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  color: ${({ lightTxt }) => (lightTxt ? '#000' : '#fff')};
  margin-right: 1rem;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  max-width: 370px;
  margin-left: 0.2rem;
  margin-bottom: 1rem;
  line-height: 24px;
  text-align: justify;
  color: ${({ darkTxt }) => (darkTxt ? '#fff' : '#000')};

  @media screen and (max-width: 480px) {
    font-size: 12px;
    max-width: 100%;
  }
`;