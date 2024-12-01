import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedCoffee = ({coffee}) => {
    const updatedCoffee = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo } = updatedCoffee;


    const handleUpdatedCoffeeDetails =(e) =>{
        e.preventDefault();
        const addCoffeeForm = e.target;
        const name = addCoffeeForm.name.value;
        const chef = addCoffeeForm.chef.value;
        const supplier = addCoffeeForm.supplier.value;
        const taste = addCoffeeForm.taste.value;
        const category = addCoffeeForm.category.value;
        const details = addCoffeeForm.details.value;
        const photo = addCoffeeForm.photo.value;
        
        const CoffeeNext = {name,chef,supplier,taste,category,details,photo}
        console.log(CoffeeNext);
        
           //send data to the server
           fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(CoffeeNext)
          })
          .then(res=> res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Updated Coffee',
                    icon: 'success',
                    confirmButtonText: 'Coffee Added'
                })
            }
          })
        
        }

    return (
        <div className="bg-[#F4F3F0] p-24 w-7/12 mx-auto my-20">
        <h1 className="text-[#374151] text-4xl font-titleFont text-center"> Updated Existing Coffee Details</h1>
        <p className="font-paraFont text-[#1B1A1AB3] text-center mb-5 text-lg">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

        <form onSubmit={handleUpdatedCoffeeDetails} >
            <div className="md:flex gap-4 mb-7">
                <div className="form-control w-1/2">
                    <label className="form-control">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="name" className="grow w-full" defaultValue={name} placeholder="Enter coffee name" />
                    </label>
                </div>

                <div className="form-control w-1/2">
                    <label className="form-control">
                        <span className="label-text">Chef</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text"  name="chef" className="grow w-full" defaultValue={chef} placeholder="Enter coffee chef" />
                    </label>
                </div>

            </div>

            <div className="md:flex gap-4 mb-7">
                <div className="form-control w-1/2">
                    <label className="form-control">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text"  name="supplier" className="grow w-full" defaultValue={supplier} placeholder="Enter coffee supplier" />
                    </label>
                </div>

                <div className="form-control w-1/2">
                    <label className="form-control">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text"  name="taste" className="grow w-full" defaultValue={taste} placeholder="Enter coffee taste" />
                    </label>
                </div>

            </div>

            <div className="md:flex gap-4 mb-7">
                <div className="form-control w-1/2">
                    <label className="form-control">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="category" className="grow w-full" defaultValue={category} placeholder="Enter coffee category" />
                    </label>
                </div>

                <div className="form-control w-1/2">
                    <label className="form-control">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="details" className="grow w-full" defaultValue={details} placeholder="Enter coffee details" />
                    </label>
                </div>

            </div>

            
            <div className="form-control mb-7">
                <label className="form-control">
                    <span className="label-text">Photo</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" name="photo" className="grow" defaultValue={photo} placeholder="Enter photo URL" />
                </label>
            </div>

                <input type="submit" value="Update Coffee Details" className="btn btn-block bg-[#D2B48C] font-titleFont border-3 border-black"/>
        </form>
    </div>
    );
};

export default UpdatedCoffee;