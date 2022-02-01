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
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
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
                    <ListItemText><Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Company</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Find Candidate</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Guide</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Dashboard</Button></ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText><Button style={{ color: 'gray', fontSize: 14 }} variant="outlined" color="inherit"><PermIdentityIcon sx={{ color: 'black' }} /> Hi,Elise! </Button></ListItemText>
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
                            sx={{ mr: 1, color: 'gray' }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography style={{ color: '#17B978' }} className='navLogo' variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ mx: "auto" }}>
                            <Box className={navItemContainer} sx={{ mx: "auto" }}>
                                <Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Company</Button>
                                <Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Find Candidate</Button>
                                <Button style={{ color: 'gray', fontSize: 14 }} variant="text" color="inherit">Guide</Button>
                                {/* <Typography style={{ borderRight: "0.1em solid black", padding: "0.1em" }}>
                                    
                                </Typography> */}

                                <Button style={{ color: '#F77631', fontSize: 14 }} variant="text" color="inherit"><PermIdentityIcon sx={{ color: 'black' }} /> Hi,Elise! </Button>
                            </Box>

                        </Typography>



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