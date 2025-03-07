import { styled, css } from 'styled-components';


export const DisplayLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  ${ DisplayLayout };
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;
  background-color: #f5f3f4;
  overflow: hidden; 
`;

export const ContactHeader = styled.header`
  display: block;
  margin: 1rem auto;
  width: 100%;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
 } 
`;

export const SectionTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 2.3rem;
 } 
`;

export const ContactSection = styled.section`
  ${ DisplayLayout };
  flex-wrap: wrap;
  width: 1100px;
  max-width: 100%;
  padding-top: 1rem;
  margin-bottom: 5rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
 } 
`;

export const Form = styled.form`
  flex: 1;
  padding: 1rem 1.75rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  width: 100%;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  margin: 0.75rem 0;
`;

export const FormInput = styled.input`
  font-size: 14px;
  padding: 0.95rem 0 0 0.35rem;
  margin-bottom: 1.5rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
`;

export const Textarea = styled.textarea`
  font-size: 14px;
  resize: none;
  outline: none;
  border: none;
  height: 170px;
  padding: 1.2rem 1rem 0.75rem 1rem;
`;

export const Submit = styled.button`
  color: #fff;
  width: inherit;
  padding: 0.75rem 0;
  margin: 1rem 0;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #09798C;

  &:hover {
    cursor: pointer;
  }
`;

export const InformationContainer = styled.div`
  flex: 1;
  max-width: 100%;
  padding: 0.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 1rem;
  font-size: 0.85rem;
`;

export const ContactBrief = styled.p`
  font-size: 0.8rem;
  text-align: justify;
  line-height: 1.8;
  padding: 0.5rem 0;
`

export const ContactDetail = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  padding: 0.65rem;

  &:hover { 
    cursor: pointer;
  }
`;

export const AddressContainer = styled.div`
   margin: 0 auto;
   width: 450px;
   height: 300px;
`;