import React, { memo, useEffect } from 'react';

const item = memo((props) => {
  useEffect(() => {
    console.log(`${props.item.name} mounted`);
  });

  const handleIncrement = () => {
    props.onIncrement(props.item);
  };

  const handleDecrement = () => {
    props.onDecrement(props.item);
  };

  const handleReset = () => {
    props.onReset(props.item);
  };

  const handleDelete = () => {
    props.onDelete(props.item);
  };

  const { name, count } = props.item;

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
