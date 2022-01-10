require("dotenv").config()
let nodemailer = require("nodemailer")
export default function (req, res) {
	const password = process.env.GMAIL_PASWORD
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "YOUR_GMAIL",
			pass: password,
		},
		secure: true,
	})
	const { email, name, message } = req.body
	const mailData = {
		from: "FROM_EMAIL",
		to: "TO_EMAIL",
		subject: `SUBJECT`,
		text: message + " | Sent from: " + email,
		html: `<div> 
		<h1>Nombre: ${name}</h1>
		<p> ${message}</p>
		<p> Contacto: ${email}</p>
		</div>`,
	}
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err, "No se envían los putos correos")
		else console.log(info)
	})
	res.status(200)
}
