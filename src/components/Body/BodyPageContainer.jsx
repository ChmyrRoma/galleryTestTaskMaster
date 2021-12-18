import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

import BodyPage from './BodyPage';


const BodyPageContainer = () => {
    const [state, setState] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);


    useEffect(() => {
        if (fetching) {
            axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=9`)
                .then(resp => {
                    setState([...state, ...resp.data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
                .catch(err => {console.log(err);})
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 ) {
            setFetching(true)
        }
    }

    const postsElement = state
        .map(s => <BodyPage id={s.id} auth={s.author} photo={s.download_url} />)


    return (
        <Grid container justifyContent='center'>
            {fetching === true ? <h1>Loading...</h1> : postsElement}
        </Grid>
    )
}

export default BodyPageContainer;
