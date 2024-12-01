import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeesCard from './components/CoffeesCard';
import { useState } from 'react';

function App() {
  const coffeesData = useLoaderData();
  const [deleteCoffee, setDeleteCoffee] = useState(coffeesData);

  return (
    <div className='m-20'>
      <h1 className='text-4xl my-16 text-center '>Aurora Espresso {coffeesData.length}</h1>
<div className='grid md:grid-cols-2 gap-8 '>
{
        coffeesData.map(coffee => <CoffeesCard
        key={coffee._id}
        coffee={coffee}
        deleteCoffee = {deleteCoffee}
        setDeleteCoffee = {setDeleteCoffee}
        ></CoffeesCard>)
      }
</div>

    </div>
  )
}

export default App

