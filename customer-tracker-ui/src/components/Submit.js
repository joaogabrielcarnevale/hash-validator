import React from 'react'
import './Submit.css';

function Submit(props) {

    function submitHash() {
        var inputHash = document.getElementById("hash-input-id").value
        fetch('/infos.json')
            .then((r) => r.json())
            .then((data) => {
                for (var i = 0; i < data.hashes.length; i++) {
                    if (props.hash === data.hashes[i]) {
                        // API call
                        const apiData = { hash: props.hash }
                        fetch(data.apiUrl, {
                            method: 'POST', // or 'PUT'
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Success:', data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            })

                        window.open(data.chimeMeetingURL, "_blank")
                        return
                    }
                }
                return alert("Invalid Hash!");
            })
    }

    if (String(props.hash).match('[A-Za-z]{4}-[0-9]{6}-[a-z]{2}')) {
        return (
            <div>
                <div className="submit-button-padding">
                    <button type="submit" className="submit-button" value="Submit" onClick={submitHash}>&#10003; Submit</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="submit-button-padding">
                    <button type="submit" className="submit-button-invalid" value="Submit">X Invalid Hash</button>
                </div>
            </div>
        );
    }
}

export default Submit;