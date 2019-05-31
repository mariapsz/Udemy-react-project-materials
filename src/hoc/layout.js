import * as React from 'react';
import './layout.css';
import Header from '../components/Header/header';

class Layout extends React.Component {
    state = {
        showNav: false,
    };

    toggleSideNav = (action) => {
      this.setState({
          showNav: action,
      })
    };

    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav = {() => this.toggleSideNav(false)}
                    onOpenNav = {() => this.toggleSideNav(true)}
                />
                {this.props.children}
            </div>
        )
    }

}

export default Layout;