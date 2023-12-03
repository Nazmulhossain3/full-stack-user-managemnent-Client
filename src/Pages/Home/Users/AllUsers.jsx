import { useEffect, useState } from "react";
import AllUsersCard from "../../../LayOut/Main/Cards/AllUsersCard";
import UserFilter from "./UserFilter";

const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);
  const [filterUser,setFilterUser] = useState([])
  const [userSearch, setUserSearch] = useState("");



  //   const [currentPage, setCurrentPage] = useState(0);
//   const [userPerPage, setUserPerPage] = useState(20);
//   const { countUser } = useLoaderData();
//   console.log(countUser);

//   const totalPages = Math.ceil(countUser / userPerPage);
//   const pagesNumber = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch("https://full-stack-user-management-server.vercel.app/user-route/getAllUser")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        setAllUser(data.result);
        setFilterUser(data.result);
      });
  }, []);

  // this is for user search functionality

  const handleUserSearch = () => {
    fetch(`https://full-stack-user-management-server.vercel.app/user-route/search/${userSearch}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        setFilterUser(data.result);
      });
  };

  return (
    <div>
      {/* here is user search functionlity using their name */}

      <div className="join lg:py-24 px-20cd  ">
        <div>
          <div >
            <input
              onChange={(e) => setUserSearch(e.target.value)}
              className="input input-bordered join-item "
              placeholder="Search User Name"
            />
          </div>
        </div>

        <div className="indicator">
          <button onClick={handleUserSearch} className="btn join-item">
            Search
          </button>
        </div>
      </div>

      <UserFilter allUser={allUser} setFilterUser={setFilterUser}></UserFilter>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 gap-y-6">
        {filterUser.map((user, index) => (
            <AllUsersCard key={index} user={user}></AllUsersCard>
          ))}
      </div>

      {/* here is pagination fuctionality */}
      {/* <div className="text-center mb-16">
        <p>currentPage :{currentPage} </p>
        {pagesNumber.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className=" text-xl mr-5"
            key={number}
          >
            {number}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default AllUsers;
