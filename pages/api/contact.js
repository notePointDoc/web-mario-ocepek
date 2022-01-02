export default function (req, res) {
	require("dotenv").config()
	let nodemailer = require("nodemailer")
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
	const { email, name, message } = req.body
	const mailData = {
		from: "lawebdelmario@gmail.com",
		to: "mario.ocepek.music@gmail.com",
		subject: `${name} quiere hacer música contigo!!!`,
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
