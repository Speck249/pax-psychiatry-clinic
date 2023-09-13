import React from 'react';
import { Row, Col, Card } from 'antd';
import BookingImg from '../../images/Booking.jpg';
import TrackerImg from '../../images/Tracker.jpg';
import JournalImg from '../../images/Journal.jpg'
import ResourcesImg from '../../images/Resources.jpg';
import NotesImg from '../../images/Notes.jpg';
import PaymentImg from '../../images/Payment.jpg';
import {
    DashboardContainer,
    DashboardTitle,
    Paragraph,
    DashboardCard
} from './DashboardStyling';

const { Meta } = Card;

/* Creates private dashboard for logged in users to access. */
const Dashboard = () => {
  const patientData = [
    {
      id: 1,
      title: 'Schedule Appointments',
      description: 'View and Manage Your Upcoming Therapy Sessions and Book New Ones.',
      image: BookingImg,
    },

    {
      id: 2,
      title: 'Medication Tracker',
      description: 'Track and Manage Your Prescribed Medications and Supplements.',
      image: TrackerImg,
    },
    
    {
      id: 3,
      title: 'Mood Journal',
      description: 'Record and Monitor Your Daily Mood and Emotions Safely at Your Convenience.',
      image: JournalImg,
    },
    
    {
      id: 4,
      title: 'Therapist Notes',
      description: 'Access Notes and Feedback From Your Therapist Wherever You Are.',
      image: NotesImg,
    },
        
    {
      id: 5,
      title: 'Payment Service',
      description: 'Choose Your Payment Plan and Manage Your Fees all in One Place.',
      image: PaymentImg,
    },
    
    {
      id: 6,
      title: 'Resources Library',
      description: 'Browse Educational Materials and Helpful Resources to Empower Your Health Journey.',
      image: ResourcesImg,
    },
  ];

 return (
  <>
    <DashboardContainer>
      <DashboardTitle>Welcome to Your Dashboard<Paragraph>Where Everything You Need is Just a Click Away.</Paragraph></DashboardTitle>
      <Row gutter={20}>
        {patientData.map((item) => (
          <Col span={8} key={item.id}>
            <DashboardCard
              hoverable
              cover={<img alt={item.title} src={item.image} />}
            >
              <Meta title={item.title} description={item.description} />
            </DashboardCard>
          </Col>
        ))}
      </Row>
    </DashboardContainer>
    </>
  );
};

export default Dashboard;