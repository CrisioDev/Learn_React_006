import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state  = {
    persons: [
      {id:'170364', name: 'Christopher',age: 23},
      {id:'918471', name: 'Gina',age: 25},
      {id:'871642', name: 'Calvin',age: 20}
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false,
    changecounter : 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  //rarely used - sooner or later will be removed
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

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

    this.setState((prevState, props) => {
      //USE THIS WAY WHEN DEPENDING ON PREVIOUS STATES!!
      //OTHERWISE IT MAY BE NOT THE MOST CURRENT STATE
      return {
        persons: persons, 
        changecounter: prevState.changecounter+1
      }; 
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />;
    }

    //outsourcing div to hoc: WithClass 
    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: !this.state.showCockpit})}}>Remove Cockpit</button>
        <AuthContext.Provider value={{
              authenticated: this.state.authenticated, 
              login: this.loginHandler
        }}>
        {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons = {this.state.showPersons}
              togglePersonsHandler = {this.togglePersonsHandler}
              personsLength = {this.state.persons.length}
            />
          ):null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
