import React from 'react';
import { Col, Divider, Row, Card, Button } from 'antd';
import man from "../../assets/Man-2_1-removebg-preview.png";
import { HeartTwoTone } from '@ant-design/icons';
import "../Coaches/Coaches.css";

const { Meta } = Card;

// Sample data array
const coachesData = [
  {
    id: 1,
    name: "John Doe",
    description: "Fitness Coach",
  },
  {
    id: 2,
    name: "Jane Smith",
    description: "Yoga Instructor",
  },
  {
    id: 3,
    name: "Mike Johnson",
    description: "Nutrition Expert",
  },
  {
    id: 4,
    name: "Sarah Brown",
    description: "Personal Trainer",
  }
];

const Coaches = () => {
  return (
    <div>
      <Divider orientation="left">Contacts</Divider>
      
      {/* <Row gutter={[16, 16]}>
        {coachesData.map((coach) => (
          <Col key={coach.id} xs={12} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{
                width: '100%',
                borderRadius: "5%"
              }}
              cover={
                <img 
                  alt={coach.name} 
                  src={man} 
                  className='coach-image'
                />
              }
            >
              <div className="meta-container">
                <Meta 
                  title={coach.name} 
                  description={coach.description} 
                />
                <HeartTwoTone twoToneColor="#eb2f96" />
              </div>
              <Button className='btn-bg'>Book</Button>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Coaches;
