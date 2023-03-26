import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Grid xs={8}>
                        <Typography variant='h5'>
                            Tommy Nguyen's Project
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
         </Box>
    )

}

export default Header