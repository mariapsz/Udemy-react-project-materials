import * as React from 'react';
import axios from 'axios';
import {URL} from '../../../config';
import {Link} from 'react-router-dom';
import styles from './newsList.css';
import TransitionGroup from 'react-transition-group/esm/TransitionGroup';
import CSSTransition from 'react-transition-group/esm/CSSTransition';
import Button from '../Buttons/button';


class NewsList extends React.Component {

    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
    };

    componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    renderNews = (type) => {
        let template = null;

        switch (type) {
            case('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: styles.newsList_wrapper,
                            enterActive: styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={styles.newsList_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            default:
                template = null;
        }
        return template;
    };


    request = (start, end) => {
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data]
                })
            })
    };

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
        console.log('why', end);
    };

    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="List"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load more news! ;D"
                />

            </div>)
    }
}

export default NewsList;