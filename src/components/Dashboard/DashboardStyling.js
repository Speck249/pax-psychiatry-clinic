import styled from 'styled-components';
import { Card } from 'antd';

export const { Meta } = Card;

export const DashboardContainer = styled.div`
  padding: 100px;
  height: auto;
  background-color: #e6e6e6;
`;

export const DashboardTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-size: 2.7rem;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 3rem;
  margin-top: -30px;
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  display: block;
`;

export const DashboardCard = styled(Card)`
  && {
    background-color: #fff;
    color: #e6e6e6;
    border-radius: 4px;
    margin-bottom: 16px;
  }
`;