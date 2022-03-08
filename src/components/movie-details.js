import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails(props) {

    const [highlighted, setHighlighted] = useState(-1);

    let movie = props.movie;

    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token 9a82d088aecd26f01d11e52cdfea36a28156a753'
            },
            body: JSON.stringify({stars: rate + 1})
        })
        .then(() => getDetails())
        .catch(error => console.log(error))
    }
    
    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token 9a82d088aecd26f01d11e52cdfea36a28156a753'
            }
        })
        .then(response => response.json())
        .then(response => props.updateMovie(response))
        .catch(error => console.log(error))
    }

    return (
        <Fragment>
            { movie ? (
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4 ? 'orange' : ''}/>
                    ({movie.no_of_ratings})
                    <div className='rate-container'>
                        <h2>Rate it</h2>
                        { [...Array(5)].map((e, index) => {
                            return <FontAwesomeIcon key={index} icon={faStar} className={highlighted > index - 1 ? 'purple' : ''}
                                onMouseEnter={highlightRate(index)}
                                onMouseLeave={highlightRate(-1)}
                                onClick={rateClicked(index)}
                            />
                        })
                        }
                    </div>
                </div>
            ) : null }
        </Fragment>
    );
}

export default MovieDetails;
