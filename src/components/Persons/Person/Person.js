import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'; //import higher order component
import withClass from '../../../hoc/withClass'; //import WithClass as HOC
import styles from './Person.css';

class Person extends Component {
    componentDidMount(){
        this.inputElement.focus();
    }

    render(){
        console.log('[Person.js rendering...]');
        return (
            <Aux> 
                <p onClick={this.props.click}>
                    #{this.props.name} and I am {this.props.age} years old!
                </p>
                <p>
                    {this.props.children}
                </p>
                <input 
                    type="text"
                    ref={(inputEl) => {this.inputElement = inputEl}} 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>

        ); //wrapping Aux or React.Fragment allows to get multiple JSX-Elements in return without div wrapping 
    }
};

//PropTypes for setting the types of the vars
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, styles.Person);