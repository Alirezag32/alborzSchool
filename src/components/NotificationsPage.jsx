import React, { useState } from "react";
import styled from "styled-components";
import NotificationComponent from "./NotificationComponent";
import CustomNavbar from "./navbar";
import Footer from "./footer";





const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'اعلان 1', content: 'محتوای اعلان 1' },
    { id: 2, title: 'اعلان 2', content: 'محتوای اعلان 2' },
   
  ]);

  return (
    <>
      <CustomNavbar />
      <NotificationsContainer>
        <Title>صفحه اعلانات</Title>
        {notifications.map((notification) => (
          <NotificationComponent
            key={notification.id}
            title={notification.title}
            content={notification.content}
          />
        ))}
      </NotificationsContainer>
      <Footer />
    </>
  );
};

export default NotificationsPage;
