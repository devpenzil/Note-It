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
    return (
        <div className="container Notes">
            {accessnotes.map((obj, id)=>{
                return(
                    <div key={id} className="note">
                        <div className="bin"><span>🗑</span></div>
                        <div className="title">{obj.title}</div>
                        <div>{ obj.notecontent }</div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Notes
