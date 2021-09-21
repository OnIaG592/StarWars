import { BrowserRouter as Router, Link} from "react-router-dom";
import "../Header/index.css"

function Header (){

    return(
    <div className="Header">
        <ul>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/">Main Page</Link>
            </li>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/planets">Planets</Link>
            </li>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/people">People</Link>
            </li>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/films">Films</Link>
            </li>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/species">Species</Link>
            </li>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/vehicles">Vehicles</Link>
            </li>
            <li>
                <Link style={{color:"white",textDecoration:"none"}} to="/starships">Starships</Link>
            </li>
        </ul>
    </div>
    )
}

export default Header;
