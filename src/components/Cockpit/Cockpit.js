import React , { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // useEffect replaces all Lifecycle Methods from Components differentianting from syntax
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect - Hook | I will run every render cycle");
  //   setTimeout(()=>{
  //     alert('Possible Http-Request done!');
  //   }, 1000);
  // }, []); //only happens initially with []

  useEffect(() => { // could be used more than once
    console.log("[Cockpit.js] useEffect - Hook | I will run every render cycle");
    setTimeout(()=>{
      alert('Possible Http-Request done!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }//only happens on removal
  }, []);

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
              className={btnClass}
              onClick={props.togglePersonsHandler}>
              Toggle Persons</button> 
      </div>
  );
};

//React.memo only Updates when props changes like should ComponentUpdate
export default React.memo(cockpit);