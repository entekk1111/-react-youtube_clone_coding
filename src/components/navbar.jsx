import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <i className="fa-brands fa-youtube"></i>
        <span className="title">Youtube</span>
        <form>
          <input type="text" className="searchInput" placeholder="검색" />
          <button className="searchBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Navbar;
