import React, { useState } from 'react';
import Navicon from '../asset/icon/navicon.png';
import ButtonComponent from '../components/ButtonComponent.jsx';
import Nexticon from '../asset/icon/next.jsx';
import Download from '../asset/icon/download.jsx';
import { useNavigate } from 'react-router-dom';
import TemporaryDrawer from '../components/TemporaryDrawer.jsx';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function NavBar() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleScrollToSection = (id) => {
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };

    return (
        <nav className='nav-head'>
            <div className="container">
                <div className="nav-head-1">
                    <img onClick={() => handleNavigate('/')} src={Navicon} alt="Nav Icon" />

                    <div className="menubar">
                        <div className="nav-text">
                            <h5 onClick={() => handleScrollToSection('game-sale-head')}>Store</h5>
                            <h5>Common questions</h5>
                            <h5>Help</h5>
                            <h5>Support</h5>
                            <h5 onClick={() => handleNavigate('/cart')}>Cart</h5>
                        </div>
                        <div className="nav-btn">
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
                    </div>
                    <div className="menu-icon">
                    <IconButton style={{ color: 'gray' }} onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        </nav>
    );
}

export default NavBar;
