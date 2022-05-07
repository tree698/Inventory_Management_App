import React, { useState, useEffect } from 'react';
import Item from './item';
import ReactPaginate from 'react-paginate';

const Items = ({
  itemsPerPage,
  topItems,
  onIncrement,
  onDecrement,
  onReset,
  onDelete,
}) => {
  const handleIncrement = (item) => {
    onIncrement(item);
  };

  const handleDecrement = (item) => {
    onDecrement(item);
  };

  const handleReset = (item) => {
    onReset(item);
  };

  const handleDelete = (item) => {
    onDelete(item);
  };

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    // update가 안됨
    const topItemsCopy = [...topItems];
    setCurrentItems(topItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(topItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % topItems.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
      {currentItems &&
        currentItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
            onDelete={handleDelete}
          />
        ))}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </table>
  );
};

export default Items;
