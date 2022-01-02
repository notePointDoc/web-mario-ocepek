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
		to: "correodelamierdaaa@gmail.com",
		subject: `${req.body.name} quiere hacer música contigo!!!`,
		text: message + " | Sent from: " + email,
		html: `<div> 
		<h1>Nombre: ${req.body.name}</h1>
		<p> ${req.body.message}</p>
		<p> Contacto: ${req.body.email}</p>
		</div>`,
	}
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err)
		else console.log(info)
	})
	res.status(200)
}

const password = process.env.GMAIL_PASWORD
