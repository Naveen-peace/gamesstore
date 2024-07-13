import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Nexticon from '../asset/icon/next.jsx';
import Download from '../asset/icon/download.jsx';
import ButtonComponent from '../components/ButtonComponent.jsx';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({ toggleDrawer, open }) {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        toggleDrawer(false)();
    };

    const handleScrollToSection = (id) => {
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        toggleDrawer(false)();
    };

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box
                sx={{ width: 250,height:1200, bgcolor: 'black', color: 'white' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <IconButton
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon sx={{ color: 'white' }} />
                </IconButton>
                <List sx={{ mt: 4 }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleScrollToSection('game-sale-head')}>
                            <ListItemText primary="Store" sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Common questions" sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Help" sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Support" sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigate('/cart')}>
                            <ListItemText primary="Cart" sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <div className="nav-btn" style={{ padding: '0 16px' ,display:'grid'}}>
                    <ButtonComponent
                        customClass="nav-1-btn"
                        label={
                            <>
                                <Nexticon />
                                <span className=''>Begin session</span>
                            </>
                        }
                        width={"144px"}
                        height={"48px"}
                    />
                    <ButtonComponent
                        customClass="nav-1-btn"
                        label={
                            <>
                                <Download />
                                <span className=''>Epic Games</span>
                            </>
                        }
                        width={"144px"}
                        height={"48px"}
                    />
                </div>
            </Box>
        </Drawer>
    );
}
