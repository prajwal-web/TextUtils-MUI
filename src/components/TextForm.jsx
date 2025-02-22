import * as React from 'react';
import { Button,Box, Container, TextareaAutosize } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function TextForm({mode}) {
 const [value,setValue] = React.useState('');

  const handleUpperCase = () =>{
    setValue(value.toUpperCase())
  }
  
  const handleLowerCase = () =>{
    setValue(value.toLowerCase())
  }
  
  const handleClear = () =>{
    setValue('')
  }
  const handleCapitalize = () =>{
    const captext = value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  setValue(captext);

  }
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
  }

  const handleReverseText = () =>{
    var words = value.split(" "); 
  var newWords = words.map(word => word.split("").reverse().join("")); 
  var newText = newWords.join(" "); 
   setValue(newText)
  }
  
  return (
    <>
    <Container sx={{color:mode==='black'?'black':'white'}} >
    <h1>Enter the text to analyze below</h1>

    <TextareaAutosize aria-label="minimum height" style={{width:'100%',fontSize:'18px',marginTop:15,background:mode==='white'?'gray':'white',color:mode==='black'?'black':'white',border:mode==="black"?'2px solid black':'2px solid white'}} 
    minRows={8} value={value} placeholder='Enter Text Here' onChange={(e)=>setValue(e.target.value)}/>
    <Box >
    <Button variant='contained' sx={{margin:1}} onClick={handleUpperCase}>Upper Case</Button>
    <Button variant='contained' sx={{margin:1}} onClick={handleLowerCase}>Lower Case</Button>
    <Button variant='contained' sx={{margin:1}} onClick={handleCapitalize}>Capitalize</Button>
    <Button variant='contained' sx={{margin:1}} onClick={handleReverseText}>Reverse Text</Button>
    <Button variant='contained' sx={{margin:1}} onClick={handleCopy}>Copy Text</Button>
    <Button variant='contained' sx={{margin:1}} onClick={handleClear}>Clear</Button>
    </Box>
    <div className="container" >
      <h1>Your Text Summary</h1>
      <p>{value.split(" ").length} words and {value.trim().replace(/^\s+|\s+$/g,'').length} characters</p>
      <h1>Preview</h1>
      <p>{value.length>0?value:"Enter something in the textbox above to preview it here..."}</p>
    </div>
    </Container>
    </>
  );
}
