import lightLogo from '../assets/light-logo.png';
import darkLogo from '../assets/dark-logo.png';
import { Link } from 'react-router-dom';

interface MyNavProps {
    theme: string
}
const MyNav = ({theme}:MyNavProps) => (
    <div className="my-nav box-shadow">
        <Link to="/" className="nav-header">
            <img src={theme === 'dark' ? darkLogo : lightLogo} alt="logo"/>
            <h1>SPACEFLIGHT NEWS</h1>
        </Link>
    </div>
)

export default MyNav;