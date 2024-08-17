import React from "react";
import {
  MainContainer,
  TestimonialHeader,
  SectionTitle,
  ImageContainer,
  Image,
  TestimonialSection,
  TestimonialContent,
  Testimonial,
  PatientInformation,
  PatientImage,
  PatientName
} from "./TestimonialStyling";
import { FaQuoteRight } from "react-icons/fa";

const imageImporter = (imageFiles) => {
    let images = {};
    imageFiles.forEach((item) => {
        images[item] = require(`../../../images/${item}`);
    })
    return images;
}
const imageFiles = [ 'Michael.jpg', 'Adwoa.jpg', 'Ama.jpg', 'Ngozi.jpg', 'Kofi.jpg', 'Grey-Leaf.png'];
const img = imageImporter(imageFiles);


const Testimonials = () => {
  return (
    <MainContainer>
      <TestimonialHeader>
        <SectionTitle>Trusted By Our Patients</SectionTitle>
      </TestimonialHeader>
      <TestimonialSection>
        <TestimonialContent>
          <PatientInformation>
            <PatientImage src={img['Michael.jpg']} width={1024} height={1024} alt="Image of Michael Mwangi"></PatientImage>
            <PatientName>Michael Mwangi <br /> Since 2023</PatientName>
            <FaQuoteRight size={40} color="#09798C"></FaQuoteRight> <br />
          </PatientInformation>
          <Testimonial>
            My spouse and I were on the brink of divorce until we found their marriage counseling services. Their compassionate approach and 
            practical guidance helped us rediscover the love and communication we had lost. We are now happier and more connected than ever before.
          </Testimonial>
        </TestimonialContent>
        <TestimonialContent>
          <PatientInformation>
            <PatientImage src={img['Kofi.jpg']} width={1024} height={1024} alt="Image of Kofi Appiah"></PatientImage>
            <PatientName>Kofi Appiah<br /> Since 2018</PatientName>
            <FaQuoteRight size={40} color="#09798C"></FaQuoteRight> <br />
          </PatientInformation>
          <Testimonial>
            As the parent of a challenging teenage daughter, I was at my wits' end. But after just a few sessions with the therapist, my daughter's 
            behavior and attitude improved dramatically. I'm so grateful for the support and strategies they provided to navigate this difficult phase.
          </Testimonial>
        </TestimonialContent>
        <TestimonialContent>
          <PatientInformation>
            <PatientImage src={img['Ama.jpg']} width={1024} height={1024} alt="Image of Ama Aidoo"></PatientImage>
            <PatientName>Ama Aidoo <br /> Since 2021</PatientName>
            <FaQuoteRight size={40} color="#09798C"></FaQuoteRight> <br />
          </PatientInformation>
          <Testimonial>
            I've been seeing this psychiatrist for several years to manage my clinical depression, and their expertise has been life-changing. With the 
            right medication and therapy plan, I'm now able to function at work and in my personal life in ways I never thought possible.
          </Testimonial>
        </TestimonialContent>
        <TestimonialContent>
          <PatientInformation>
            <PatientImage src={img['Ngozi.jpg']} width={1024} height={1024} alt="Image of Ngozi Nwosu"></PatientImage>
            <PatientName>Ngozi Nwosu <br /> Since 2023</PatientName>
            <FaQuoteRight size={40} color="#09798C"></FaQuoteRight> <br />
          </PatientInformation>
          <Testimonial>
            When workplace stress and conflicts started impacting my team's productivity, I knew I needed help. The corporate counseling services 
            PAX offered us were tailored made to fit our needs and ended up being invaluable in substantially enhancing performance.
          </Testimonial>
        </TestimonialContent>
        <TestimonialContent>
          <PatientInformation>
            <PatientImage src={img['Adwoa.jpg']} width={1024} height={1024} alt="Image of Adwoa Mensah"></PatientImage>
            <PatientName>Adwoa Mensah <br /> Since 2021</PatientName>
            <FaQuoteRight size={40} color="#09798C"></FaQuoteRight> <br />
          </PatientInformation>
          <Testimonial>
            The modern approaches of PAX have been instrumental in my recovery. Every provider has been kind and worked very hard to address 
            my healthcare needs. When I first came to PAX, I was feeling completely lost but now I actually feel excited about the future.
          </Testimonial>
        </TestimonialContent>
        <ImageContainer>
        <Image src={img['Grey-Leaf.png']} width={238} height={122} alt="Decorative Leaf Image"></Image>
      </ImageContainer>
      </TestimonialSection>
    </MainContainer>
  );
}

export default Testimonials;