import React , { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null); //Access JSX-Element on DOM
    const authContext = useContext(AuthContext); //Global variable Access

  //useEffect replaces all Lifecycle Methods from Components differentianting from syntax
  //useEffect runs after every renderCycle an can access on screen Data
  useEffect(() => {
    console.log("[Cockpit.js] useEffect - Hook | I will run every render cycle");
    // setTimeout(()=>{
    //   alert('Possible Http-Request done!');
    // }, 1000);
    toggleButtonRef.current.click();
    return() => {
      console.log("Button Clicked!");
    };
  }, []); //only happens initially with []

  // useEffect(() => { // could be used more than once
  //   console.log("[Cockpit.js] useEffect - Hook | I will run every render cycle");
  //   setTimeout(()=>{
  //     alert('Possible Http-Request done!');
  //   }, 1000);
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in useEffect');
  //   }//only happens on removal
  // }, []);

  const assignedClasses =[];
  let btnClass = '';

  if(props.showPersons){
      btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //red will be pushed to classes
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>Crazy JSX Stuff is goin' on!</p>
          <button
            ref={toggleButtonRef}
            className={btnClass}
            onClick={props.togglePersonsHandler}>
            Toggle Persons
          </button>
            <button onClick={authContext.login}>Login</button>
      </div>
  ); 
};

//React.memo only Updates when props changes like should ComponentUpdate
export default React.memo(cockpit);