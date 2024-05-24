import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SliderBottom from '../components/SliderBottom';
import '../Home.css';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='black'>
                    <Slider contents={[{ path: '/car1.png', type: 'SEDANS', price: 'FROM ₹5000/Day' }, { path: '/car2.png', type: "SUV's", price: 'FROM ₹7000/Day' }, { path: '/car3.png', type: "HATCHBACK", price: 'FROM ₹4500/Day' }]} />
                </div>
                <div className='white'>
                    <SliderBottom/>
                </div>
            </div>
        </>
    )
}