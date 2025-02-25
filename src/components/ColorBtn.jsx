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
// eslint-disable-next-line react/prop-types
export default function ColorBtn({mode,bgColor}) {
  return (
    <>
    <Container sx={{fontWeight:600,color:mode==='black'?'black':'white'}}>

    Blue
    <Switch {...label}  onClick={()=>bgColor('blue')}  />
    Purple
      <Switch {...label} onClick={()=>bgColor('purple')} color="secondary" />
      Orange
      <Switch {...label} onClick={()=>bgColor('orange')} color="warning" />
      green
      <Switch {...label}  onClick={()=>bgColor('green')} color="success" />
      Pink
      <PinkSwitch {...label}  onClick={()=>bgColor('pink')} />
    </Container>
    </>
  );
}
