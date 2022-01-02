require("dotenv").config()
let nodemailer = require("nodemailer")
export default async (req, res) => {
	const password = process.env.GMAIL_PASWORD
	const { name, email, message } = req.body
	console.log("ESTA ES LA ACTUALIZADA")
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "lawebdelmario@gmail.com",
			pass: password,
		},
		secure: true,
	})

	await new Promise((resolve, reject) => {
		// verify connection configuration
		transporter.verify(function (error, success) {
			if (error) {
				console.log(error)
				reject(error)
			} else {
				console.log("Server is ready to take our messages")
				resolve(success)
			}
		})
	})

	const mailData = {
		from: {
			name: "web",
			address: "lawebdelmario@gmail.com",
		},
		replyTo: email,
		to: "mario.ocepek.music@gmail.com",
		subject: `form message`,
		text: message,
		html: `<div>
		<h1>${name} quiere hacer música contigo!!!!</h1>
		<p>${message}</p>
		<br/>
		<p>Contacto: ${email}</p></div>`,
	}

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(mailData, (err, info) => {
			if (err) {
				console.error(err)
				reject(err)
			} else {
				console.log(info)
				resolve(info)
			}
		})
	})

	res.status(200).json({ status: "OK" })
}
