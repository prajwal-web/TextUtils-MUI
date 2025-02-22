import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import ColorBtn from './ColorBtn';
import Switch from '@mui/material/Switch';

const pages = ['Home', 'About', 'Contact'];
const label = { inputProps: { 'aria-label': 'Color switch demo' } };
// eslint-disable-next-line react/prop-types
export default function Navbar({mode,toggleMode,btnText}) {
  return (
   
   <>
     <AppBar position="static" sx={{backgroundColor:mode==='black'?'white':'gray',color:mode==='black'?'black':'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TextUtils
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{ display: { xs: 'block', md: 'none' }, }}
            >
              {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color:mode==='black'?'black':'white', display: 'block',fontWeight:700 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* <ColorBtn/> */}
          <Typography sx={{color:mode==='black'?'black':'white'}}>{btnText}</Typography>
          <Switch {...label} onClick={toggleMode}  color="black" />
        </Toolbar>
      </Container>
    </AppBar>
</>
);
}
