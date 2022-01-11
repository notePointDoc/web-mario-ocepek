require("dotenv").config()
let nodemailer = require("nodemailer")
export default function (req, res) {
	const password = process.env.GMAIL_PASWORD
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "lawebdelmario@gmail.com",
			pass: password,
		},
		secure: true,
	})
	const { email, userName, message } = req.body
	const mailData = {
		from: "lawebdelmario@gmail.com",
		to: "mario.ocepek.music@gmail.com",
		subject: `TU PAGINA WEB`,
		text: message + " | Sent from: " + email,
		html: `<div> 
		<h1>Nombre: ${userName}</h1>
		<p> ${message}</p>
		<p> Contacto: ${userName}</p>
		</div>`,
	}
	transporter.sendMail(mailData, function (err, info) {
		if (err) {
			res.status(400)
		} else {
			res.status(200).json({ message: "Todo bien!" })
		}
	})
}
