import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
import React, { useState } from 'react'
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#255fca';
      showAlert("dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text you anlyze" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
      {/* <About/> */}

    </>

  );
}

export default App;
