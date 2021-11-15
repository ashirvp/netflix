import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,horror, comedy, romance, treding} from './urls'



function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title="Netfix Originals"/>
     <RowPost url={treding} title="Trending Movies" isSmall={true}/>
     <RowPost url={action} title="Action" isSmall={true}/>
     <RowPost url={horror} title="Horror" isSmall={true}/>
     <RowPost url={romance} title="Romance" isSmall={true}/>
     <RowPost url={comedy} title="Comedy" isSmall={true}/>
    </div>
  );
}

export default App;
