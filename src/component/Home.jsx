import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import COffeeCard from './COffeeCard';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
  
    return (
      <>
        <h1 className='text-6xl text-[#331a15cb] font-extrabold '>Coffee store: {coffees.length} </h1>
        <div className='grid grid-cols-2 gap-5 mt-12'>
          {
            coffees.map(coffee=><COffeeCard key={coffee._id}
               coffee={coffee} coffees={coffees} setCoffees={setCoffees}  >
  
               </COffeeCard>)
          }
        </div>
      </>
    )
};

export default Home;