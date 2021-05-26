import React from 'react'
import { useState } from 'react'
import Submit from './Submit'
import './Hashinput.css'

function Hashinput() {
    var [inputHash, setInputHash] = useState(null)

    function updateHash(e) {
        setInputHash(e.target.value)
    }

    return (
        // Hashinput
        <div>
            <div className="hash-input-padding">
                <input type="text" className="hash-input" id="hash-input-id" placeholder="Event Hash (e.g: abcd-012345-br)" pattern="[A-Za-z]{4}-[0-9]{6}-[a-z]{2}" onChange={updateHash} required />
            </div>
            <p>This is the 12 or 16 digit hash that was given to you for this event.</p>
            <Submit hash={inputHash} />
        </div>
    )
}

export default Hashinput;