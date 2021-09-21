import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.png'
import './NavBar.scss'
function NavBar() {
    const [shownav, setShownav] = useState(false)
    const [notetitle, setNotetitle] = useState("")
    const [notenote, setNotenote] = useState("")
    
    if (localStorage.length === 0) {
        localStorage.setItem("Notes", JSON.stringify([{title : "Create your Simple Notes" , notecontent : "This is a Simple app for store your simple notes for easy access"}]))
    }
    const addnote = () => {
        if (notetitle === "" || notenote === "") {
            alert("Please fill all the fields")
            return 0
        }
        const note = {title : notetitle , notecontent : notenote}
        let accessnotes = JSON.parse(localStorage.getItem("Notes"))
        accessnotes = accessnotes.concat(note)
        localStorage.setItem("Notes", JSON.stringify(accessnotes))
        setShownav(false)
        setNotenote("")
        setNotetitle("")
        window.location.reload()
    }

    return (
        <div className="NavBar ">
            <div className="nav">
                <div>
                    <img src={logo} alt="logo" style={{width:"70px"}}/>
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
                        <input onChange={ (e) => setNotetitle(e.target.value)} placeholder="Enter your title here" className="note-title" type="text" name="title" id="title" />
                        <textarea onChange={ (e) => setNotenote(e.target.value)} placeholder="Enter Your Note here" className="note-note" name="note" id="note" cols="30" rows="15"></textarea>
                    </div>
                    <div className="ctas">
                        <button onClick={addnote}>Add to notes</button>
                        <button className="close-button" onClick={ () => setShownav(false) }>Close</button>  
                    </div>  
                    <div>
                        Crafted by <a href="https://github.com/devpenzil">Devpenzil</a>
                    </div> 
                </div>
                    
            </div>
            : ""}
        </div>
    )
}

export default NavBar
