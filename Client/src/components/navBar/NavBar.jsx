import SearchBar from "../searchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import styles from './navBar.module.css'


function NavBar() {
    const location = useLocation();

    return (
        <div className={styles.container}>
            {location.pathname !== '/home' &&
                <NavLink to={'/home'}>

                    <button>Home</button>
                </NavLink>
            }
            {location.pathname !== '/form' &&
                <NavLink to={'/form'}>
                    <button>Create</button>
                </NavLink>
            }
            {location.pathname === '/home' && <SearchBar />}
            <NavLink to={'/'}>
                <button>Exit</button>
            </NavLink>
        </div>
    );
};

export default NavBar;