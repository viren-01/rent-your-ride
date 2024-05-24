import ReactSelect from './ReactSelect';
import { useCallback, useEffect, useState } from 'react';
import '../../BookCarModal.css';
import Datepicker from './Datepicker';
import { addDays } from 'date-fns';
import { createBooking, getCityListing, getVehicleListing } from '../../store/slices/CommonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { showPopup } from '../../store/slices/CommonSlice';

export default function BookCarModal({ isOpen, setShow }) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [cities, setCities] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [inputFields, setInputFields] = useState({})
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const commonState = useSelector((state) => state.common)

    const fetchVehicleListing = useCallback(() => {
        if (!commonState?.vehicleList?.length) {
            dispatch(getVehicleListing).then((res) => {
                if (res?.data?.length) {
                    setVehicles(res.data)
                }
            })
        } else {
            setVehicles(commonState?.vehicleList)
        }
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    useEffect(() => {
        //call api only if list is not present in 
        //redux
        if (!commonState?.cityList?.length) {
            dispatch(getCityListing).then((res) => {
                if (res?.data?.length) {
                    setCities(res.data)
                }
            })
        } else {
            setCities(commonState?.cityList)
        }
        fetchVehicleListing()
        //eslint-disable-next-line
    }, [fetchVehicleListing])

    useEffect(() => {
        if (Object.keys(commonState?.showPopup).length) {
            const car = commonState?.showPopup?.value
            setInputFields({ 'car': car })
            dispatch(showPopup({}))
        }
        //eslint-disable-next-line
    }, [commonState?.showPopup])

    const closeModal = () => {
        setIsVisible(false);
        setShow(false);
    };

    const handleInputChange = (key, value) => {
        //reset form error
        if (value) {
            let formErrors = errors
            delete formErrors[key]
            setErrors(formErrors)
        }

        setInputFields((prev) => ({ ...prev, [key]: value }))
    }

    const handleBooking = async () => {
        //form validation
        const validationFormError = formValidation()
        if (validationFormError) return

        //call booking api
        const booking = await createBooking(inputFields)
        if (booking?.message) {
            toast.success(booking.message)
            closeModal()
        }
    }
    /**
     * function for validating form 
     * @returns true if error is found
     */
    const formValidation = () => {
        const requiredFields = ['pickup_date', 'dropoff_date', 'pickup_location', 'dropoff_location', 'car', 'firstname', 'lastname', 'phone', 'age', 'email', 'address', 'city', 'zipcode']

        const errorFields = {}
        let error = false

        for (let key of requiredFields) {
            if (!inputFields[key]) {
                errorFields[key] = true
                error = true
            }
        }

        setErrors({ ...errorFields })
        return error
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
                                        <img src='/pin.svg' alt='pickup-logo' />
                                        <div>
                                            <h6>Pick-Up Date & Time*</h6><br />
                                            <Datepicker
                                                placeholder={`\u00A0Select Pick-up Date`}
                                                startDate={addDays(new Date(), 1)}
                                                showIcon={true}
                                                onChange={(e) => handleInputChange('pickup_date', e)}
                                                selected={inputFields?.['pickup_date'] || ''}
                                                className="booking-datepicker"
                                            />
                                            {errors?.['pickup_date'] && <p className="error-modal">This field is required.</p>}
                                        </div>
                                    </span>
                                </div>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <img src='/pin.svg' alt='dropoff-logo' />
                                        <div>
                                            <h6>Drop-Off Date & Time*</h6><br />
                                            <Datepicker
                                                placeholder={"\u00A0Select Drop-off Date"}
                                                startDate={addDays(new Date(), 1)}
                                                showIcon={true}
                                                onChange={(e) => handleInputChange('dropoff_date', e)}
                                                selected={inputFields?.['dropoff_date'] || ''}
                                            />
                                            {errors?.['dropoff_date'] && <p className="error-modal">This field is required.</p>}
                                        </div>
                                    </span>
                                </div>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <img src='/pin.svg' alt='pickup-city-logo' />

                                        <div>
                                            <h6>Pick-up Location*</h6>
                                            <div className='info-dropdown'>
                                                <ReactSelect
                                                    options={cities}
                                                    placeholder={"Pick-up Location"}
                                                    onChange={(e) => handleInputChange('pickup_location', e.value)}
                                                    value={cities?.find((city) => city.value === inputFields?.pickup_location)}
                                                />
                                                {errors?.['pickup_location'] && <p className="error-modal">This field is required.</p>}
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <img src='/pin.svg' alt='dropof-city-logo' />

                                        <div>
                                            <h6>Drop-Off Location*</h6>
                                            <div className='info-dropdown'>
                                                <ReactSelect
                                                    options={cities}
                                                    placeholder={"Drop Location"}
                                                    onChange={(e) => handleInputChange('dropoff_location', e.value)}
                                                    value={cities?.find((city) => city.value === inputFields?.dropoff_location)}
                                                />
                                                {errors?.['dropoff_location'] && <p className="error-modal">This field is required.</p>}
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="booking-modal-car-info">
                                <h5>
                                    <span>Car -</span>
                                    {vehicles?.find((car) => car.value === inputFields?.car)?.label || `Not Selected`}
                                </h5>
                                <img src={vehicles?.find((car) => car.value === inputFields?.car)?.url ? "./" + vehicles?.find((car) => car.value === inputFields?.car)?.url : `./default.png`} alt="car_img"></img>
                                <div className="booking-modal-car-dates">
                                    <span>
                                        <div className='dropdown'>
                                            <ReactSelect
                                                options={vehicles}
                                                placeholder={"Car Model*"}
                                                onChange={(e) => handleInputChange('car', e.value)}
                                                value={vehicles?.find((car) => car.value === inputFields?.car)}
                                            />
                                            {errors?.['car'] && <p className="error-modal">This field is required.</p>}
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
                                        <input type="text" placeholder="Enter your first name" onChange={(e) => handleInputChange('firstname', e.target.value)} value={inputFields?.['firstname']} />
                                        {errors?.['firstname'] && <p className="error-modal">This field is required.</p>}
                                    </span>
                                    <span>
                                        <label>Last Name <b>*</b></label>
                                        <input type="text" placeholder="Enter your last name" onChange={(e) => handleInputChange('lastname', e.target.value)} value={inputFields?.['lastname']} />
                                        {errors?.['lastname'] && <p className="error-modal ">This field is required.</p>}
                                    </span>
                                    <span>
                                        <label>Phone Number <b>*</b></label>
                                        <input type="tel" placeholder="Enter your phone number" onChange={(e) => handleInputChange('phone', e.target.value)} value={inputFields?.['phone']} maxLength={10}/>
                                        {errors?.['phone'] && <p className="error-modal">This field is required.</p>}
                                    </span>
                                    <span>
                                        <label>Age <b>*</b></label>
                                        <input type="number" placeholder="18" onChange={(e) => handleInputChange('age', e.target.value)} value={inputFields?.['age']} />
                                        {errors?.['age'] && <p className="error-modal ">This field is required.</p>}
                                    </span>
                                </div>
                                <div className="info-form__1col">
                                    <span>
                                        <label>Email <b>*</b></label>
                                        <input type="email" placeholder="Enter your email address" onChange={(e) => handleInputChange('email', e.target.value)} value={inputFields?.['email']} />
                                        {errors?.['email'] && <p className="error-modal">This field is required.</p>}
                                    </span>
                                    <span>
                                        <label>Address <b>*</b></label>
                                        <input type="text" placeholder="Enter your street address" onChange={(e) => handleInputChange('address', e.target.value)} value={inputFields?.['address']} />
                                        {errors?.['address'] && <p className="error-modal ">This field is required.</p>}
                                    </span>
                                </div>
                                <div className="info-form__2col">
                                    <span>
                                        <label>City <b>*</b></label>
                                        <input type="text" placeholder="Enter your city" onChange={(e) => handleInputChange('city', e.target.value)} value={inputFields?.['city']} />
                                        {errors?.['city'] && <p className="error-modal">This field is required.</p>}
                                    </span>
                                    <span>
                                        <label>Zip Code <b>*</b></label>
                                        <input type="text" placeholder="Enter your zip code" onChange={(e) => handleInputChange('zipcode', e.target.value)} value={inputFields?.['zipcode']} />
                                        {errors?.['zipcode'] && <p className="error-modal ">This field is required.</p>}
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
