import * as React from 'react';
import axios from 'axios';
import SliderTemplates from './slider_templates';

class NewsSlider extends React.Component {

    state = {
        news: [],
    };

    componentWillMount() {
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
            .then(response => {
                this.setState({
                    news: response.data,
                })
            })
    }

    render() {
        return (
            <SliderTemplates data={this.state.news} type="featured"/>
        );
    }

}

export default NewsSlider;