import './App.css';
import React from 'react';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import RecommendedVideos from './Component/RecommendedVideos'; 
import SearchPage from './Component/SearchPage';
function App() {
  return (
    <div className="app">
        <Router>
        <Header/>
        <Switch>
        <Route path="/search/:searchTerm">
        <div className="app-page">

        <Sidebar/>
       <SearchPage/>
        </div>
        </Route>
         <Route path="/">
         <div className="app-page">

          <Sidebar/>
         <RecommendedVideos/>
          </div>

         </Route>

       
         </Switch>
         </Router>
     
       
        
    </div>
  );
}

export default App;
