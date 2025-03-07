import styled, { css } from 'styled-components';

const imageImporter = (imageFiles) => {
  let images = {};
  imageFiles.forEach((item) => {
    images[item] = require(`../../images/${item}`);
  })
  return images;
}
const imageFiles = [ 'Aisha.jpg', 'Kwame.jpg', 'Nia.jpg', 'Zara.jpg', 'Tariq.jpg', 'Jabari.jpg' ];
const img = imageImporter(imageFiles)


export const DisplayLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MedicalTeamSection = styled.section`
  ${ DisplayLayout };
  width: 100%;
  padding-bottom: 5rem;
  background-color: #f5f3f4;
  overflow: hidden;
`;

export const MedicalTeamHeader = styled.header`
  ${ DisplayLayout };
  width: 1300px;
  max-width: 100%;
  margin: 5rem 0;
  padding: 1rem;
  gap: 15px;
  overflow: hidden;
`;

export const SectionTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    line-height: 1.4;
    max-width: 90%;
 } 
`;

export const SectionDescription = styled.p`
  text-align: center;
  line-height: 2;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
    text-align: justify;
 } 
`;

export const Image = styled.img`
  margin: 0 auto;
  max-width: 120px;
  max-height: 70px;
  margin-top: 1rem;
`;

export const MedicalTeamContainer = styled.div`
  ${ DisplayLayout };
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  gap: 50px;
  overflow: hidden;
`;

export const CommonStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 380px;
  height: 470px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 280px;
  padding: 0.5rem 0;
  border-radius: 2px;
  transform: translateY(-10px);
  transition: 0.5s all ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const AdditionalDescription = styled.div`
  font-size: 0.85rem;
  text-align: justify;
  line-height: 2.1;
  color: #fff;
  height: 100%;
  padding: 2rem;
  border-radius: 5px;
  opacity: 0;
  transform: translateY(3px);
  transition-property: transform, opacity;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FirstDoctor = styled.article`
  ${ CommonStyle };
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${img['Aisha.jpg']});

  &:hover, &:focus {
   ${ ContentContainer } {
     opacity: 0;
   }
   
   ${ AdditionalDescription } {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const SecondDoctor = styled.article`
  ${ CommonStyle };
  background-image: url(${img['Kwame.jpg']});

  &:hover, &:focus {
   ${ ContentContainer } {
     opacity: 0;
   }

   ${ AdditionalDescription } {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const ThirdDoctor = styled.article`
  ${ CommonStyle };
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${img['Zara.jpg']});


  &:hover, &:focus {
   ${ ContentContainer } {
     opacity: 0;
   }
   
   ${ AdditionalDescription } {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const FourthDoctor = styled.article`
  ${ CommonStyle };
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${img['Nia.jpg']});

  &:hover, &:focus {
   ${ ContentContainer } {
     opacity: 0;
   }
   
   ${ AdditionalDescription } {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const FifthDoctor = styled.article`
  ${ CommonStyle };
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${img['Tariq.jpg']});

  &:hover, &:focus {
   ${ ContentContainer } {
     opacity: 0;
   }
   
   ${ AdditionalDescription } {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const SixthDoctor = styled.article`
  ${ CommonStyle };
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${img['Jabari.jpg']});

  &:hover, &:focus {
   ${ ContentContainer } {
     opacity: 0;
   }
   
   ${ AdditionalDescription } {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const DoctorName = styled.p`
   font-size: 0.85rem;
   font-weight: 700;
   text-align: center;
   line-height: 2;
   color: #fff;
`;

export const MedicalTitle = styled.p`
   font-size: 0.8rem;
   text-align: center;
   color: #fff;
`;