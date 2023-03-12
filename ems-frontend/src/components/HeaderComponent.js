import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='https://javaguides.net' className='navbar-brand'>EMS - Employee Management System</a>
                </div>
            </nav>
        </header>
    )
  }
}
