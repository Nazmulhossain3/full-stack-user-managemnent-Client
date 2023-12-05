import Swal from "sweetalert2";
import UseUsers from "../Hook/UseUsers";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserTableCard = () => {
  const [users, refetch] = UseUsers();
  const { id } = useParams();
  console.log(id);

  // here delete user by onclick

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://full-stack-user-management-server-r8sammynr-nazmulhossain3.vercel.app/user-route/deleteUser/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Users has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Domain</th>
                <th>Action</th>
              </tr>

              {users?.result?.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">{user.first_name} </td>
                  <td className="p-3 px-5">{user.email}</td>
                  <td className="p-3 px-5">{user.domain}</td>
                  <td className="p-3 px-5 flex justify-end">
                    {/* here is Edit button with update user */}

                    <Link to={`/update/${user._id}`}>
                      <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                    </Link>

                    {/* here is delete button */}

                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTableCard;
