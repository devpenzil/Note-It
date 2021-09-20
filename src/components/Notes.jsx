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
            {accessnotes.map((obj)=>{
                return(
                    <div>
                        {obj.title}
                    </div>
                )
            })}
        </div>
    )
}

export default Notes
