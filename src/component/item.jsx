import React, { memo } from 'react';

const item = memo(({ item, onIncrement, onDecrement, onReset, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(item);
  };

  const handleDecrement = () => {
    onDecrement(item);
  };

  const handleReset = () => {
    onReset(item);
  };

  const handleDelete = () => {
    onDelete(item);
  };

  const { name, count } = item;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>
          <button
            className="item-button item-increase"
            onClick={handleIncrement}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
          <button
            className="item-button item-decrease"
            onClick={handleDecrement}
          >
            <i className="fa-solid fa-square-minus"></i>
          </button>
        </td>
        <td>{count}</td>
        <td>
          <button className="item-reset" onClick={handleReset}>
            Reset
          </button>
        </td>
        <td>
          <button className="item-button item-delete" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
});

export default item;
