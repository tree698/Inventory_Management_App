import React from 'react';
import Item from './item';

const Items = (props) => {
  const handleIncrement = (item) => {
    props.onIncrement(item);
  };

  const handleDecrement = (item) => {
    props.onDecrement(item);
  };

  const handleReset = (item) => {
    props.onReset(item);
  };

  const handleDelete = (item) => {
    props.onDelete(item);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Inc/Dec</th>
          <th>Balance</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      {props.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
        />
      ))}
    </table>
  );
};

export default Items;
