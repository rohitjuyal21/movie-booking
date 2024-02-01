import React, { useEffect, useState } from 'react'
import './TicketBooking.css'
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';

const TicketBooking = ({ movieData, showTicket, setShowTicket }) => {
    const id = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        id:id.id,
        cinema: '',
        date: '',
        time: '',
        seats: '',
        email: '',
        number: '',
    })

    const [formData, setFormData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prev) => [...prev, data])
        console.log(data);
        setData({ ...data, id: id.id, cinema: '', date: '', time: '', seats: '', email: '', number: ''})

    }

    useEffect(() => {
        localStorage.setItem('TicketData', JSON.stringify(formData));
    }, [formData])


    
    
    return (
        <div className={`ticketBooking ${showTicket ? 'show' : 'hide'}`}>
            <div className='ticketBooking__container'>
                <div className='ticketBooking__imgContainer'>
                    <img src={movieData?.image?.original} alt="" />
                    <IoMdClose onClick={() => { setShowTicket(false) }} />

                </div>
                <form onSubmit={handleSubmit} noValidate className='ticketBooking__form'>
                    <h1 className='ticketBooking__form-name'>{movieData?.name}</h1>
                    <div className='ticketBooking__form-content'>
                        <div className='ticketBooking__inputContainer'>
                            <label htmlFor="cinema">Cinema</label>
                            <select name="cinema" id="cinema" className='input' required value={data.cinema} onChange={(e) => setData({ ...data, cinema: e.target.value })}>
                                <option value="" disabled="disabled">Choose Cinema</option>
                                <option value="PVR Gurgaon">PVR Gurgaon</option>
                                <option value="INOX Gurgaon">INOX Gurgaon</option>
                                <option value="PVR Saket">PVR Saket</option>
                                <option value="PVR Noida">PVR Noida</option>
                                <option value="INOX Delhi">INOX Delhi</option>
                                <option value="INOX Noida">INOX Noida</option>
                            </select>
                        </div>
                        <div className='ticketBooking__inputContainer'>
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" className='input' required value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} />
                        </div>
                        <div className='ticketBooking__inputContainer'>
                            <label htmlFor="time">Time</label>
                            <select name="time" id="time" className='input' required value={data.time} onChange={(e) => setData({ ...data, time: e.target.value })}>
                                <option value="" disabled="disabled">Choose Time</option>
                                <option value="10 AM">10 AM</option>
                                <option value="11 AM">11 AM</option>
                                <option value="12 PM">12 PM</option>
                                <option value="1:30 PM">1:30 PM</option>
                                <option value="3 PM">3 PM</option>
                                <option value="7 PM">7 PM</option>
                                <option value="10:30 PM">10:30 PM</option>
                            </select>
                        </div>
                        <div className='ticketBooking__inputContainer'>
                            <label htmlFor="seats">Seats</label>
                            <input type="number" id="seats" className='input' required min={0} maxLength={100} value={data.seats} onChange={(e) => setData({ ...data, seats: e.target.value })} />
                        </div>
                        <div className='ticketBooking__inputContainer email'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className='input' required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
                        </div>
                        <div className='ticketBooking__inputContainer '>
                            <label htmlFor="number">Number</label>
                            <input type="text" id="phone-number" className='input' required value={data.number} onChange={(e) => setData({ ...data, number: e.target.value })} />
                        </div>

                        <button type='submit' className='ticketBooking__form-btn' onClick={() => setShowTicket(false)}>Buy Ticket</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TicketBooking