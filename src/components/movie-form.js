import React, { Fragment, useState, useEffect } from 'react';
import { API } from '../api-service';

function MovieForm(props) {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    useEffect( () => {
        setTitle(props.movie.title);
        setDescription(props.movie.description);
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id, {title, description})
        .then(response => props.updateMovie(response))
        .catch(error => console.log(error))
    }

    const createClicked = () => {
        API.createMovie({title, description})
        .then(response => props.movieCreated(response))
        .catch(error => console.log(error))
    }

    return (
        <Fragment>
            { props.movie ? (
                <div>
                    <label htmlFor="title">Title</label>
                    <br/>
                    <input id="title" type="text" placeholder="title" value={title} onChange={ evt=> setTitle(evt.target.value)}/>
                    <br/>
                    <label htmlFor="description">Description</label>
                    <br/>
                    <textarea id="description" type="description" placeholder="Description" value={description} onChange={evt => setDescription(evt.target.value)}></textarea>
                    <br/>
                    { props.movie.id 
                      ? <button onClick={updateClicked}>Update</button> 
                      : <button onClick={createClicked}>Create</button> 
                    }
                </div>
            ) : null}
        </Fragment>
    )
}

export default MovieForm;