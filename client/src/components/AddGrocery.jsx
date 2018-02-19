import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      description: ''
    }
  }

  updateQuantity(event){
    this.setState({quantity: event.target.value});
  }

  updateDescription(event){
    this.setState({description: event.target.value})
  }

  render () {
    return (
      <div>
        <div id='description'>Description: <input onChange={this.updateDescription.bind(this)}></input> </div>
        <div id='quantity'>Quantity: <input onChange={this.updateQuantity.bind(this)}></input><button onClick={() => this.props.handleClick(this.state.description, this.state.quantity)}>Add Grocery</button></div>
      </div>
    );
  }
}

export default AddGrocery;

