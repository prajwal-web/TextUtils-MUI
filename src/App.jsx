
// import Accordian from "./components/Accordian"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme/theme"
import { useState } from "react"


function App() {
 const [mode, setMode] = useState("black")
 const [btnText,setBtnText] = useState("Enable Dark Mode")
const toggleMode = () =>{
  if(mode==='black'){
    document.body.style.backgroundColor="#042743"
    setMode('white')
    setBtnText("Enable Light Mode")
  }else{
     document.body.style.backgroundColor="white"
     setMode('black')
     setBtnText("Enable Dark Mode")
  }
}
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <ThemeProvider theme={theme}>

      {/* <Accordian/> */}
      <TextForm mode={mode} />
      </ThemeProvider>
    </>
  )
}

export default App
