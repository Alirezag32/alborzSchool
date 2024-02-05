import Navbar from "./navbar";
import "./articles.css"
const Articles = () => {
          return (
            <>
              <Navbar />

              <header className="header-article">
                <h1>مقالات</h1>
              </header>

              <main className="main-article">
                <article className="article-article">
                  <h2 className="h2Article">مقاله ی اول </h2>
                  <p>یکی از مزایای یک مدرسه خوب...</p>
                </article>

                <article className="article-article">
                  <h2>مقاله ی دوم</h2>
                  <p className="p-article">خوبی های یک دانش آموز خوب..</p>
                </article>
              </main>
            </>
          );
}
 
export default Articles;