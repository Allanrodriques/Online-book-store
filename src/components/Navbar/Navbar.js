import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography, Menu, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
// import logo from '../../assets/logo.jpg'
import useStyles from './Styles';
import { Link } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src="https://i.pinimg.com/564x/5a/bb/96/5abb96afba759e3fb300dc24bfd27207.jpg" alt="commerce.js" height="50px" className={classes.image} /> Allan's Store
                </Typography>
                <div className={classes.grow} />
                <div className={classes.buttons}>
                    <IconButton component={Link} to="/cart" aria-label='Show cart items' color="inherit">
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
