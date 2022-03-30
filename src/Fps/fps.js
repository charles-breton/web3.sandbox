import React, { Component } from 'react';
import './Fps.css';
class Fps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fps: 0,
        }
        // FPS COUNTER

        let divFps = document.getElementById("fps");
        // divFps.innerHTML = engine.getFps().toFixed() + " fps";
        console.log("HELLO WORLD");

    }

    updateContent = () => {
        this.setState({ message: "Updated Content!" });
    }

    render() {
        return (
            <div className="fps">0</div>
        );
    }
}




