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
  addItem,
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
    setCurrentItems(topItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(topItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, topItems]);

  useEffect(() => {
    setItemOffset(calculateOffset);
    console.log(pageCount);
  }, [pageCount, addItem]);

  const calculateOffset = () => {
    if (topItems.length === 0) {
      return;
    } else if (topItems.length % itemsPerPage === 0) {
      return (topItems.length / itemsPerPage - 1) * itemsPerPage;
    } else {
      return Math.floor(topItems.length / 4) * itemsPerPage;
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % topItems.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="table-container">
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
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
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
    </div>
  );
};

export default Items;
