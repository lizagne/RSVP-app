import React from "react";
import GuestName from "./GuestName";

const Guest = props => (
		
	<li className="responded">
		<GuestName 
			isEditing={ props.isEditing }
			handleNameEdits={ e=> props.setName(e.target.value) }>
			{ props.name }
		</GuestName>
		<label>
			<input 
				type="checkbox" 
				checked={ props.isConfirmed } 
				onChange={ props.handleConfirmation }
			/> Confirmed
		</label>
		<button onClick={ props.handleToggleEditing }>

			{ props.isEditing ? "save" : "edit" } {/*Ternary operator here to change the word in the button to save if it's edited*/}

		</button>
		<button>remove</button>
	</li>	
);



export default Guest;