import React from 'react'
import './NavBar.scss'
function NavBar() {
    return (
        <div className="NavBar container">
            <div className="nav">
                <div>
                    logo
                </div>
                <div>
                    <button className="create">Create a new note</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
