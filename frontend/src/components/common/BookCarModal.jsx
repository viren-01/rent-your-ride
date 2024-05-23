import ReactSelect from './ReactSelect';
import { useEffect, useState } from 'react';
import '../../styles/BookCarModal.css';
import Datepicker from './Datepicker';
import { addDays } from 'date-fns';
import { createBooking, getCityListing } from '../../store/slices/CommonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function BookCarModal({ isOpen, setShow }) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [cities, setCities] = useState([])
    const [inputFields, setInputFields] = useState({})
    
    const dispatch = useDispatch() 
    const commonState = useSelector((state) => state.common)


    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    useEffect(() => {
        //call api only if list is not present in 
        //redux
        if(!commonState?.cityList?.length) {
            dispatch(getCityListing).then((res) => {
                if(res?.data?.length) {
                    setCities(res.data)
                }
            })
        } else {
            setCities(commonState?.cityList)
        }
    }, [])

    const closeModal = () => {
        setIsVisible(false);
        setShow(false);
    };

    const handleInputChange = (key, value) => {
        setInputFields((prev) => ({...prev, [key]: value}))
    }

    const handleBooking = async () => {
        const booking = await createBooking(inputFields)
        console.log('bookings', booking)
        if(booking?.message) {
            toast.success(booking.message)
            closeModal()
        }
    }

    return (
        <>
            {isVisible && (
                <div className="modal-opacity">
                    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
                        <div className="booking-modal-header">
                            <h2>COMPLETE RESERVATION</h2>
                            <button className="close-btn" onClick={() => closeModal()}>×</button>
                        </div>
                        <div className="booking-modal-message">
                            <h4>Upon completing this reservation enquiry, you will receive:</h4>
                            <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                        </div>
                        <div className="booking-modal-car-details">
                            <div className="date-div">
                                <div className="booking-modal-car-dates">
                                    <h5>Location & Date</h5>
                                    <span>
                                        <img src='/pin.svg' />
                                        <div>
                                            <h6>Pick-Up Date & Time</h6>
                                            <p>
                                                <Datepicker
                                                    placeholder={"Select Pick-up Date"}
                                                    startDate={addDays(new Date(), 1)}
                                                    showIcon={true}
                                                    onChange={(e) => handleInputChange('pickup_date', e)}
                                                    selected={inputFields?.['pickup_date'] || ''}
                                                />
                                            </p>
                                        </div>
                                    </span>
                                </div>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <img src='/pin.svg' />
                                        <div>
                                            <h6>Drop-Off Date & Time</h6>
                                            <p>
                                                <Datepicker
                                                    placeholder={"Select Drop-off Date"}
                                                    startDate={addDays(new Date(), 1)}
                                                    showIcon={true}
                                                    onChange={(e) => handleInputChange('dropoff_date', e)}
                                                    selected={inputFields?.['dropoff_date'] || ''}
                                                />
                                            </p>
                                        </div>
                                    </span>
                                </div>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <img src='/pin.svg' />

                                        <div>
                                            <h6>Pick-up Location</h6>
                                            <div className='info-dropdown'>
                                                <ReactSelect
                                                    options={cities}
                                                    placeholder={"Pick-up Location"}
                                                    onChange={(e) => handleInputChange('pickup_location', e.value)}
                                                    value={cities?.find((city) => city.value === inputFields?.pickup_location)}
                                                />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <img src='/pin.svg' />

                                        <div>
                                            <h6>Drop-Off Location</h6>
                                            <div className='info-dropdown'>
                                                <ReactSelect
                                                    options={cities}
                                                    placeholder={"Drop Location"}
                                                    onChange={(e) => handleInputChange('dropoff_location', e.value)}
                                                    value={cities?.find((city) => city.value === inputFields?.dropoff_location)}
                                                />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="booking-modal-car-info">
                                <h5>
                                    <span>Car -</span>
                                    Audi A1 S-Line
                                </h5>
                                <img src="https://car-rental-ten.vercel.app/static/media/audia1.d038cf70b700e34e607a.jpg" alt="car_img"></img>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <div className='dropdown'>
                                            <ReactSelect
                                                options={[{ value: 1, label: 'Audi' }, { value: 2, label: 'BMV' }, { value: 3, label: 'CAR' }]}
                                                placeholder={"Car Model"}
                                                onChange={(e) => handleInputChange('car', e.value)}
                                            />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="booking-modal-person-info">
                            <h4>Personal Information</h4>
                            <form className="info-form">
                                <div className="info-form__2col">
                                    <span>
                                        <label>First Name <b>*</b></label>
                                        <input type="text" placeholder="Enter your first name" onChange={(e) => handleInputChange('firstname', e.target.value)} value={inputFields?.['firstname']}/>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                    <span>
                                        <label>Last Name <b>*</b></label>
                                        <input type="text" placeholder="Enter your last name" onChange={(e) => handleInputChange('lastname', e.target.value)} value={inputFields?.['lastname']}/>
                                        <p className="error-modal ">This field is required.</p>
                                    </span>
                                    <span>
                                        <label>Phone Number <b>*</b></label>
                                        <input type="tel" placeholder="Enter your phone number" onChange={(e) => handleInputChange('phone', e.target.value)} value={inputFields?.['phone']}/>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                    <span>
                                        <label>Age <b>*</b></label>
                                        <input type="number" placeholder="18" onChange={(e) => handleInputChange('age', e.target.value)} value={inputFields?.['age']}/>
                                        <p className="error-modal ">This field is required.</p>
                                    </span>
                                </div>
                                <div className="info-form__1col">
                                    <span>
                                        <label>Email <b>*</b></label>
                                        <input type="email" placeholder="Enter your email address" onChange={(e) => handleInputChange('email', e.target.value)} value={inputFields?.['email']}/>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                    <span>
                                        <label>Address <b>*</b></label>
                                        <input type="text" placeholder="Enter your street address" onChange={(e) => handleInputChange('address', e.target.value)} value={inputFields?.['address']}/>
                                        <p className="error-modal ">This field is required.</p>
                                    </span>
                                </div>
                                <div className="info-form__2col">
                                    <span>
                                        <label>City <b>*</b></label>
                                        <input type="text" placeholder="Enter your city" onChange={(e) => handleInputChange('city', e.target.value)} value={inputFields?.['city']}/>
                                        <p className="error-modal">This field is required.</p>
                                    </span>
                                    <span>
                                        <label>Zip Code <b>*</b></label>
                                        <input type="text" placeholder="Enter your zip code" onChange={(e) => handleInputChange('zipcode', e.target.value)} value={inputFields?.['zipcode']}/>
                                        <p className="error-modal ">This field is required.</p>
                                    </span>
                                </div>
                                <div className="reserve-button">
                                    <button type="button" onClick={() => handleBooking()}>Reserve Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
