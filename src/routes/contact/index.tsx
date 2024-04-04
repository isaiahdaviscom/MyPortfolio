import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import style from "./style.module.css";


const Contact = () => {
	const navigate = useNavigate();
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement).toString();
		try {
			await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				// body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, String(value)])).toString(),
				body: new URLSearchParams(formData).toString(),
			});
			setSubmitted(true);
		} catch (error) {
			console.error('Form submission error:', error);
		}
	};

	// if (submitted) {
	// 	navigate('/contact/success');
	// }

	useEffect(() => {
		if (submitted) {
			navigate('/contact/success');
		}
	}, [submitted]); // This effect runs whenever `submitted` changes
	
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
					{/* <Form onSubmit={handleSubmit}> */}
					<form action="" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
						<input type="hidden" name="form-name" value="contact" />
						<input type="text" name="name" placeholder="Name" required />
						<input type="email" name="email" placeholder="E-Mail" required />
						<textarea name="message" placeholder="Message" />
						<button type="submit">Send</button>
					</form>
					{/* </Form> */}
				</div>
			</div>
		</Container>
	);
};

export default Contact;
