/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {

  const { id } = useParams();
  const [dentist, setDentist] = useState({})

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        setDentist(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return (
    <>
      {dentist ? (
        <div className='details'>
          <h2>Detail Dentist ID: {dentist.id} </h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available</p>
      )}

    </>
  )
}

export default Detail