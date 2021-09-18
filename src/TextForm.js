
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("uppercase was clicked" +text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to upperCase","success");
    }
    const handleLoClick = () => {
        //console.log("uppercase was clicked" +text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowerCase","success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied","success");
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("No extra space ","success");
    }
    const handleOnChange = (event) => {
        //console.log("onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState();
    return (
        <div className="container" style={{color: props.mode === "dark" ? "white" : "#255fca"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#255fca" }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert top upercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert top lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>copy the entire trext</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>minimize the extra space</button>
            <div className="conatiner my-3" style={{color: props.mode === "dark" ? "white" : "#255fca"}}>
                <h1>Your Text summary</h1>
                {/* <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08*text.split(" ").length} minutes to read</p> */}
                <h2>priview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
