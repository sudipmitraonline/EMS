import React, { Component } from 'react'

class EmployeeListComponents extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []
        }
    }
  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2>
        <br></br>
        <div className="row">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employees=><tr key={this.employees.id}>
                                <td>{employees.firstName}</td>
                                <td>{employees.lastName}</td>
                                <td>{employees.emailId}</td>



                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
export default EmployeeListComponents
