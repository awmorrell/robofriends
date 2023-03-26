import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';
import Scroll from '../components/Scroll.js';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
	return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={ onSearchChange }/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={ filteredRobots }/>
				</ErrorBoundary>
			</Scroll>
		</div>
	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);