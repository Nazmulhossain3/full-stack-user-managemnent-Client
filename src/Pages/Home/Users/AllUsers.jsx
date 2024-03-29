import { useEffect, useState } from "react";
import AllUsersCard from "../../../Cards/AllUsersCard";
import UserFilter from "./UserFilter";
import { useLoaderData } from "react-router-dom";

const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [userPerPage, setUserPerPage] = useState(20);
  const { countUser } = useLoaderData();
  console.log(countUser);

  const totalPages = Math.ceil(countUser / userPerPage);
  const pagesNumber = [...Array(totalPages).keys()];


  useEffect(() => {

    async function fetchData() {
      try {
        const res = await fetch(`https://full-stack-user-management-server-r8sammynr-nazmulhossain3.vercel.app/user-route/getAllUser?page=${currentPage}&limit=${userPerPage}`);
        const data = await res.json();
        setAllUser(data.result);
        setFilterUser(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

   
  }, [currentPage,userPerPage]);

  // this is for user search functionality

  const handleUserSearch = () => {
    fetch(
      `https://full-stack-user-management-server.vercel.app/user-route/search/${userSearch}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        setFilterUser(data.result);
      });
  };


  const handleSelecChange = (event)=>{
    setUserPerPage(parseInt(event.target.value))
    setCurrentPage(0)
  }

  const options = [5, 10, 20];

  return (
    <div>
      {/* here is user search functionlity using their name */}

      <div className="join lg:py-24  pb-12  ">
        <div>
          <div>
            <input
              onChange={(e) => setUserSearch(e.target.value)}
              className="input input-bordered join-item lg:ml-60 md:ml-20  "
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
        {filterUser
          .filter((user) => {
            return userSearch.toLocaleLowerCase() === ""
              ? user
              : user.first_name.toLocaleLowerCase().includes(userSearch);
          })
          .map((user, index) => (
            <AllUsersCard key={index} user={user}></AllUsersCard>
          ))}
      </div>

      {/* here is pagination fuctionality */}
      <div className="text-center mb-16">
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

        <select value={userPerPage} onChange={handleSelecChange} >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AllUsers;
