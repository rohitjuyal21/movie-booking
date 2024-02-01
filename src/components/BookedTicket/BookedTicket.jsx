import React, { useEffect, useState } from 'react'
import './BookedTicket.css'
import { Link } from 'react-router-dom'
import { fetchSingleData } from '../../utils/fetchFromAPI'

const BookedTicket = ({ id, cinema, date, time, seats }) => {
    const [movie, setMovieData] = useState([])
    useEffect(() => {
        fetchSingleData(id)
            .then((data) => setMovieData(data))
    }, [])
    return (
        <Link to={`/${id}`}>
            <div className='bookedTickets'>
                <div className='bookedTickets__imgContainer'>
                    <img src={movie?.image?.original} alt="" />
                </div>
                <div className='bookedTickets__details'>
                    <div className=''>
                        <h2>{movie.name}</h2>
                        <h4 className='bookedTickets__details-status'>Tickets Booked</h4>
                    </div>
                    <p className='bookedTickets__details-time'>{date}, {time}</p>
                </div>
            </div>
        </Link>
    )
}

export default BookedTicket