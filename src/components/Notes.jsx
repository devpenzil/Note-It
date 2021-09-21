import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Notes.scss'
function Notes() {
    const [accessnotes, setAccessnotes] = useState([])
    const fetchingnotes = () => {
         setAccessnotes(JSON.parse(localStorage.getItem("Notes")))
    }
    useEffect(() => {
        fetchingnotes()
    }, [])
    const deletenotes = (id) => {
        
        let subdelete = accessnotes.splice(id,1)
        setAccessnotes(subdelete)
        localStorage.setItem("Notes", JSON.stringify(accessnotes))
        window.location.reload()
        
    }
    return (
        <div className="container Notes">
            {accessnotes.map((obj, id)=>{
                return(
                    <div key={id} className="note">
                        <div className="bin"><span onClick={()=>deletenotes(id)}>🗑</span></div>
                        <div className="title">{obj.title}</div>
                        <div>{ obj.notecontent }</div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Notes
