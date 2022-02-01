import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Avatar, Container, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navber = () => {
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            color: 'black',
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    })
    const { navItem, navIcon, navItemContainer } = useStyle()

    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Home</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Car Collection</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Reviews</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Dashboard</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="outlined" color="inherit">Sign In</Button></ListItemText>
                </ListItem>

            </List>
            <Divider />
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: '#fff' }} position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 1, color: '#17B978' }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" component="div" sx={{ flexDirection: 'row-reverse', mx: "auto" }}>
                                <Box className={navItemContainer} sx={{ mx: "auto" }}>

                                </Box>

                            </Typography>
                            <Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Company</Button>
                            <Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Find Candidate</Button>
                            <Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Guide</Button>
                            <Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Hi,Elise!</Button>
                            <Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} color="inherit">Login</Button>

                        </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navber;