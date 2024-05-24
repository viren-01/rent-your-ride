import React, { useEffect, useState } from 'react';
import '../styles/Slider.css';
import BookCar from './BookCar';

export default function Slider({ contents }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showBookCarModal, setShowBookCarModal] = useState(false)

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? contents.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === contents.length - 1 ? 0 : prevIndex + 1));
    };


    useEffect(() => {
        const setInter = setInterval(() => {
            goToNext()
        }, 5000)

        return (() => {
            clearInterval(setInter)
        })
        //eslint-disable-next-line
    }, [])

    return (
        <div className="slider">
            <button className='btn-prev' onClick={() => goToPrevious()}>{"<"}</button>
            <div className="content">
                <span className='text-ryr'>{"RENT YOUR RIDE NOW"}</span>
                { !showBookCarModal && <h1>FAST & AFFORDABLE</h1>}
                <div className='left-section'>
                    <h2>{contents[currentIndex]['type']}</h2>
                    <span>{contents[currentIndex]['price']}</span>
                    <div className='btn-div'>
                        <button className='btn-booknow' onClick={() => setShowBookCarModal(true)}> Book Now </button>
                    </div>
                </div>
                <div className={`right-section`}>
                    <img src={contents[currentIndex]['path']} alt='img-car' height={'95%'} width={"100%"}/>
                </div>
            </div>
            <button className='btn-next' onClick={() => goToNext()}>{">"}</button>
            {
                showBookCarModal && <BookCar show={showBookCarModal} setShow={(value) => setShowBookCarModal(value)}/>
            }
        </div>
    );
}