// import { Container, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react";
import style from "./style.module.css";


const Contact = () => {
	// const navigate = useNavigate();
	// const [submitted, setSubmitted] = useState(false);
	// useEffect(() => {
	// 	if (submitted) {
	// 		navigate('/contact/success');
	// 	}
	// }, [submitted]); // This effect runs whenever `submitted` changes

	// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const formData = new FormData(event.target as HTMLFormElement).toString();
	// 	try {
	// 		await fetch('/', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 			// body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, String(value)])).toString(),
	// 			body: new URLSearchParams(formData).toString(),
	// 		});
	// 		setSubmitted(true);
	// 	} catch (error) {
	// 		console.error('Form submission error:', error);
	// 	}
	// };

	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const form = event.target as HTMLFormElement;
	// 	fetch(form.action, {
	// 		method: 'POST',
	// 		body: new FormData(form),
	// 	})
	// 		.then(() => console.log('Form successfully submitted', form))
	// 		.catch((error) => alert(error));
	// 	setSubmitted(true);
	// };

	// if (submitted) {
	// 	navigate('/contact/success');
	// }


	return (
		<Container as="main" className={style.pageContact}>
			<div className={style.pageContact}>
				<h1 className={style.pageTitle}>Contact me</h1>
				<h2>Hi!</h2>
				<div className={style.formWrapper}>
					<p className={style.pageBody}>
						If you are interested in my work and are looking to contact me for a contract please use the following form to contact me.
					</p>
					<p>Cheers <span role="img" aria-label='Cheers emoji'>🍻</span></p>
					{/* <Form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}> */}
					<form action="" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
						<input type="hidden" name="form-name" value="contact" />
						<input type="text" name="name" placeholder="Name" required />
						<input type="email" name="email" placeholder="E-Mail" required />
						<textarea name="message" placeholder="Message" />
						<button type="submit">Send</button>
					</form>
					{/* <Form onSubmit={handleSubmit} action="#" method="POST" data-netlify="true">
						<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" name="name" placeholder="Enter your name" required />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" name="email" placeholder="Enter your email" required />
						</Form.Group>
						<Form.Group controlId="formBasicMessage">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" name="message" placeholder="Enter your message" />
						</Form.Group>
						<button type="submit">Send</button>
					</Form> */}
				</div>
			</div>
		</Container>
	);
};

export default Contact;
