import Swal from "sweetalert2";

const AddUser = () => {

    const handleUserSubmit = (event)=> {
        event.preventDefault()

        const form = event.target 
        const first_name = form.first_name.value 
        const last_name = form.last_name.value
        const email = form.email.value
        const gender = form.gender.value 
        const avatar = form.avatar.value 
        const domain = form.domain.value 
        const available = form.available.value 

        const user = {
            first_name,
            last_name,
            email,
            gender,
            avatar,
            domain,
            available
        }
console.log(user)

        fetch('http://localhost:3000/user-route/createUser',{
          method : 'POST',
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Great! Users is added",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

    }



    return (
        <div>
            <div>
          <div className="p-8 rounded border border-gray-200">
        {" "}
        <h1 className="font-medium text-3xl text-center">Add A User</h1>{" "}
        <form onSubmit={handleUserSubmit} className="p-12">
          {" "}
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            {" "}
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
               gender
              </label>{" "}
              <input
                type="gender"
                name="gender"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="gender"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
              
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
               avatar
              </label>{" "}
              <input
                type="text"
                name="avatar"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your image"
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
            <div>
              {" "}
              <label
              
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
              available
              </label>{" "}
              <input
                type="text"
                name="available"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="available"
              />{" "}
            </div>{" "}
           



          </div>{" "}
          <div className="space-x-4 mt-8">
            {" "}
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              AddUser
            </button>{" "}
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
        </div>
        </div>
    );
};

export default AddUser;