// import { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { Carousel } from 'react-bootstrap';

// const InstagramStory = ({ images, onClose }) => {
const InstagramStory = () => {
  // const [isMounted, setIsMounted] = useState(false);

  // // Create a div where the portal will be mounted
  // const el = document.createElement('div');

  // useEffect(() => {
  //   document.body.appendChild(el);
  //   setIsMounted(true);

  //   return () => {
  //     document.body.removeChild(el);
  //   };
  // }, [el]);

  // if (!isMounted) {
  //   return null;
  // }

  // return ReactDOM.createPortal(
  //   <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
  //     <Carousel indicators={false} controls={false} interval={5000} onExited={onClose}>
  //       {images.map((imgSrc, index) => (
  //         <Carousel.Item key={index}>
  //           <img
  //             className="d-block w-100"
  //             src={imgSrc}
  //             alt={`Slide ${index}`}
  //           />
  //         </Carousel.Item>
  //       ))}
  //     </Carousel>
  //     <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, zIndex: 1001 }}>Close</button>
  //   </div>,
  //   el
  // );
};

export default InstagramStory;
