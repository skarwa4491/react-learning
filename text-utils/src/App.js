import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About.js";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#535c68" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let setMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          title="Text-Utils"
          home="Home"
          about="About"
          darkMode={darkMode}
          setMode={setMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact 
            path="/"
            element={
              <TextForm
                heading="Just Drop it"
                buttonName="Convert to Upper Case"
                darkMode={darkMode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
