require("dotenv").config()
let nodemailer = require("nodemailer")
export default function (req, res) {
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "lawebdelmario@gmail.com",
			pass: password,
		},
		secure: true,
	})
	const { email, name, message } = req.body
	const mailData = {
		from: "lawebdelmario@gmail.com",
		to: "mario.ocepek.music@gmail.com",
		subject: `TU PAGINA WEB`,
		text: message + " | Sent from: " + email,
		html: `<div> 
		<h1>Nombre: ${name}</h1>
		<p> ${message}</p>
		<p> Contacto: ${email}</p>
		</div>`,
	}
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err)
		else console.log(info)
	})
	res.status(200)
}

const password = process.env.GMAIL_PASWORD
