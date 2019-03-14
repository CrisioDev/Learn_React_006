import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'; //import higher order component
import withClass from '../../../hoc/withClass'; //import WithClass as HOC
import styles from './Person.css';

class Person extends Component {
    render(){
        console.log('[Person.js rendering...]');
        return (
            <Aux> 
                <p onClick={this.props.click}>#{this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        ); //wrapping Aux or React.Fragment allows to get multiple JSX-Elements in return without div wrapping 
    }
};

export default withClass(Person, styles.Person);