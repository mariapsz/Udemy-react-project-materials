import * as React from 'react';
import styles from './viedosList.css';
import Button from '../Buttons/button';
import axios from 'axios';
import {URL} from '../../../config';
import VideosListTemplate from './videosListTemplate';

let count = 0;
class VideosList extends React.Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
    };

    componentWillMount() {
        console.log('conut:', this.count);
        count += 1;
        console.log(this.state.start, this.state.end);
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
                .then(response => {
                    this.setState({
                        teams: response.data
                    })
                })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    videos: [...this.state.videos, ...response.data]
                })
            })
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

    renderVideos = () => {
        let template = null;
        console.log('das', this.state.videos);
        switch (this.props.type) {
            case('card'):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>;
                break;
            default:
                template = null;
        }
        return template;
    };

    render() {
        return (
            <div className={styles.videosList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

export default VideosList;