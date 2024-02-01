import React, { useEffect, useState } from 'react'
import './Feed.css'
import { fetchAll } from '../../utils/fetchFromAPI'
import MovieCard from '../../components/MovieCard/MovieCard';
const Feed = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        fetchAll('?q=all')
            .then((data) => setMovies(data))

        console.log(movies)
    }, [])

    return (
        <div className='feed'>
            <div className='feed__movies'>
            {
                movies.map((movie, i) => (
                    <MovieCard 
                    id={movie?.show?.id}
                    key={i}
                    img={movie?.show?.image?.original || movie?.show?.image?.medium}
                    title={movie?.show?.name}
                    rating={movie?.show?.rating?.average}
                    genres={movie?.show?.genres} />
                ))
            }
            </div>
        </div>
    )
}

export default Feed