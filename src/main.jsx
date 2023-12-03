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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
