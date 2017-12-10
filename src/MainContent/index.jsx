import React from "react";


import ConfirmedFilter from "./ConfirmedFilter";
import GuestList from "./GuestList";
import Counter from "./Counter";


const MainContent = props => (

    <div className="main">
        
        <ConfirmedFilter
            toggleFilter={ props.toggleFilter }
            isFiltered={ props.isFiltered }
        />
        <Counter 
            totalInvited={ props.totalInvited }
            numberAttending={ props.numberAttending }
            numberUnconfirmed={ props.numberUnconfirmed }
        />
      
        <GuestList
            guests={props.guests} 
            toggleConfirmationAt={ props.toggleConfirmationAt }
            toggleEditingAt={ props.toggleEditingAt }
            setNameAt={ props.setNameAt }
            isFiltered={ props.isFiltered }
            removeGuestAt={ props.removeGuestAt }
        />
    </div>

);

export default MainContent;