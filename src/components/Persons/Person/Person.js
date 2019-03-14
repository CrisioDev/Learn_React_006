import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'; //import higher order component
import withClass from '../../../hoc/withClass'; //import WithClass as HOC
import styles from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; //React connects Context behind the scenes with these syntax this.context for access

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log("[PersonJS] Auth:" + this.context.authenticated);
    }

    render(){
        console.log('[Person.js rendering...]');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>}
                <p onClick={this.props.click}>
                    #{this.props.name} and I am {this.props.age} years old!
                </p>
                <p>
                    {this.props.children}
                </p>
                <input 
                    type="text"
                    //ref={(inputEl) => {this.inputElement = inputEl}} //both works with componentDidMount
                    ref={this.inputElementRef}
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