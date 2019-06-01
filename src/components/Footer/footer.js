import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../images/dog.png';
import  styles from './footer.css';
import  {CURRENT_YEAR} from '../../config';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to='/' className={styles.logo}>
                <img alt='nba logo' src={image} />
            </Link>
            <div className={styles.right}>
                @NBA {CURRENT_YEAR} All rigths reserved
            </div>
        </div>
    )
};

export default Footer;