import { Link } from "react-router-dom";
import styles from './landing.module.css';


function Landing() {
    return (
        <div className={styles.container}>
            <h1>Welcome!</h1>
            <Link to={'/home'}>
                <button>Enter</button>
            </Link>
        </div>
    );
};

export default Landing;