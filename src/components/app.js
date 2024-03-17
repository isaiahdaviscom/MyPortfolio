// import React, { Component } from "react";
// import {
//   Routes,
//   Route
// } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // 
// import Home from '../routes/home';
// import Blogs from '../routes/blogs';
// // import Blog from '../routes/blog';
// import Contact from '../routes/contact';
// import ContactSuccess from '../routes/contact-success';
// import NotFoundPage from '../routes/notfound';
// // 
// import Header from './header';
// // import Layout from './layout';
// import Footer from './footer';
// import Projects from "../routes/projects";

// export default class App extends Component {
//   handleRoute = e => {
//     this.currentUrl = e.url;
//     console.log(e)
//   };
  
//   render(props) {
//     return (
//       <div className="App">
//         <Header />
//         <div id="main-content">
//           <Routes >
//             <Route path="*" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/projects/:id" element={<Projects />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/contact-success" element={<ContactSuccess />} />
//             <Route path="/404" element={<NotFoundPage />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div >
//     )
//   }
// }