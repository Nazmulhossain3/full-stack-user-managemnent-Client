import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import AddUser from './Pages/AddUser/AddUser.jsx';
import Team from './Pages/MyTeam/Team.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UsersTable from './Pages/UsersTable.jsx/UsersTable.jsx';
import UpdateUser from './Pages/UpdateUser.jsx/UpdateUser.jsx';
import ErrorPage from './Shared/errorPage/ErrorPage.jsx';

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('https://full-stack-user-management-server.vercel.app/user-route/getUserCount')
      },
      {
        path : '/addUser',
        element : <AddUser></AddUser>
      },
      {
        path :'/myteam',
        element : <Team></Team>
      },
      {
        path : '/usersTable',
        element : <UsersTable></UsersTable>
      },
      {
        path : "/update/:id",
        element : <UpdateUser></UpdateUser>
      }
    
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
  </React.StrictMode>,
)
