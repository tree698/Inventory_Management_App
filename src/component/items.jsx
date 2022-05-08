import React, { useState, useEffect } from 'react';
import Item from './item';
import ReactPaginate from 'react-paginate';
import './items.css';

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

  // 마지막 페이지를 보여주도록...
  // warning 해결할 것
  // react hook으로 바꾸기 => 성능개선
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(topItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(topItems.length / itemsPerPage));

    // calculateOffset();

    // setItemOffset(calculateOffset);
  }, [itemOffset, itemsPerPage, topItems]);

  useEffect(() => {
    setItemOffset(calculateOffset);
  }, [topItems]);

  const calculateOffset = () => {
    if (topItems.length === 0) {
      return;
    } else if (topItems.length % itemsPerPage === 0) {
      console.log(
        `offset: ${topItems.length / itemsPerPage - 1 + 1 * itemsPerPage}`
      );
      return (topItems.length / itemsPerPage - 1) * itemsPerPage;
    } else {
      console.log(
        `offset: ${Math.floor(topItems.length / 3) + 1 * itemsPerPage}`
      );
      return Math.floor(topItems.length / 3) * itemsPerPage;
    }
  };

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
