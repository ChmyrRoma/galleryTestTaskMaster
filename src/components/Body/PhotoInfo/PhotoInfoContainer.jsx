import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoInfo from './PhotoInfo';
import { useLocation } from 'react-router';

const PhotoInfoContainer = () => {
    const [photos, setPhotos] = useState([]);
    const [state, setState] = useState([]);

    let location = useLocation()

    useEffect(() => {
        if (location) {
            axios.get(`https://picsum.photos/id/${location.state.id}/info`)
                .then(resp => {
                    const photoInf = resp.data
                    setPhotos([photoInf])
                })
        } else {
            console.log('error');
        }
    }, [location])

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=1&limit=5`)
        .then(resp => {
            const persons = resp.data
            setState(persons)
        })
    }, [])

    const photoElement = <PhotoInfo photos={photos} state={state} />
    

    return (
        <div>
            {photoElement}
        </div>
    )
}

export default PhotoInfoContainer;