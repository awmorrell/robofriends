import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { robots } from '../robots.js'; //must destructure imports that arent exported as default
import './App.css';
import Scroll from '../components/Scroll.js';

class App extends Component { //unlike the other components, App is a 'smart component'. The other components are simple functions, this one has state.
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		};
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({ robots: robots })
			})
	};

	onSearchChange = (event) => { // writing it this way makes it so that the value of this is the App, rather than the input (event). }
		this.setState({ searchfield: event.target.value }) // have to add this.setState to change the state of the designated object, and in the brackets put what we want to change the state to}
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;