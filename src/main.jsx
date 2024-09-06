import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Myvote from './components/Myvote.jsx'
import Signup from './components/Signup.jsx'
import HomePage from './components/Homepage.jsx'
import ProfilePage from './components/profilePage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'

const router = createBrowserRouter([{path:'/', element: <App/>, children:[
    {path: '/', element: <HomePage/>},
    {path: '/signup', element: <Signup/>},
    {path:'/my-vote', element:<Myvote/>},
    {path:'/profile', element:<ProfilePage/>},
    {path: '/login', element:<LoginPage></LoginPage>}
]}])
ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}></RouterProvider>
)
