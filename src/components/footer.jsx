// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FooterContainer = styled.footer`
  direction: rtl;
  background-color: #2c3e50;
  color: #fff;
  padding: 50px 0;
  margin-top: 30vh ;
  
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-right: 10vh;
  margin-left: 10vh;
`;

const QuickLinks = styled.div`
  flex: 1 1 300px;
  margin-bottom: 30px;
`;

const LinksTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NavLink = styled.a`
  display: block;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #16a085;
  }
`;

const SocialMedia = styled.div`
  flex: 1 1 300px;
`;

const SocialTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  font-size: 32px;
  color: #fff;
  margin-right: 15px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #16a085;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <QuickLinks>
          <LinksTitle>لینک‌های سریع</LinksTitle>
          <Link to={"/"}><NavLink >صفحه اصلی</NavLink></Link>
          <Link to={"/Rules"}><NavLink >قوانین و مقررات</NavLink></Link>
          <Link><NavLink >تماس با ما</NavLink></Link>
          <Link to = {'/aboutUs'}><NavLink >درباره‌ی ما</NavLink></Link>
        </QuickLinks>
        <SocialMedia>
          <SocialTitle>شبکه‌های اجتماعی</SocialTitle>
          <SocialIcon href="#" target="_blank">
           
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
          <SocialIcon href="#" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
          </SocialMedia>
          <div>
          <LinksTitle>
            درباره ما 
            
          </LinksTitle>
          <p>
            مدرسه نمونه دولتی البرز واقع در شهریار
          </p>
          <h6>
            آدرس
          </h6>
          شهریار اندیشه فاز پنج دبیرستان نمونه دولتی البرز

          </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
