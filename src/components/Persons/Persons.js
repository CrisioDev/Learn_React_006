import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    // Warning without use
    // getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     //Only when props.persons changed then should Update
    //     //on Cockpit removal no update will be done => time and resources saved  
    //     return (nextProps.persons !== this.props.persons);
    // }

    //PureComponent removes that necessarity of shouldComponentUpdate and checks if any props changed and only then updates

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message : 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return(
            <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth = {this.props.isAuthenticated} 
            />
            );
        });
    }
};

export default Persons;