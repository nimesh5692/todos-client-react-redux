import React, { useState, useEffect } from 'react'

import { useDispatch } from "react-redux";
import { logout as attemptLogout } from "../../../actions/authActions";

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Switch,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Menu,
    Divider
} from "@material-ui/core";
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';
import stylesheet from "./navbar-styles";

const Navbar = ({ isAuth }) => {
    const styles = stylesheet();

    const dispatch = useDispatch();
        
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        setAuth(isAuth);
    }, [isAuth]);

    const handleLogout = () => {
        handleClose();
        dispatch(attemptLogout());
    };
    
    return (
        <AppBar position="static" className={styles.root}>
            <Toolbar>
                <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <Typography className={styles.title}>
                    My Tasks
                </Typography>
                {auth && (
                    <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                    </div>
                )}
            </Toolbar>
            <Divider />
            <Typography variant="h5" className={styles.heading}>
                Marketing Campaign
            </Typography>
        </AppBar>
    )
}

export default Navbar
