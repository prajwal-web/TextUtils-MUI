/* eslint-disable react/prop-types */
import Alert from '@mui/material/Alert';

export default function DissAlert({alert}) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <>
      
      {alert && <Alert
        severity={`${alert.type}`}  
      >
       {capitalize(alert.type)} : {alert.msg}
      </Alert>}
    </>
  )
}
