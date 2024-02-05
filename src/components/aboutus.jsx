import React from "react";
import "./aboutus.css";
import CustomNavbar from "./navbar";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <>
      <CustomNavbar />
      <div className="about-us-container">
        <h2 className="about-us-title">درباره ما</h2>
        <p className="about-us-paragraph">
          دبیرستان نمونه دولتی البرز یکی از بهترین دبیرستان های شهرستان شهریار
          است که با کادری مجرب همواره در حال تربیت دانش آموزان نمونه است
        </p>
        <h3>
          : آدرس ما
          <p className="about-us-paragraph">
            شهریار اندیشه فاز پنج دبیرستان نمونه دولتی البرز
          </p>
        </h3>
        <p className="about-us-paragraph">
          با ما همراه باشید و دنیای جدیدی از یادگیری را تجربه کنید!
        </p>
        <h3>
          : ارتباط با ما
          <p className="about-us-paragraph">
            تلفن
            <p>0210895465</p>
          </p>
        </h3>
        <p className="about-us-paragraph">
          با ما همراه باشید و دنیای جدیدی از یادگیری را تجربه کنید!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
