import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Colors from './Colors';
import Sidebar from './Sidebar';

class Main extends React.Component{
    render(){
    	return(
    		<Router>
	    		<div className="app-body">
			      <Sidebar />
			      <main className="main">
			        
			        <ol className="breadcrumb">
			          <li className="breadcrumb-item">Home</li>
			          <li className="breadcrumb-item">
			            <a href="#">Admin</a>
			          </li>
			          <li className="breadcrumb-item active">Dashboard</li>
			          <li className="breadcrumb-menu d-md-down-none">
			            <div className="btn-group" role="group" aria-label="Button group">
			              <a className="btn" href="#">
			                <i className="icon-speech"></i>
			              </a>
			              <a className="btn" href="./">
			                <i className="icon-graph"></i>  Dashboard</a>
			              <a className="btn" href="#">
			                <i className="icon-settings"></i>  Settings</a>
			            </div>
			          </li>
			        </ol>
			        <div className="container-fluid">
			          <div className="animated fadeIn">
			          	<Switch>
						        <Route path="/dashboard" component={Dashboard} />
						        <Route path="/colors" component={Colors} />
						        <Redirect exact from="/" to="dashboard" />
						      </Switch>
			          </div>
			        </div>
			      </main>
	    		</div>
    		</Router>
			);
    }
}

export default Main;