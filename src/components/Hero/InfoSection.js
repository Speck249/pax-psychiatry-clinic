import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    ColumnOne,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ColumnTwo,
    ImgWrap,
    Img 
} from './InfoStyling';

const InfoSection = ({
    light,
    id,
    imgOne,
    topLine,
    headLine,
    lightTxt,
    darkTxt,
    description,
    img,
    alt
}) => {

  return (
    <>
      <InfoContainer light={light} id={id}>
         <InfoWrapper>
           <InfoRow imgOne={imgOne}>
               <ColumnOne>
                  <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightTxt={lightTxt}>{headLine}</Heading>
                      <Subtitle darkTxt={darkTxt}>{description}</Subtitle>
                  </TextWrapper>
                </ColumnOne>
                <ColumnTwo>
                    <ImgWrap><Img src={img} alt={alt}/></ImgWrap>
                </ColumnTwo>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection