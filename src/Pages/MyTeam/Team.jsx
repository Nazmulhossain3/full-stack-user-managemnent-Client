import { useEffect, useState } from "react";
import TeamCard from "../../LayOut/Main/Cards/TeamCard";

const Team = () => {
    const [teams,setTeams] = useState([])

    useEffect(()=> {
        fetch('https://full-stack-user-management-server.vercel.app/team-route/getTeam')
        .then(res => res.json())
        .then(data => {
            setTeams(data.result)
        })
    },[])


    return (
       <div>

        <h2 className="text-3xl p-12 text-center "> Here is My team</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 gap-y-6">
        
        
        
        
        {
            teams.map((user,index)=> <TeamCard key={index} user={user}></TeamCard> )
        }
    </div>
       </div>
    );
};

export default Team;