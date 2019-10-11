import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class Container extends React.Component{
    render(){
    	return(<div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show"><Header /><Main /><Footer /></div>);
    }
}

export default Container;