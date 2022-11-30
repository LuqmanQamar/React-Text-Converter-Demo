import { useState } from "react";
import Alert from "./Components/Alert";
import FormText from "./Components/FormText";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/About";


function App() {

  const [mode, setMode] = useState('light')
  const [greenMode, setGreenMode] = useState('light')
  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled!", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled!", "success")
    }
  }

  const toggleGreenBtn = () => {
    if (greenMode === 'light') {
      setGreenMode('#00ff00')
      document.body.style.backgroundColor = '#00ff00'
      showAlert('Green colour is enabled', 'success')
    } else {
      setGreenMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light colour is enabled', 'success')
    }
  }


  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <div>



      <Router>
        <Navbar title="Text-Utils" about="About Us" mode={mode} toggleBtn={toggleButton} toggleGreenBtn={toggleGreenBtn} greenMode={greenMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<FormText textt="Text to Analyze" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
