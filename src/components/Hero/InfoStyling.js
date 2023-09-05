import styled from 'styled-components';
import '../../fonts/webfont.css';

export const InfoContainer = styled.div`
  color: #e6e6e6;
  background-color: ${({light}) => light ? '#e6e6e6' : '#000'};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  max-width: 1200px;
  width: 100%;
  height: 600px;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgOne}) => imgOne ? `'colTwo colOne'` : `'colOne colTwo'` };
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgOne}) => imgOne ? `'colOne' 'colTwo'` : `'colOne colOne' 'colTwo coleTwo'` };
  }
`;

export const ColumnOne = styled.div`
   grid-area: colOne;
   padding-left: 1rem;
   margin-left: -25px;
   margin-right: 1rem;
   margin-bottom: 1rem;
   margin-top: 2rem;
`;

export const ColumnTwo = styled.div`
   grid-area: colTwo;
   margin-left: -20px;
   margin-right: 5px;
   margin-bottom: 15px;
   padding-left: 1rem;
`;

export const TextWrapper = styled.div`
   max-width: 540px;
   padding-top: 0;
   padding-bottom: 30px;
`;

export const TopLine = styled.p`
   color: #09798C;
   font-size: 15px;
   font-weight: 600;
   letter-spacing: 1.5px;
   margin-bottom: 16px;
   margin-top: 1rem;
   margin-left: 1.2rem;
   text-transform: uppercase;
`;

export const Heading = styled.h1`
   font-size: 48px;
   font-weight: 600;
   line-height: 1.1;
   color: ${({lightTxt}) => lightTxt ? '#e6e6e6' : '#000' };
   margin-left: 1rem;
   margin-bottom: 25px;


   @media screen and (max-width: 480px) {
    font-size: 32px;
   }

`;

export const Subtitle = styled.p`
  font-size: 17px;
  max-width: 500px;
  margin-left: 1rem;
  line-height: 24px;
  text-align: justify;
  color: ${({darkTxt}) => darkTxt ? '#000' : '#fff' };
`;

export const ImgWrap = styled.div`
   max-width: 555px;
   height: 100%;
`;

export const Img = styled.img`
   width: 100%;
   margin: 0 0 10px 0;
   padding-right: 0;
`;
