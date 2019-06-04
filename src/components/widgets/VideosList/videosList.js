import * as React from 'react';
import styles from './viedosList.css';
import Button from '../Buttons/button';

class VideosList extends React.Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
    };

    renderTitle = () => {
        return this.props.title ?
            <h3><strong>NBA</strong> Videos</h3>
            : null
    };

    loadMore = () => {

    };

    renderButton = () => {
        return this.props.loadmore ?
            <Button
                type='loadMore'
                loadMore={() => this.loadMore()}
                cta='Load More Videos'
            />
            :
            <Button type='linkTo' cta='More videos' linkTo='/videos'/>
    };

    render() {
        return (
            <div className={styles.videosList_wrapper}>
                {this.renderTitle()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList;