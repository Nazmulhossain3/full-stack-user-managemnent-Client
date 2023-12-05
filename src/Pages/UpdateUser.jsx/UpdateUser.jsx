import Swal from "sweetalert2";
import { useParams,useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate()


    const handleFormSubmit = (event)=> {
        event.preventDefault()

        const form = event.target
        const first_name = form.first_name.value 
        const last_name = form.last_name.value
        const email = form.email.value
        const domain = form.domain.value 
        const upateUser = {
            first_name,
            last_name,
            email,
            domain
        }
        console.log('update use', upateUser)

        fetch(`http://localhost:3000/user-route/updateUser/${id}`,{
            method : 'PUT',
            headers : {
                "Content-type" : 'application/json'
            },
            body : JSON.stringify(upateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Great! Users is Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            navigate('/usersTable')
        })
    }



    return (
        <div>
            <h2 className="pt-6 text-center text-3xl">here is update user</h2>

            <form className="p-12" onSubmit={handleFormSubmit}>
         <div className=" mt-8 grid lg:grid-cols-2 gap-4">
        <div>
            <label
            
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
             First Name
            </label>
            <input
            
              type="text"
              name="first_name"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your name"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
            
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Last Name
            </label>{" "}
            <input
         
              type="text"
              name="last_name"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="Enter your last name"
            />{" "}
          </div>{" "}

          <div>
            {" "}
            <label
            
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
             email
            </label>{" "}
            <input
          
              type="email"
              name="email"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="email"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label
            
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              domain
            </label>{" "}
            <input
       
              type="text"
              name="domain"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              placeholder="domain"
            />{" "}
          </div>{" "}      
        </div>
          <div className="flex flex-row gap-4 mt-6">
        <input className="border- py-3 px-3 bg-black text-white rounded-lg" type="submit" value="Update" />

     

            
            </div>  
            
            </form>      
        </div>
    );
};

export default UpdateUser;