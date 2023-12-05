import { useQuery } from "@tanstack/react-query";

const UseUsers = () => {
    const {  data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://full-stack-user-management-server-r8sammynr-nazmulhossain3.vercel.app/user-route/getAllUser');
            return res.json();
        }
    })

    return [users, refetch];
};

export default UseUsers;