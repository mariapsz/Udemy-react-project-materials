import * as React from 'react';
import './layout.css';

class Layout extends React.Component {
    state = {};

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

}

export default Layout;