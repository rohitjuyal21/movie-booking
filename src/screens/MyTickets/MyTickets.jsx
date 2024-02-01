import React, { useEffect, useState } from 'react'
import './MyTickets.css'
import { BookedTicket } from '../../components';

const MyTickets = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('TicketData'));
        if(item) {
            setData(item)
        }
    },[])

    return (
        <div className='myTickets'>
            {data.length != 0
                ? (<div className='myTickets__container'>
                    {
                        data.map((item, i) => (
                            <BookedTicket
                            key={i}
                                id={item.id}
                                cinema={item.cinema}
                                date={item.date}
                                time={item.time}
                                seats={item.seats} />
                        ))
                    }
                </div>)
                : <p className='myTickets__text'>Book a Ticket first!</p>
                }
        </div>
    )
}

export default MyTickets