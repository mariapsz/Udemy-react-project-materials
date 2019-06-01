import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from "./sideNavItems";

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav showNav={props.showNav}
                     onHideNav={props.onHideNav}
                     navStyle={{
                         background: '#242424',
                         maxWidth: '40vh',
                     }}
            >
                <SideNavItems/>
            </SideNav>
        </div>
    )
};

export default SideNavigation;