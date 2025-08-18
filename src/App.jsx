//import { useState } from 'react'
import './App.css'
import { useRoutes, Link } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'
import { Card } from './components/Card'
export default function App() {
  const routes = useRoutes([
    { path: '/',element: <h1></h1> },
    { path: '/showCreators', element: <ShowCreators /> },
    { path: '/AddCreator', element: <AddCreator /> }, 
  ]);
  return (
    <div className="container">
      
      <div className="header">
        <h1>CREATORVERSE</h1>
        <nav>
  
          <Link className = "showcreators" to="/showCreators">View All Creators</Link>
          <Link className = "addcreator"to="/AddCreator">Add A Creator</Link>
        </nav> 
      </div>
      <div className="main">
        {routes}
        
      </div>
      
    </div>
    
  );
}
