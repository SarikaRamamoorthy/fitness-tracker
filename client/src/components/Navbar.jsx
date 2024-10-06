import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FitnessCenterIcon />
            </IconButton>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
                mr: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing:{ xs:'.2rem', sm: '.3rem'},
                color: 'white.main',
                textDecoration: 'none',
                flexGrow: 1
            }}
            >
            <Box component="span" sx={{color:"gold.main"}}>TRACK</Box>FIT
            </Typography>
            <Link to="/home" >
                <Button color="inherit">
                    <Typography
                        sx={{
                        display: { xs:'none',sm : 'inline'} ,
                        "&:hover": { color: 'gold.main' },
                        fontFamily: 'monospace',
                        letterSpacing: '.3rem',
                        fontWeight: 700,
                        color: "white.main"
                    }}>
                        Home
                    </Typography>
                </Button>
            </Link>
            <Link to="/about">
                <Button  color="inherit">
                    <Typography
                        sx={{
                            display: { xs:'none',sm : 'inline'} ,
                            "&:hover": { color: 'gold.main' },
                            fontFamily: 'monospace',
                            letterSpacing: '.3rem',
                            fontWeight: 700,
                            color: "white.main"
                        }}>
                        ABOUT
                    </Typography>
                </Button>
            </Link>
            <Link to="/sign-in">
                <Button component="a" href="/sign-in" color="inherit">
                    <Typography
                        sx={{
                            "&:hover": { color: 'gold.main' },
                            fontFamily: 'monospace',
                            letterSpacing: '.3rem',
                            fontWeight: 700,
                            color: "white.main"
                        }}>
                        Login
                    </Typography>
                </Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}