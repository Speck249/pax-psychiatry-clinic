import styled from "styled-components";


export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background-color: #000;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 35px;
  padding: 2rem 0;
  overflow: hidden;
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const NewsletterTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  color: #fff;
  line-height: 1.8;
  margin-top: 1rem;
`;

export const NewsletterDescription = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #fff;
  padding: 0 1rem;
  margin: 0;
`;

export const SubscriptionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  gap: 8px;
`;

export const SubscriptionLabel = styled.label`
  display: none;
`;

export const SubscriptionBox = styled.input`
  flex: 2.2;
  font-size: 13px;
  padding: 0.75rem 1rem;
  outline: none;
  border: none;
  border-radius: 2px;

  &::placeholder {
    color: gray;
    font-size: 14px;
  }
`;

export const SubscriptionButton = styled.button`
  flex: 1;
  font-size: 15px;
  color: #fff;
  padding: 0.75rem 1.2rem;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #09798C;

  &:hover {
    cursor: pointer;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin-top: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  margin: 0 1rem;
  gap: 45px;
`;

export const FooterLinkHeader = styled.p`
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterLink = styled.li`
  color: #fff;
  font-size: 0.75rem;
  line-height: 2.8;

  &:hover {
    cursor: pointer;
  }
`;

export const FooterCopyright = styled.p`
  color: #fff;
  font-size: 11px;
  text-align: center;
`;