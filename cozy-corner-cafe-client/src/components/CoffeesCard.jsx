import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeesCard = ({ coffee, deleteCoffee, setDeleteCoffee}) => {
    const {_id, name, chef, supplier, taste, category, details, photo } = coffee;
    
   const  handleRemove = (_id) =>{
console.log(_id);
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

    fetch(`http://localhost:5000/coffee/${_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
      Swal.fire(
        "Deleted!",
       "Your Add Coffee has been deleted.",
       "success"
        )
      const remainingCoffee = deleteCoffee.filter(cof => cof._id !== _id);
      setDeleteCoffee(remainingCoffee);
        }
    })
    }
  })
   }
    
    return (
        <div className="card card-side shadow-xl bg-[#F5F4F1]">
            <figure>
                <img
                    src={photo}
                    className='w-3/5'
                    alt="coffee" />
            </figure>

            <div className="flex justify-between w-full">

                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Price: 180 TK. </p>
                </div>

                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View</button>
                        <Link to={`updatedCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                        <button onClick={()=> handleRemove(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeesCard;