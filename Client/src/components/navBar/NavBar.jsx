import SearchBar from "../searchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";



function NavBar() {
    const location = useLocation();

    return (
        <div>
            <h1>NavBar</h1>
            <Link to={'/home'}>
                <button>Home</button>
            </Link>
            <Link to={'/form'}>
                <button>Create</button>
            </Link>
            <Link to={'/'}>
                <button>Exit</button>
            </Link>
            {location.pathname === '/home' && <SearchBar />}
        </div>
    );
};

export default NavBar;