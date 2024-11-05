import React from 'react';
import { Card, Space, Col, Divider, Row, Typography, Avatar } from 'antd';
const { Text, Link, Title } = Typography;
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { WiTime5 } from "react-icons/wi";
import man from "../../assets/Man-2_1-removebg-preview.png";
import "../Bookings/Bookings.css";

const bookingData = [
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // {
  //   id: 1,
  //   title: "General Health Coaching",
  //   date: "Wed, 14 Oct",
  //   time: "12:30PM",
  //   doctorName: "Dr. Jojo Brooks",
  //   doctorTitle: "Medical Doctor",
  //   avatar: man
  // },
  // Add more booking data as needed
];

function Bookings() {
  return (
    <div>
      {/* <Row gutter={[16, 16]}>
        {bookingData.map((booking) => (
          <Col xs={24} sm={12} md={8} lg={8} key={booking.id}>
            <Card
             className="card-custom"
              size="small"
              title={
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Text disabled level={4} style={{marginTop:"4%"}}>
                    {booking.title}
                  </Text>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop:'3%', marginBottom:"3%" }}>
                    <Text type="secondary" style={{ display: 'flex', alignItems: 'center' }}>
                      <IoCalendarOutline style={{ marginRight: '4px' }} /> 
                      {booking.date} 
                      <WiTime5 style={{ marginLeft: '8px', marginRight: '4px' }} />
                      {booking.time}
                    </Text>
                  </div>
                </div>
              }
              extra={<a href="#"><HiOutlineDotsVertical /></a>}
              style={{
                width: 300,
              }}
            >
              <div style={{ display: 'flex' }}>
                <div>
                  <Avatar src={booking.avatar} style={{marginTop:"30%"}} />
                </div>
                <div className='avatar-text'>
                  <Title level={5}>{booking.doctorName}</Title>
                  <Text type="secondary">{booking.doctorTitle}</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row> */}
    </div>
  )
}

export default Bookings;
