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
				paragraph: `
					Se dedica a hacer musiquita y es alto de cojones el cabrón.
					Tambien es rubio. Es como un alemán sureño. Viste un     moreno cangrejo cocido del que lleva viviendo toda la vida en un lugar al que no está genéticamente adaptado. 
					Lo importatnte es que hace musiquita y es to buena peña. `,
			},
			work: {
				title: "Dooms Days",
				paragraph: `En mitad de la pandemia se clavaron trmendo disco, muy chulongo con el bueno de Antón (aka g parsi), maestro de la lírica y el ligoteo sibilino.
				Aquí hace falta más texto o letra más grande`,
			},
			concerts: {
				title: "Concerts",
				paragraph: `Esto es otro texto, para que quede bien la verdad ya etsoy hasta la polla de esto. No tengo ni puta idea de diseño. Creo que está quedando bien pero vamos currar así sin pitis pues está siendo duro.
				El snus me llega en una semana. Bien. `,
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
				paragraph: `He is dedicated to making music and the bastard is tall as hell.
He is also blond. He is like a southern German. You saw a brown cooked crab that it has lived all its life in a place to which it is not genetically adapted.
The important thing is that he makes music and is a good rock.`,
			},
			work: {
				title: "Dooms Days",
				paragraph: `In the middle of the pandemic they nailed a tremendous album, very cool with the good old Antón (aka g parsi), master of the lyric and the sibylline flirtation.
Here you need more text or larger font`,
			},
			concerts: {
				title: "Concerts",
				paragraph: `Se dedica a hacer musiquita y es alto de cojones el cabrón. Tambien es rubio. Es como un alemán sureño. Viste un moreno cangrejo cocido del que lleva viviendo toda la vida en un lugar al que no está genéticamente adaptado. Lo importatnte es que hace musiquita y es to buena peña.`,
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
