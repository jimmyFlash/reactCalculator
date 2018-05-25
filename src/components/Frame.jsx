import React from 'react'; // import react module

// create a class which extends react component
class Frame extends React.Component {

  // Render function to creat component to be rendered on the DOM.
  // This method must return a single parent element as you can see here. 
  // The component is wrapped around () to make it a single expression.
  render() {
    return (
      <div className="frame">
        <div className="calculator-title">
          R_N Calculator
        </div>
      </div>
    );
  }
}

// export our frame component. To be used in our client/index.js file
export default Frame;