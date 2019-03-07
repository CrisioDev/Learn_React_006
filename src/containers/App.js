import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state  = {
    persons: [
      {id:'170364', name: 'Christopher',age:'28'},
      {id:'918471', name: 'Gina',age:'25'},
      {id:'871642', name: 'Calvin',age:'20'}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //slice to create a copy of state
    const persons = [...this.state.persons]; //... to spread the array to the new const array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons = {this.state.showPersons}
          togglePersonsHandler = {this.togglePersonsHandler}
          persons = {this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
