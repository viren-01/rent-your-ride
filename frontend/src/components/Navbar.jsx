import '../css/Navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">Rent Your Ride</div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/vehicles">Vehicles</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}