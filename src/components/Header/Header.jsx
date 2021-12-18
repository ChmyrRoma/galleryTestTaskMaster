import React from 'react';
import style from './Header.module.css';
import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Grid container direction='row' className={style.head}>
            <Grid container alignItems='center'>
                <NavLink className={style.button} to='/'>
                    <Button variant='contained' size='small'>Home</Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}

export default Header;
