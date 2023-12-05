/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const UserFilter = ({ allUser, setFilterUser }) => {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedGender, setSelectGender] = useState("");

  useEffect(()=>{

    if( allUser.length > 0 &&  selectedDomain!== "" ){
        let filterDatas = []
        console.log(selectedDomain); 
    
        filterDatas = allUser.filter( (user) => user.domain ===  selectedDomain)
    
        setFilterUser(filterDatas);
    
       
    }

   
  },[selectedDomain, allUser])

  useEffect(()=>{

    if( allUser.length > 0 &&  selectedGender!== "" ){
        let filterDatas = []
        console.log(selectedGender); 
    
        filterDatas = allUser.filter( (user) => user.gender === selectedGender)
    
        setFilterUser(filterDatas);
    
       
    }

   
  },[selectedGender, allUser])



  
  
  

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center md:justify-center lg:justify-end gap-12 lg:px-32  ">
      <select
        onChange={(e) => setSelectedDomain(e.target.value)}
        className=" bg-gray-100 py-3 px-4"
      >
        <option disabled selected>
          {" "}
          Filter Domain
        </option>
        <option>Sales</option>
        <option>Finance</option>
        <option>Management</option>
        <option>Marketing</option>
      </select>


{/*here is for filtering for Gender  */}
<select
        onChange={(e) => setSelectGender(e.target.value)}
        className=" bg-gray-100 py-3 px-4"
      >
        <option disabled selected>
          {" "}
          Filter Gender
        </option>
        <option>Male</option>
        <option>Female</option>
        <option>Bigender</option>
       
      </select>

      
    </div>
  );
};

export default UserFilter;
