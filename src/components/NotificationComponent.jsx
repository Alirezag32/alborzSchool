// NotificationComponent.js
import React from "react";
import styled from "styled-components";

const NotificationContainer = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 8px;
`;

const Content = styled.p`
  color: #555;
`;

const NotificationComponent = ({ title, content }) => {
  return (
    <NotificationContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </NotificationContainer>
  );
};

export default NotificationComponent;
