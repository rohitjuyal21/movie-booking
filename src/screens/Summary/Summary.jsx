import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleData } from '../../utils/fetchFromAPI';
import './Summary.css'
import TicketBooking from '../../components/TicketBooking/TicketBooking';
import { TailSpin } from 'react-loader-spinner'

const Summary = () => {
    const id = useParams();
    const [movieData, setMovieData] = useState(null);
    const [showTicket, setShowTicket] = useState(false);
    console.log(movieData)

    useEffect(() => {
        fetchSingleData(id?.id)
            .then(data => setMovieData(data))
    }, [])
    return (
        <div className='summary'>
            <div className='summary__bg'>
                <img src={movieData?.image?.original} className='summary__bg-img' alt="" />
                <div className='summary__bg-gradient'></div>
            </div>
            <div className='summary__details'>
                <div className='summary__details-imgContainer'>
                    <img src={movieData?.image?.original} alt="" />
                    <button className='summary__details-ticket' onClick={() => { setShowTicket(true) }}>Book Ticket</button>
                </div>

                <div className='summary__details-content'>
                    <div className='summary__details-content-genres'>
                        {movieData?.genres.map((genre, i) => (
                            <span key={i}>{genre}</span>
                        ))}
                    </div>
                    <h1 className='summary__details-content-name'>{movieData?.name}</h1>
                    <div className='summary__details-content-runLan'>
                        <span className='summary__details-content-runtime'>{movieData?.runtime} mins</span>
                        <p className='summary__details-content-language'>Language:
                            <span> {movieData?.language}</span>
                        </p>
                    </div>
                    <p className='summary__details-content-summary' dangerouslySetInnerHTML={{ __html: movieData?.summary }}></p>
                </div>

            </div>

            <TicketBooking id={movieData?.id} movieData={movieData} showTicket={showTicket} setShowTicket={setShowTicket} />

        </div>
    )
}

export default Summary