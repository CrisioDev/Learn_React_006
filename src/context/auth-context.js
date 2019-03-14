import React from 'react';

const authContext = React.createContext({
    authenticated: false, 
    login: () => {}
});
//authContext in this Case is a globally avaible var in JS

export default authContext;