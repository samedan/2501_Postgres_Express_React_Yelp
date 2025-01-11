import React from 'react'

function RestaurantList() {
  return (
    <div className='list-group'><table class="table table-dark table-hover">
    <thead>
      <tr className='bg-primary'>
        <th scope="col">Restaurant</th>
        <th scope="col">Location</th>
        <th scope="col">Price Range</th>
        <th scope="col">Ratings</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>McDonals</td>
        <td>NewYork</td>
        <td>$$</td>
        <td>---</td>
        <td><button className='btn btn-warning'>Update</button></td>
        <td><button className='btn btn-danger'>Delete</button></td>
        
      </tr>
      <tr>
        <td>McDonals</td>
        <td>NewYork</td>
        <td>$$</td>
        <td>---</td>
        <td><button className='btn btn-warning'>Update</button></td>
        <td><button className='btn btn-danger'>Delete</button></td>
        
      </tr>
      <tr>
        <td>McDonals</td>
        <td>NewYork</td>
        <td>$$</td>
        <td>---</td>
        <td><button className='btn btn-warning'>Update</button></td>
        <td><button className='btn btn-danger'>Delete</button></td>
        
      </tr>
     
    </tbody>
  </table></div>
  )
}

export default RestaurantList
