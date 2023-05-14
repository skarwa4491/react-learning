import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function toUpperCase(e) {
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.showAlert("Converted to upper case" , "success")
  }

  function setTextAreaValue(e) {
    setText(e.target.value);
  }

  function toLowerCase(e) {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Converted to Lower case" , "success")
  }

  function clearText() {
    setText("");
    props.showAlert("Text cleared" , "success")
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard" , "success")
  }

  function removeSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces" , "success")
  }
  return (
    <>
      <div className="ms-3 me-3">
        <h3 className="my-3">{props.heading}</h3>
        <div className="mb-3 mx-1">
          <textarea
            className="form-control"
            id="textArea"
            rows="8"
            placeholder="enter text here"
            value={text}
            onChange={setTextAreaValue}
          ></textarea>
          <button
            type="button"
            className={`btn btn-${
              props.darkMode ? "dark" : "primary"
            } mx-1 my-3`}
            onClick={toUpperCase}
            id="to-upper-case"
          >
            Convert to Upper Case
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.darkMode ? "dark" : "primary"
            } mx-1 my-3`}
            onClick={toLowerCase}
            id="to-lower-case"
          >
            Convert to Lower Case
          </button>

          <button
            type="button"
            className={`btn btn-${
              props.darkMode ? "dark" : "primary"
            } mx-1 my-3`}
            onClick={clearText}
            id="clear"
          >
            Clear
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.darkMode ? "dark" : "primary"
            } mx-1 my-3`}
            id="clear"
            onClick={removeSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.darkMode ? "dark" : "primary"
            } mx-1 my-3`}
            id="copyText"
            onClick={copyText}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div className="container ms-3 me-3">
        <h3 className="my-3">Text Summary</h3>
        <ul>
          <li>total words : {text.split(" ").length}</li>
          <li>total characters : {text.length}</li>
        </ul>
        <h3>Preview:</h3>
        <p>{text === "" ? "enter something to preview" : text}</p>
      </div>
    </>
  );
}
