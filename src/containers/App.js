import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'


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
    let btnClass = '';

    if(this.state.showPersons){
      persons = (<div>
        <Persons 
          persons={[...this.state.persons]} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>);
      btnClass = classes.Red;
    }

    let assignedClasses =[];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //red will be pushed to classes
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>Crazy JSX Stuff is goin' on!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler} >Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
