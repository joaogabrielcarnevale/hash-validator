import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        fetch('/infos.json')
            .then((r) => r.json())
            .then((data) => {
                console.log(data.eventName)
                console.log(data.eventDescription)
                setTitle(data.eventName)
                setDescription(data.eventDescription)
            })
    })

    return (
        // Header
        <div>
            <div className="event-name"> {title} </div>
            <p> {description} </p>
        </div>
    )
}

export default Header;