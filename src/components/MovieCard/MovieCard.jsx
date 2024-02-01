import React from 'react'
import './MovieCard.css'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MovieCard = ({ id, img, title, rating, genres }) => {
    console.log(id)
    return (
        <Link to={`/${id}`}>
            <div className='movieCard'>
                <div className='movieCard__imgContainer'>
                    <img src={img} alt="" className='movieCard__imgContainer-img' />
                </div>
                <div className='movieCard__details'>
                    <div className='movieCard__details-up'>
                        <h4 className='movieCard__details-title'>{title}</h4>
                        <h5 className='movieCard__details-rating'>
                            <FaStar className='movieCard__details-rating-icon' />
                            <span className='movieCard__details-rating-num'>{rating || '-'}</span>
                        </h5>
                    </div>
                    <p className='movieCard__details-genres'>
                        {genres.map((genre, i) => (
                            <span>{genre}</span>
                        ))}
                    </p>

                </div>
            </div>
        </Link>
    )
}

export default MovieCard