
import React from 'react';
import './Rules.css';
import Footer from './footer';
import CustomNavbar from './navbar';
const RulesPage = () => {
  return (
    <>
      <CustomNavbar />
      <div className="rules-page">
        <header className="rules-header">
          <h1>قوانین و مقررات</h1>
        </header>
        <section className="rules-section">
          <h2>دستور العمل های همگانی</h2>
          <p>
            گوشی با خود نیاورد  در صورت همراه داشتن تلفن بدون دلیل تلفن همراه ضبط و تنها با حضور اولیا تحویل داده می شود
          </p>
        </section>
        <section className="rules-section">
          <h2>حضور و غیاب </h2>
          <p>
        تمامی دانش آموزان باید تا ساعت هفت چهل و پنج دقیقه در مدرسه حضور داشته باشند در صورت تاخیر یا غیبت اگر دلیل موجهی وجود نداشته باشد از نمره انضباط کم میشود
          </p>
        </section>
        <section className="rules-section">
          <h2>رفتار های انضباطی</h2>
          <p>
            هر دانش آموز باید رفتاری شایست داشته باشد و از هرگونه درگیری و یا فحاشی دوری کند مگر نه باعث کم شدن نمره انضباط یا در مواردی اخراج از مدرسه نیز همراه دارد
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RulesPage;
