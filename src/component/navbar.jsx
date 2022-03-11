import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav>
        <i className="nav-icon fa-solid fa-cart-flatbed"></i>
        <span className="nav-title">Your Inventory</span>
        <div className="nav-count">
          Total Number of Items:
          <span className="nav-count-num">{this.props.totalCount}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
