import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { Container } from '@mui/material';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };
export default function ColorBtn() {
  return (
    <>
    <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:70  ,fontWeight:600,color:'black'}}>

    Blue
    <Switch {...label}  />
    Purple
      <Switch {...label} onClick={(e)=>console.log(e.target.value)} color="secondary" />
      Orange
      <Switch {...label} onClick={(e)=>console.log(e.target.value)} color="warning" />
      Success
      <Switch {...label} onClick={(e)=>console.log(e.target.value)} color="success" />
      Pink
      <PinkSwitch {...label}onClick={(e)=>console.log(e.target.value)}  />
      Black
      <Switch {...label} onClick={(e)=>console.log(e.target.value)}  color="black" />
    </Container>
    </>
  );
}
