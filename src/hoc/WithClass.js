import React from 'react'
//withClass is not a Component anymore so we set the name to lowercase to differ


const withClass = (WrappedComponent, className) => {
    return props => (
    <div className={className}>
        <WrappedComponent {...props}/>
    </div>
    ); //Forwarding Props from Person.js to Persons.js thanks to spread-operator dynamically
};

export default withClass;