import React, { useCallback, useContext } from "react"
import { Language } from "../../context/Language"
import Button from "./Button"
const ButtonList = (props) => {
	// Use Context hook
	const ctx = useContext(Language)
	const dispatchGlobal = props.dispatchGlobal
	const buttonList = useCallback(() => {
		const arr = []
		for (const element in ctx.mainMenu) {
			// Pushing buttons into the array
			arr.push(
				<Button
					className='mainMenu'
					reference={element}
					value={element}
					key={element + Math.floor(Math.random()).toString}
					item={ctx.mainMenu[element]}
					dispatchGlobal={dispatchGlobal}
				>
					{element}
				</Button>
			)
		}
		return arr
	}, [ctx, dispatchGlobal])
	return <>{buttonList()}</>
}
export default ButtonList
