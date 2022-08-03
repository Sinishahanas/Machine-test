import React from 'react'
import {Table} from 'react-bootstrap'
import './style.css'

function TableData({user}) {

  return (
    <div>
<Table bordered className="table">
        <thead>
          <tr>
            <th rowSpan={3}>Id</th>
            <th rowSpan={3}>Name</th>
            <th rowSpan={3}>Username</th>
            <th rowSpan={3}>Email</th>
            <th colSpan={6}>Address</th>
            <th rowSpan={3}>Phone</th>
            <th rowSpan={3}>Website</th>
            <th colSpan={3}>Company</th>
          </tr>
          <tr>
            <th rowSpan={2}>Street</th>
            <th rowSpan={2}>Suite</th>
            <th rowSpan={2}>City</th>
            <th rowSpan={2}>Zipcode</th>
            <th colSpan={2}>Geo</th>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>CatchPhrase</th>
            <th rowSpan={2}>Bs</th>
          </tr>
          <tr>
            <th>lat</th>
            <th>lng</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {user.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.geo.lat}</td>
              <td>{user.address.geo.lng}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
              <td>{user.company.bs}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TableData