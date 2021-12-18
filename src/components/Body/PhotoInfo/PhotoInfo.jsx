import React from 'react';
import { Grid } from '@material-ui/core';
import style from './PhotoInfo.module.css';

const PhotoInfo = (props) => {

    return (
        <Grid>
            {
                props.photos.map(p => (
                    <Grid>
                        <Grid container className={style.mainStyle}>
                            <Grid>
                                <img src={p.download_url} alt='' />
                            </Grid>
                            <Grid className={style.personData}>
                                <h5>Author: {p.author}</h5>
                                <h5>ID: {p.id}</h5>
                                <h5>Width: {p.width}</h5>
                                <h5>Height: {p.height}</h5>
                                <h5>URL: {p.url}</h5>
                            </Grid>
                        </Grid>
                        <Grid className={style.anotherPhotos}>
                            <Grid>
                                <h2>Related images</h2>
                            </Grid>
                            <Grid container className={style.photo}>
                                {
                                    props.state.map(s => (
                                        <Grid >
                                            <img src={s.download_url} alt='' />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default PhotoInfo;