import React from 'react'
import { useState } from 'react'
import './NavBar.scss'
function NavBar() {
    const [shownav, setShownav] = useState(false)
    return (
        <div className="NavBar container">
            <div className="nav">
                <div>
                    logo
                </div>
                <div>
                    <button onClick={()=>setShownav(true)} className="create">🖋 Create a new note</button>
                </div>
            </div>
            {shownav ?
            <div className="create-note">
                <div className="content">
                    <div className="heading">Create a Note</div>
                    <div className="form">
                        <input placeholder="Enter your title here" className="note-title" type="text" name="title" id="title" />
                        <textarea placeholder="Enter Your Note here" className="note-note" name="note" id="note" cols="30" rows="15"></textarea>
                    </div>
                    <div className="ctas">
                        <button>Add to notes</button>
                        <button className="close-button" onClick={ () => setShownav(false) }>Close</button>  
                    </div>   
                </div>
                    
            </div>
            : ""}
        </div>
    )
}

export default NavBar
