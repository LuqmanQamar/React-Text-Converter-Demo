import { useState } from "react"
import React from 'react'

export default function FormText(props) {

    const [text, setText] = useState('')
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    const handleClick = () => {
        console.log('Convert to uppercase clicked')
        setText(text.toUpperCase())
        props.showAlert("Converted to upperCase", "success")
    }

    const handleClearClick = () => {
        console.log('Convert to uppercase clicked')
        setText('')
        props.showAlert("Text Cleared", "success")
    }

    const handleLoClick = () => {
        console.log('Convert to lowercase clicked')
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase", "success")
    }

    const changeHandle = (event) => {
        console.log('change hadle of textarea')
        setText(event.target.value)
    }

    // const toggleBtn = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText('Enable light Mode')
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }

    // }
    return (
        <>
            <div className='container my-3' style={{ backgroundColor: props.mode === "dark" ? 'light' : 'dark' }} >
                <div className="mb-3"  >
                    <label forhtml="text-box" className="form-label" style={{ color: props.mode === "dark" ? 'white' : 'black' }}>Enter Your {props.textt} </label>
                    <textarea className="form-control" id="text-box" value={text} onChange={changeHandle} style={{ backgroundColor: props.mode === "dark" ? 'grey' : 'white', color: props.mode === "dark" ? 'white' : 'black' }} rows="8" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn btn-primary mx-2" onClick={toggleBtn}>{btnText}</button> */}
            </div>
            <div className="container my-4" style={{ color: props.mode === "dark" ? 'white' : 'black' }} >
                <h2 >Summery of your Text</h2>
                <p >Contains {text.split(" ").filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                <p  >Time taken to read: {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                <h2 className="my-3" >Preview</h2>
                <p >{text.length > 0 ? text : 'Enter the text above to preview'}</p>
            </div>

        </>
    )
}
