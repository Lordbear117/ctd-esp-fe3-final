/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {
          state.data.length > 0 ? (
            state.data.map((dentist) => (
              <Card dentist={dentist} key={dentist.id} />
            ))
          ) : (
            <p>No data available</p>
          )
        }
      </div>
    </main>
  )
}

export default Home