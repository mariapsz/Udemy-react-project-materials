import * as React from 'react';
import './layout.css';
import Header from '../components/Header/header';

class Layout extends React.Component {
    state = {};

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }

}

export default Layout;