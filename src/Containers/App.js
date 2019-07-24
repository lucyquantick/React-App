//import React, { useState } from 'react'; // for react hooks
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'njrt', name: 'Lucy', age: 24 },
			{ id: '5j43', name: 'Peter', age: 27 },
			{ id: '9k8l', name: 'Queen', age: 100 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	// rare use
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps');
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice(); OR
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	nameChangedHandler = (event, id) => {

		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;


		this.setState({ persons: persons });
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	}

	// render method returns jsx
	render() {
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler} />
			);
		}

		return (
			<div className={classes.App}>

				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler} />

				{persons}
			</div>
		);

		//return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

	}
}

export default App;

