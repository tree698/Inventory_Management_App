import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i className="nav-icon fa-solid fa-cart-flatbed"></i>
        <span className="nav-title">Your Inventory</span>
        <div className="nav-count">
          Total Number of Inventory:
          <span>{this.props.totalCount}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
