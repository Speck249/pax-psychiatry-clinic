import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    ColumnOne,
    ColumnTwo,
    ColumnThree,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './InfoStyling';


/* A Reusable information section for service highlights. */ 
const InfoSection = ({
    light,
    id,
    firsttopLine,
    firstheadLine,
    firstdescription,
    secondtopLine,
    secondheadLine,
    seconddescription,
    thirdtopLine,
    thirdheadLine,
    thirddescription,
    lightTxt,
    darkTxt
}) => {

  return (
    <>
      <InfoContainer light={light} id={id}>
         <InfoWrapper>
           <InfoRow >
               <ColumnOne>
                  <TextWrapper>
                      <TopLine>{firsttopLine}</TopLine>
                      <Heading lightTxt={lightTxt}>{firstheadLine}</Heading>
                      <Subtitle darkTxt={darkTxt}>{firstdescription}</Subtitle>
                  </TextWrapper>
                </ColumnOne>
                <ColumnTwo>
                  <TextWrapper>
                      <TopLine>{secondtopLine}</TopLine>
                      <Heading lightTxt={lightTxt}>{secondheadLine}</Heading>
                      <Subtitle darkTxt={darkTxt}>{seconddescription}</Subtitle>
                  </TextWrapper>
                </ColumnTwo>
              <ColumnThree>
                  <TextWrapper>
                      <TopLine>{thirdtopLine}</TopLine>
                      <Heading lightTxt={lightTxt}>{thirdheadLine}</Heading>
                      <Subtitle darkTxt={darkTxt}>{thirddescription}</Subtitle>
                  </TextWrapper>
                </ColumnThree>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;