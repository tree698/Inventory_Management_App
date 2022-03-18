import React, { memo } from 'react';

const Navbar = memo((props) => {
  return (
    <nav>
      <i className="nav-icon fa-solid fa-cart-flatbed"></i>
      <span className="nav-title">Your Inventory</span>
      <div className="nav-count">
        Total Number of Items:
        <span className="nav-count-num">{props.totalCount}</span>
      </div>
    </nav>
  );
});

export default Navbar;
