import React from "react"
export const languageList = {
	español: {
		mainMenu: {
			about: "conóceme",
			listen: "escucha",
			collab: "collab",
		},
		aboutMenu: {
			about: "quien soy",
			work: "trabajos",
			concerts: "concietos",
		},
		text: {
			about: {
				title: "Mario Ocepek",
				paragraph: "Esto es un párrafo como otro cualquiera",
			},
			work: { title: "Dooms Days", paragraph: "Otro párrafo" },
			concerts: {
				title: "Concerts",
				paragraph: "Otro páragraph como otro cualquiera, exactamente",
			},
		},
		collab: {
			title: "Trabajemos Juntos!!!",
			name: "nombre",
			email: "email",
			message: "mensaje",
			policy: "Acepto la política de datos que si tal cual nosequé",
			submit: "ENVIAR",
		},
	},
	english: {
		mainMenu: {
			about: "about",
			listen: "listen",
			collab: "collab",
		},
		aboutMenu: {
			about: "about",
			work: "work",
			concerts: "concerts",
		},
		text: {
			about: {
				title: "Mario Ocepek",
				paragraph: "This is a english paragraph",
			},
			work: { title: "Dooms Days", paragraph: "Another paragraph" },
			concerts: {
				title: "Concerts",
				paragraph: "Other paragraph like no other",
			},
		},
		collab: {
			title: "Lets Work Together!!!!",
			name: "name",
			email: "email",
			message: "message",
			policy: "I accept that my data is used to do great music",
			submit: "SUBMIT",
		},
	},
}
export const Language = React.createContext()
