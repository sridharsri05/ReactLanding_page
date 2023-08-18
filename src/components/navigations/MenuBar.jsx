import logoImage from '../../../public/images/favicon.png'
import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>
                    <img src={logoImage} alt="#" />
                    <span className=' span-1'>Fidus</span>

                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>
                    <li><a href="/"> Services </a></li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;