import { Link } from "react-router-dom";
import "./Home.css"
import CustomNavbar from "./navbar";
import Footer from "./footer";

const Home = () => {
          return (
            <>
              <CustomNavbar />
              <div className="homepage">
                <header className="header">
                  <h1>به سایت دبیرستان ما خوش آمدید</h1>
                  <p>مکانی برای دریافت اعلانات و خواندن مقالات دبیرستان</p>
                </header>
                <section className="section">
                  <h2>درباره ی ما</h2>
                  <p>
                    دبیرستان نمونه دولتی البرز یکی از بهترین دبیرستان های شهرستان شهریار است که با کادری مجرب همواره در حال تربیت دانش آموزان نمونه است 
                  </p>
                </section>
                <section className="section">
                  {/* <h2>Upcoming Events</h2>
                  <ul className="event-list">
                    <li className="event-list-item">
                      <strong>Event 1:</strong> Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Date 1
                    </li>
                    <li className="event-list-item">
                      <strong>Event 2:</strong> Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Date 2
                    </li>
                  </ul> */}
                </section>
                <section className="section">
                  <h2>ارتباط با ما</h2>
                  <p className="contact-info">
                    <strong>ایمیل </strong> info@school.com
                  </p>
                  <p className="contact-info">
                    <strong>تلفن</strong> 123-456-7890
                  </p>
                </section>
              </div>

              <Footer />
            </>
          );
};

export default Home;
