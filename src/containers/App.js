import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends Component {    //its also called smart component since it has state
	constructor() {
		super()
// Never put ';' after super()
		this.state = {
			robos: [],
			searchfield: ''
		}
	}
// random name given 
onSearchchange = (event) => {
	this.setState({searchfield: event.target.value})
// to update state use above method
}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		return response.json()
	})
	.then(userss => {
		this.setState({robos: userss})
	})
}

/* the value of 'this' (incase of method like function)is not refering to 
   the STATE but <input/> in Searchbox.js, since the event happened in the 
   input of Searchbox.js so instead use the arrow functions. Now this refers
   to the STATE object */
render() {
	const {robos,searchfield} = this.state;
	// destructuring same as, robos = object.robos (value passed)
	const filteringSearch = robos.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
// Loading screen...
	if (!(this.state.robos.length)) {
		return (
			<div className="centering" >
				<h1 className ='tc'> Loading....</h1>
				<div class="spinner">
				  <div class="bounce1"></div>
				  <div class="bounce2"></div>
				  <div class="bounce3"></div>
				</div>
			</div>
			);
	}
	else{
		return(
			<div className = "tc">
				<h1 className = "title f1"> Robo Friends </h1>
				<Searchbox searchange = {this.onSearchchange} />
				<Scroll>
					<CardList robos = {filteringSearch} />
				</Scroll>
			{/*using 'children'*/}
			</div>
			);
		}
	}
}
export default App;

/* if robos dont have any cards yet loaded though yet called for in fetch
    then it shows a loading screen. It means, if ! (not) any value. */

/*we create a custom component that wraps inside another one and 
can be done using 'children' */

/* we pass robos which is our state as props. So we are accessing robos
   from import but this.state */


/* In order to use 'this' we have to call super() which calls the constructor() 
   of component*/
// since we are returning one single parent so we wrap it in div tags
//  we need to create a search box component 
// To use State we need to use a class , (in the main component JS use class)