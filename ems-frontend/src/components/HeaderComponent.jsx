import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="header">
      <div className="header__logo">
        <a href="/">EMS - Employee Management System</a>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="/" className="header__nav-link">Home</a></li>
          <li className="header__nav-item"><a href="/about" className="header__nav-link">About</a></li>
          <li className="header__nav-item"><a href="/services" className="header__nav-link">Services</a></li>
          <li className="header__nav-item"><a href="/contact" className="header__nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
      </div>
    )
  }
}
