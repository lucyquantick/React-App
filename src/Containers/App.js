//import React, { useState } from 'react'; // for react hooks
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';


class App extends Component {
	state = {
		persons: [
			{ id: 'njrt', name: 'Lucy', age: 24 },
			{ id: '5j43', name: 'Peter', age: 27 },
			{ id: '9k8l', name: 'Queen', age: 100 }
		],
		otherState: 'some other value',
		showPersons: false
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

	render() {

		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler} />
				</div>
			);

			btnClass = classes.Red;
		}

		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.Red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1> I'm a React App </h1>
				<p className={assignedClasses.join(' ')}>This is really working </p>
				<button
					className={btnClass}
					onClick={this.togglePersonsHandler}>Toggle Persons</button>

				{persons}
			</div>
		);

		//return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

	}
}

export default App;

