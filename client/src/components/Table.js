import React from 'react'

import './table.scss'
const Table = () => {
  return (
    <div className="container">
    <div className="panel panel-default">
        
        <div className="panel-body">
            <table className="table-latitude">
                 <caption>Employee Information</caption>
                  <thead>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>E-mail</th>
                </thead>
               
                <tbody>
                    <tr>
                        <th>Robyn</th>
                        <td>Technical Writer</td>
                        <td>robyn@example.com</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Table
