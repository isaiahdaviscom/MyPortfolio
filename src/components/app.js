import React, { Component } from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// 
import Home from '../routes/home';
import Blogs from '../routes/blogs';
// import Blog from '../routes/blog';
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';
import NotFoundPage from '../routes/notfound';
// 
import Header from './header';
import Footer from './footer';

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }


export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
    console.log(e)
  };
  render(props) {
    console.log(props);
    return (
      <div className="App">
        <Header />
        <Routes onChange={this.handleRoute}>
          <Route path="*" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

// export default class App extends Component {

// 	/** Gets fired when the route changes.
// 	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
// 	 *	@param {string} event.url	The newly routed URL
// 	 */
// 	handleRoute = e => {
// 		this.currentUrl = e.url;
// 	};

// 	render(props) {
// 		return (
// 			<Provider value={props}>
// 				<div className="App">
// 					{/* <Header /> */}
// 					<Router onChange={this.handleRoute}>
// 						{/* Pages */}
// 						<Home path="/" />
// 						{/* <Blogs path="/blogs/" /> */}
// 						{/* <Blog path="/blog/:name" /> */}
// 						<Contact path="/contact/" />
// 						{/* <ContactSuccess path="/contact/success" /> */}
// 						{/* <NotFoundPage type="404" default /> */}
// 					</Router>
// 				</div>
// 			</Provider>
// 		);
// 	}
// }
