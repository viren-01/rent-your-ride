import { useState, useEffect } from 'react';
import '../css/SliderBottom.css';
// import ReactSelect from './common/ReactSelect';
import BookCar from './BookCar';
// import Datepicker from './common/Datepicker';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SliderBottom(props) {
    const [showBookCarModal, setShowBookCarModal] = useState(false)
    const commonState = useSelector((state) => state.common)
   
    const navigate = useNavigate()

    const handleBookNowClick = () => {
        setShowBookCarModal(true)
    }

    const handleBrowseRidesClick = () => {
        navigate('/vehicles')
    }


    useEffect(() => {
        if(Object.keys(commonState?.showPopup).length) {
            setShowBookCarModal(true)
        }
        //eslint-disable-next-line
    }, [commonState?.showPopup])

    return (
        <>
            <div className="container-slider-bottom">
                <div className='filter'>
                    {/* <h1>RENT YOUR RIDE NOW</h1> */}
                    {/* <div className='filter-section'>
                        <div className='dropdown'>
                            <label>
                                <img src="car-icon.svg" />
                                Select Your Car Type <b>*</b>
                            </label>
                            <ReactSelect
                                options={[{ value: 1, label: 'Audi' }, { value: 2, label: 'BMV' }, { value: 3, label: 'CAR' }]}
                                placeholder={"Car Model"}
                            />
                        </div>
                        <div className='dropdown-datepick'>
                            <label>
                                <img src="calender.svg" />
                                Pick-up <b>*</b>
                            </label>
                            <Datepicker
                                placeholder={"Select Pick-up Date"}
                                startDate={new Date()}
                                showIcon={false}
                            />
                        </div>
                        <div className='dropdown'>
                            <label>
                                <img src="pin.svg" />
                                Pick-up <b>*</b>
                            </label>
                            <ReactSelect
                                options={[{ value: 1, label: 'Audi' }, { value: 2, label: 'BMV' }, { value: 3, label: 'CAR' }]}
                                placeholder={"Pick Up City"}
                            />
                        </div>
                        <div className='dropdown-datepick'>
                            <label>
                                <img src="calender.svg" />
                                Pick-up <b>*</b>
                            </label>
                            <Datepicker
                                placeholder={"Select Drop-off Date"}
                                startDate={new Date()}
                                showIcon={false}
                            />
                        </div>
                        <div className='dropdown'>
                            <label>
                                <img src="pin.svg" />
                                Pick-up <b>*</b>
                            </label>
                            <ReactSelect
                                options={[{ value: 1, label: 'Audi' }, { value: 2, label: 'BMV' }, { value: 3, label: 'CAR' }]}
                                placeholder={"Drop Of Location"}
                            />
                        </div>
                        <button className='btn-submit' onClick={() => setShowBookCarModal(true)}> SEARCH </button>
                    </div> */}
                    <div className='banner-container'>
                        <div className='banner-content'>
                            <div className="banner-content__text">
                                <h2>Save big with our cheap car rental!</h2>
                                <div className='banner-btn'>
                                    <button className='btn-booknow' onClick={() => handleBookNowClick()}>Book Now</button>
                                    <button className='btn-booknow' onClick={() => handleBrowseRidesClick()}>Browse Rides</button>
                                </div>
                                <p>Top Rides. Local Suppliers. <span>24/7</span> Support.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='filter-footer'>
                    <div>
                        <img src='/svg-car.svg' alt='modern-fleet' height={'60px'} width={'60px'} />
                        <div>
                            <span className='text'>MODERN FLEET</span>
                            <p className='text-description'>
                                Our fleet comprises the latest models equipped with advanced features to ensure a comfortable and safe ride for our customers.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src='/svg-wallet.svg' alt='special-prices' height={'60px'} width={'60px'} />
                        <div>
                            <span className='text'>SPECIAL PRICES</span>
                            <p className='text-description'>
                                Enjoy exclusive discounts and special offers on our range of vehicles, providing exceptional value for your journey.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src='/svg-insurance.svg' alt='insurance' height={'60px'} width={'60px'} />
                        <div>
                            <span className='text'>FULL INSURANCE PLAN</span>
                            <p className='text-description'>
                                Rest easy knowing that all our vehicles are covered by comprehensive insurance plans, offering complete protection in case of any unforeseen incidents.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src='/svg-pump.svg' alt='mileage' height={'60px'} width={'60px'} />
                        <div>
                            <span className='text'>UNLIMITED MILEAGE</span>
                            <p className='text-description'>
                                Experience the freedom to travel without limits with our unlimited mileage policy, allowing you to explore your destination without restrictions.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src='/svg-payment.svg' alt='secure-payments' height={'60px'} width={'60px'} />
                        <div>
                            <span className='text'>SECURE PAYMENTS</span>
                            <p className='text-description'>
                                We prioritize the security of your transactions by offering secure payment methods, providing peace of mind throughout the booking process.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src='/svg-ba.svg' alt='breakdown-assist' height={'60px'} width={'60px'} />
                        <div>
                            <span className='text'>BREAKDOWN ASSITANCE</span>
                            <p className='text-description'>
                                In the unlikely event of a breakdown, our dedicated team is available around the clock to provide prompt assistance and ensure minimal disruption to your travel plans.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {
                showBookCarModal && <BookCar show={showBookCarModal} setShow={(value) => setShowBookCarModal(value)} />
            }
        </>
    )
}