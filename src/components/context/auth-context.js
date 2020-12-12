import React from 'react'

// Context -- globally available JS object, we can configure where it is available
// JS object that can be passed b/w react components without props 
const authContext = React.createContext({authenticated: false, 
  login: () => {}
});

// This context should wrap all the parts that need this

export default authContext