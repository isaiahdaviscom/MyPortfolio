// import { useEffect, useRef } from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { Card } from 'react-bootstrap';

import Home from './routes/home';
// import Blogs from './routes/blogs';
import Contact from './routes/contact';
import ContactSuccess from './routes/contact-success';
import NotFoundPage from './routes/notfound';

import Header from './components/pageHeader';
import Footer from './components/pageFooter';
import Projects from "./routes/projects";

// import CookieConsent from "./components/cookieConsent";

// import InstagramStory from './components/InstagramStory';
// const storyImages = [
//   'http://localhost:5173/images/projects/placeholder-1.webp',
//   'http://localhost:5173/images/projects/placeholder-1.webp',
//   'http://localhost:5173/images/projects/placeholder-1.webp'
// ];
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const carouselRef = useRef<HTMLDivElement>(null);

  // const SCROLL_AMOUNT = 285;

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: -SCROLL_AMOUNT,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({
  //       left: SCROLL_AMOUNT,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <>
      <Header className="bg-white py-2 text-center" />
      <main id="main" className="container-fluid py-4">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/projects/:id" element={<Projects />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
        <div className="container">
          {/* <div className="d-flex justify-content-end mb-2">
            <button className="btn btn-primary me-2" onClick={scrollLeft}>Prev</button>
            <button className="btn btn-primary" onClick={scrollRight}>Next</button>
          </div> */}
          {/* <div ref={carouselRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <div className="d-flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Card>
                  <Card.Img src="https://via.placeholder.com/500x500" alt="Card image" />
                  <Card.ImgOverlay key={index} style={{ flex: '0 0 auto', marginRight: index !== 4 ? '15px' : '0' }}>
                    <Card.Body>
                      <Card.Title>Card {index + 1}</Card.Title>
                      <Card.Text>
                        Some example text here.
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
      {/* <CookieConsent /> */}
      {/* <InstagramStory images={storyImages} /> */}
    </>
  );
}