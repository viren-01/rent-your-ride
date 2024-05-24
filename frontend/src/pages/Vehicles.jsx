import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Vehicles.css';
import { getVehicleListing, updateShowPopup } from '../store/slices/CommonSlice';
import { useNavigate } from 'react-router-dom';

export default function Vehicle() {
    const [vehicle, setVehicles] = useState([])
    const commonState = useSelector((state) => state.common)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!commonState?.vehicleList?.length) {
            dispatch(getVehicleListing).then((res) => {
                if (res?.data?.length) {
                    setVehicles(res.data)
                }
            })
        } else {
            setVehicles(commonState?.vehicleList)
        }
    }, [])

    const handleBookRideClick = (car) => {
        navigate('/')
        dispatch(updateShowPopup(car))
    }

    return (
        <>
            <Navbar />
            <div className="page-vehicle">
                <div className="vehicle-grid">
                    {
                        vehicle.map((car, idx) => {
                            const img = car.url ? './' + car.url : './default.png'
                            return (
                                <div className='vehicle-grid-ele' key={car.url + idx}>
                                    <div className='grid-img'>
                                        <img src={img} />
                                        <div className='grid-box'>
                                            <div className='grid-item-box'>
                                                <div className='grid-item-name'>
                                                    <p>{car.label}</p>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-star"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
                                                    </span>
                                                </div>
                                                <div className='grid-item-price'>
                                                    <h5>₹{Math.floor(Math.random() * 10000) + 1000}</h5>
                                                    <p>per day</p>
                                                </div>

                                            </div>
                                            <div className='grid-item-price-detail'>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-car"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg> &nbsp; {car.label.split(' ')[0]}</span>
                                                <span style={{ textAlign: 'right' }}>{car.seating_capacity} &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-car"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg></span>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-car"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg> &nbsp; {['Automatic', 'Manual'][Math.floor(Math.random() * 2)]}</span>
                                                <span style={{ textAlign: 'right' }}>Diesel &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-car"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg></span>
                                            </div>
                                            <div className='grid-item-price-btn'>
                                                <a onClick={() => handleBookRideClick(car)}> Book Ride </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}