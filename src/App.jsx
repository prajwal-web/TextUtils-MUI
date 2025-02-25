
// import Accordian from "./components/Accordian"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme/theme"
import { useState } from "react"
import "./styles/App.css"
import DissAlert from "./components/DissAlert"


function App() {
 const [mode, setMode] = useState("black")
 const [btnText,setBtnText] = useState("Enable Dark Mode")
 const [alert,setAlert] = useState("");

 //Toggle mode
const toggleMode = () =>{
  if(mode==='black'){
    document.body.style.backgroundColor="#042743"
    setMode('white')
    setBtnText("Enable Light Mode")
    showAlert('success','Dark Mode has been enabled.')
  }else{
    document.body.style.backgroundColor="white"
    setMode('black')
    setBtnText("Enable Dark Mode")
    showAlert('success','Light Mode has been enabled.')
  }
}

//Alert display
const showAlert = (type,message)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
     setAlert("")
  },2000)
}
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <DissAlert alert={alert}/>
      <ThemeProvider theme={theme}>

      {/* <Accordian/> */}
      <TextForm mode={mode} showAlert={showAlert} />
      </ThemeProvider>
    </>
  )
}

export default App
