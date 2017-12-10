import Header from "./Header";           


            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form onSubmit={ this.newGuestSubmitHandler } >
                    <input 
                        type="text" 
                        onChange={ this.handleNameInput }
                        value={ this.state.pendingGuest }
                        placeholder="Invite Someone" />
                    <button type="submit" name="submit" value="submit">Submit</button>
                </form>
            </header>