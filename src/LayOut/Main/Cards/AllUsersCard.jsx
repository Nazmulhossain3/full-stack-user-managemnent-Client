/* eslint-disable react/prop-types */
import { Card } from "keep-react";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const AllUsersCard = ({user}) => {
 
 
 const handleAddTeam = (user)=> {

  fetch(`https://full-stack-user-management-server.vercel.app/team-route/selectedTeam/${user._id}`,{
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
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
        title: `${user.first_name} select as Team member`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })


 }
 
 
 
 
  return (
        <div>
<Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={user.avatar}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          
          </Card.Container>
          <Card.Container className="space-y-4 p-6">
            <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
             
              <span>Name : {user.first_name} {user.last_name} </span>
            </Card.Title>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
               
                <span>Domain : {user.domain}</span>
              </Card.Title>
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                
              </Card.Title>
            </Card.Container>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
              
                <span>Email : {user.email}</span>
              </Card.Title>
              
            </Card.Container>
            <Card.Container className="my-3 flex items-center justify-between">
            <button onClick={()=> handleAddTeam(user)} href="#_" className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative text-white">Select Team</span>
</button>
              <Card.Title className="text-body-3 font-medium text-metal-500">{user.gender}</Card.Title>
            </Card.Container>
          </Card.Container>
        </Card>
        </div>
    );
};

export default AllUsersCard;