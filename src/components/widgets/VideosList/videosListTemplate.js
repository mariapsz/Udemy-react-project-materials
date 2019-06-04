import styles from './viedosList.css';
import React from 'react';
import {Link} from 'react-router-dom';

const VideosListTemplate = (props) => {
    return props.data.map((item, i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                     style={{background:'red'}}
                >
                    <div>

                    </div>
                </div>
                <div className={styles.right}>
                    {/*<CardInfo teams={props.teams} team={item.team} date={item.date}/>*/}
                    <h2>
                        {item.title}
                    </h2>
                </div>
            </div>
        </Link>
    ))
};

export default VideosListTemplate;