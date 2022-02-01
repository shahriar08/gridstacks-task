import { CardContent, Typography } from '@material-ui/core';
import { Box, Card, CardMedia } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{mt:1,backgroundColor:'#'}}>
            <Card sx={{maxWidth:1150 , m:"auto"}}>
                <CardMedia component="img"
                            height="250"
                            image="https://i.ibb.co/qrjcv6X/download.png"
                />
                    
                <CardContent style={{width:'120px',height:'120px',background:'white',textAlign:'left',marginTop:'-70px',padding:'20px'}}>
                    <Typography>
                        <img style={{height:'100px',width:'100px',marginLeft:'10px',borderRadius:'40px',}} src='https://i.ibb.co/7yf2czj/download.png' alt=""/>
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
};

export default Banner;