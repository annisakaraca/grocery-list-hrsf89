import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => {
  let list = props.list;
  let listItems = list.map((item) => 
    <GroceryItem item={item} />
  );

  return (
    <div className="groceries">
      {listItems}
    </div>
  );
}

export default GroceryList;