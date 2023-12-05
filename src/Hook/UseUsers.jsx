import { useQuery } from "@tanstack/react-query";

const UseUsers = () => {
    const {  data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/user-route/getAllUser');
            return res.json();
        }
    })

    return [users, refetch];
};

export default UseUsers;