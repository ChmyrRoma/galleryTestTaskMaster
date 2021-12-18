import React, { useState } from 'react';
import style from './BodyPage.module.css';
import heart from '../assets/images/heart.png';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const BodyPage = ({ id, auth, photo }) => {
    const [favorite, setFavorite] = useState(false)


    return (
        <Grid className={style.main}>
            <Grid>
                <Grid className={style.authInfo} key={id}>
                    <Grid>
                        <NavLink className={style.nameStyle} 
                            to={{
                                pathname: '/photoPage',
                                state: {id}
                            }}
                        >
                            <h3>{auth}</h3>
                        </NavLink>
                    </Grid>
                    <Grid>
                        <img src={photo} alt='' className={style.mainPhoto} />
                        <Grid container className={style.count}>
                            <img src={heart} alt='' onClick={() => setFavorite(!favorite)} />
                            <h3>{favorite ? 1 : 0}</h3>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BodyPage;
