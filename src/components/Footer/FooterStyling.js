import styled from 'styled-components';

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #000;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: inherit;
  gap: 35px;
  padding: 2rem 0;
  overflow: hidden;
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto; 
  height: inherit;
  overflow: hidden;
`;

export const NewsletterTitle = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.8;
  margin-top: 1rem;
`;

export const NewsletterDescription = styled.p`
  color: #fff;
  font-size: 0.85rem;
  text-align: center;
  padding: 0 1rem;
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
`;

export const SubscriptionLabel = styled.label`
  display: none;
`;

export const SubscriptionBox = styled.input`
  flex: 2;
  padding: 0.75rem 1.5rem;
  margin-right: 0.8rem;
  border: none;
  border-radius: 2px;

  &::placeholder {
    color: gray;
    font-size: 13px;
  }
`;

export const SubscriptionButton = styled.button`
  flex: 1;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  padding: 0.75rem 1.2rem;
  margin-right: 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: #09798C;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: inherit;
  padding: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 45px;
  width: auto;
  height: inherit;
  padding: 2rem 1.6rem;
`;

export const FooterLinkHeader = styled.h3`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterLink = styled.li`
  color: #fff;
  font-size: 0.8rem;
  line-height: 2.8;
`;

export const FooterCopyright = styled.p`
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
`;