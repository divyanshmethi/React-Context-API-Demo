import React from 'react'

// Must start with capital letter because it will be actual reference to a component
// 2nd way of creating HOC
// 2nd args -- something that you will need in component, there can be multiple args based on the fact if you require
// multiple things in your component
// return a functional component inside the function body
const withClass = (WrappedComponent, className) => {
  return props => {
    return(
    <div className={className}>
      <WrappedComponent {...props} />
    </div>)
  }
}

export default withClass