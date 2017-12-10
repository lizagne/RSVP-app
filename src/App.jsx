import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {

    state = {
        isFiltered: false,
        pendingGuest: "",

        guests: [
          {
            name: 'Treasure',
            isConfirmed: false,
            isEditing: false,
          },
           {
            name: 'Nick',
            isConfirmed: true,
            isEditing: false,
          },
          {
            name: 'Matt K',
            isConfirmed: true,
            isEditing: true,
          },
        ]
    }

    toggleGuestPropertyAt = (property, indexToChange) => {
        
        this.setState({
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                  return {
                    ...guest,
                    [property]: !guest[property]
                  };
                }
                return guest;
            })
        });
    }    

    setNameAt = (name, indexToChange) => {
        this.setState({
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                  return {
                    ...guest,
                    name,
                  };
                }
                return guest;
            })
        });
    }        

    toggleConfirmationAt = index => {
        this.toggleGuestPropertyAt("isConfirmed", index);
    }

    removeGuestAt = index => {
        this.setState({
            guests: [
                ...this.state.guests.slice(0, index), //returns a smaller new array. 
                ...this.state.guests.slice(index + 1), //this is creating new arrays to have the guest removed
            ]
        })
    }

    toggleEditingAt = index => {
        this.toggleGuestPropertyAt("isEditing", index);
    }

    toggleFilter = () => {
        this.setState({ isFiltered: !this.state.isFiltered });
    }

    handleNameInput = e => {
        this.setState({ pendingGuest: e.target.value });
    }

    newGuestSubmitHandler = e => {
        e.preventDefault();
        this.setState({ 
            guests: [
                {
                    name: this.state.pendingGuest,
                    isConfirmed: false,
                    isEditing: false
                },

                ...this.state.guests
            ],
            pendingGuest: ''
        });    
    }

    getTotalInvited = () => this.state.guests.length;
    //getAttendingGuests = () => 
    //getUnconfirmedGuests = () => 

    render() {
            return (
            <div className="App" id="root">
                <Header 
                    newGuestSubmitHandler= { this.newGuestSubmitHandler }
                    pendingGuest={ this.state.pendingGuest }
                    handleNameInput={ this.handleNameInput }
                />
                <MainContent 
                    toggleFiler={ this.toggleFilter }
                    isFiltered={ this.state.isFiltered }
                    totalInvited={ this.totalInvited }
                    numberAttending={ this.numberAttending }
                    numberUnconfirmed={ this.numberUnconfirmed }
                    guests={ this.state.guests }
                    toggleConfirmationAt={ this.toggleConfirmationAt }
                    toggleEditingAt={ this.toggleEditingAt }
                    setNameAt={ this.setNameAt }
                    removeGuestAt={ this.removeGuestAt }
                    pendingGuest={ this.state.pendingGuest }
                />
            </div>
            );
        }
}

export default App;
