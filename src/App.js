import React from 'react';
import { useGlobalContext } from './context';


import Navbar from './Navbar';
import CartContainer from './CartContainer'; 

function App() { 
  const { loading } = useGlobalContext() 
  return ( 
    <main>
      {loading && <h1 className='loading'>Loading...</h1>}
      {!loading  && ( 
        <>
          <Navbar />
          <CartContainer />
        </>
      )}
    </main>
   
  )
}

export default App;