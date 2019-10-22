import React from 'react';
import '../css/App.css';
import Container from './Container';
import Login from './Login';


class App extends React.Component {

	constructor(props) {
    	super(props);

    	this.state = {
      		isValidUser : 0
    	};
  	}

    updateApp = () => {
      this.setState();
    }

  	componentDidMount() {
  		const token = localStorage.getItem('_s');
  		//const token = '1';
  		if (token) {
        this.setState({ isValidUser :  1});
    	}
    }
  	
	render() {
    if(this.state.isValidUser){
  		return (
  			<Container updateApp= {this.updateApp} />
			);
  	}else{
  		return (
  			<Login />
	    );
  	}
	}
}

export default App;
