import './Navbar.css';
import logo from '../../images/TrollFace.png';

function Navbar () {
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <img src={logo} alt="troll face"></img> 
            </div>
            <h1>MemeGenerator</h1>
        </div>
    )
}

export default Navbar;