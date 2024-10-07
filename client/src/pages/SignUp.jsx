import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {

    const [formData, setFormData] = useState({
        name: "",   
        email: "",  
        password: ""
    });

    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
    }
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }

    return (
        <Box component="div" style={{ "display" : "flex", "alignItems" : "center",  "marginTop": "6rem", "marginRight" : "5%"}}
        sx={{"flexDirection" : {xs : "column", md : "row"}, "gap" : {xs : "3rem"}}}>
        <Box component="div" sx={{"width" : {xs : "100%", md : "50%"}}}>
            <Box component="form" onSubmit={handleSubmit} action="" style={{"display": "flex", "flexDirection" : "column", "gap" : "2rem", "justifyContent" : "center", "alignItems" : "center"}}>
                <Typography variant='h5' sx={{color : "white.main",fontWeight: 700,}}>SIGN UP</Typography>
                <TextField id="name" label="Name" variant="filled" type='text' required
                sx={{
                    backgroundColor: "white.main",
                    width : "50%"
                }} 
                value={formData.name}
                onChange={handleChange}
                />
                <TextField id="email" label="Email" variant="filled" type='email' required
                sx={{
                    backgroundColor: "white.main",
                    width : "50%"
                }} 
                value={formData.email}
                onChange={handleChange}
                />
                <TextField id="password" label="Password" variant="filled" type='password' required
                sx={{
                    backgroundColor: "white.main",
                    width: "50%"
                }}
                value={formData.password}
                onChange={handleChange}
                />
                <Button type='submit'
                sx={{
                    borderRadius : "0.5rem",
                    backgroundColor: "gold.main",
                    padding: "0.5rem",
                    paddingLeft: "1.2rem",
                    paddingRight: "1.2rem",
                    marginBottom : { xs: "2rem", md : "0rem"}
                }}>
                    <Typography 
                        sx={{
                        fontFamily: 'monospace',
                        letterSpacing: '.1rem',
                        fontWeight: 900
                    }}>
                        Sign up
                    </Typography>
                </Button>
                <Typography sx={{
                        fontFamily: 'monospace',
                        letterSpacing: '.1rem',
                        fontWeight: 900,
                        color: "white.main"
                    }}>
                    Already have an account? 
                    <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                        <Typography component="span" sx={{ color: "gold.main", fontWeight: 'bold' }}> Sign In
                        </Typography>
                    </Link>
                </Typography>
            </Box>
        </Box>
        <img
        src="../images/signin image.svg"
        alt="workout image"
        loading="lazy"
        width="50%"
        />
    </Box>
    )
}