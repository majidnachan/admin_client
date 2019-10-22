import React from 'react';
import authenticate from '../helpers/authenticate';
import App from './App';

class Colors extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		if(!authenticate()){
			this.props.updateApp();
		}
	}

    render(){
    	
		return(<h1>Colors</h1>);
		
    	
    }
}

export default Colors;
