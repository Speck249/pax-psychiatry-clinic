import React from "react";
import {
  TestimonialSection,
  SectionTitle,
  ImageContainer,
  Image,
  TestimonialContainer,
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
const imageFiles = [ 'Michael.jpg', 'Adwoa.jpg', 'Ama.jpg', 'Ngozi.jpg', 'Kofi.jpg', 'White-Leaf.png'];
const img = imageImporter(imageFiles);


const Testimonials = () => {
  return (
    <TestimonialSection>
      <SectionTitle>TRUSTED BY OUR PATIENTS</SectionTitle>
        <ImageContainer>
          <Image src={img['White-Leaf.png']} width={500} height={500} alt="Decorative Leaf Image"></Image>
        </ImageContainer>

      <TestimonialContainer>
        <TestimonialContent>
          <Testimonial>
            <FaQuoteRight size={20} color="#09798C"></FaQuoteRight> <br />
            My spouse and I were on the brink of divorce until we found their marriage counseling services. Their compassionate approach and 
            practical guidance helped us rediscover the love and communication we had lost. We are now happier and more connected than ever before.
          </Testimonial>
          <PatientInformation>
            <PatientImage src={img['Michael.jpg']} width={1024} height={1024} alt="Image of Michael Mwangi"></PatientImage>
            <PatientName>Michael Mwangi <br /> <em>Since 2023</em></PatientName>
          </PatientInformation>
        </TestimonialContent>
        
        <TestimonialContent>
          <Testimonial>
            <FaQuoteRight size={20} color="#09798C"></FaQuoteRight> <br />
            As the parent of a challenging teenage daughter, I was at my wits' end. But after just a few sessions with the therapist, my daughter's 
            behavior and attitude improved dramatically. I'm so grateful for the support and strategies they provided to navigate this difficult phase.
          </Testimonial>
          <PatientInformation>
            <PatientImage src={img['Kofi.jpg']} width={1024} height={1024} alt="Image of Kofi Appiah"></PatientImage>
            <PatientName>Kofi Appiah<br /> <em>Since 2018</em></PatientName>
          </PatientInformation>
        </TestimonialContent>

        <TestimonialContent>
          <Testimonial>
            <FaQuoteRight size={20} color="#09798C"></FaQuoteRight> <br />
            I've been seeing this psychiatrist for several years to manage my clinical depression, and their expertise has been life-changing. With the 
            right medication and therapy plan, I'm now able to function at work and in my personal life in ways I never thought possible.
          </Testimonial>
          <PatientInformation>
            <PatientImage src={img['Ama.jpg']} width={1024} height={1024} alt="Image of Ama Aidoo"></PatientImage>
            <PatientName>Ama Aidoo <br /> <em>Since 2021</em></PatientName>
          </PatientInformation>
        </TestimonialContent>

        <TestimonialContent>
          <Testimonial>
            <FaQuoteRight size={20} color="#09798C"></FaQuoteRight> <br />
            When workplace stress and conflicts started impacting my team's productivity and morale, I knew I needed help. The corporate counseling services 
            PAX offered us were invaluable in substantially enhancing quarterly performance.
          </Testimonial>
          <PatientInformation>
            <PatientImage src={img['Ngozi.jpg']} width={1024} height={1024} alt="Image of Ngozi Nwosu"></PatientImage>
            <PatientName>Ngozi Nwosu <br /> <em>Since 2023</em></PatientName>
          </PatientInformation>
        </TestimonialContent>

        <TestimonialContent>
          <Testimonial>
            <FaQuoteRight size={20} color="#09798C"></FaQuoteRight> <br />
            The integrated approach of this healthcare practice has been instrumental in my journey to overall wellness. Every provider has worked seamlessly to 
            address my physical, emotional, and psychological needs. I feel truly cared for as a whole person.
          </Testimonial>
          <PatientInformation>
            <PatientImage src={img['Adwoa.jpg']} width={1024} height={1024} alt="Image of Adwoa Mensah"></PatientImage>
            <PatientName>Adwoa Mensah <br /> <em>Since 2021</em></PatientName>
          </PatientInformation>
        </TestimonialContent>
      </TestimonialContainer>
    </TestimonialSection>
  );
}

export default Testimonials;