import style from "./style.module.css";

const photographs = () => {
	return (
		<div className={style.pageContact}>
			<h1 className={style.pageTitle}>Contact me</h1>
			<div className={style.formWrapper}>
				<p className={style.pageBody}>
					<div>Hi!</div>
					<div>If you are interested in my work and are looking to contact me for a contract please use the following form to contact me.</div>
					<div>&nbsp;</div>
					<div>Cheers <span role="img" aria-label='Cheers emoji'>🍻</span></div>
				</p>
				<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<input type="text" name="name" placeholder="Name" required />
					</p>
					<p>
						<input type="email" name="email" placeholder="E-Mail" required />
					</p>
					<p>
						<textarea name="message" placeholder="Message" />
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default photographs;
