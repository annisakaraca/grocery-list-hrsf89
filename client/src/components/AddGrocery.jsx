import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div>
        <div id='description'>Description: <input></input> </div>
        <div id='quantity'>Quantity: <input></input><button>Add Grocery</button></div>
      </div>
    );
  }
}

export default AddGrocery;

