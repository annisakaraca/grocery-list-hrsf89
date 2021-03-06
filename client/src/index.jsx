import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        // {id: 1, quantity: 5, description: "frozen pizza"},
        // {id: 2, quantity: 10, description: "greek yogurt"},
        // {id: 3, quantity: 2, description: "wine"},
        // {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  componentWillMount() {
    axios.get('/list')
      .then((response) => {
        this.setState({list: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  addItemToList(description, quantity){
    var context = this;
    console.log(context);
    axios.post('/list', {
      id: context.state.list.length,
      description: description,
      quantity: quantity
    })
      .then((response) => {
        this.setState({list: response.data});
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  
  render () {
    return (
      <div>
        <AddGrocery handleClick={this.addItemToList.bind(this)}/>
        <GroceryList list={this.state.list}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));