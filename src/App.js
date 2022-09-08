import React, { useState } from 'react';
import SongSearchForm from './components/SongSearchForm/SongSearchForm';
import './App.css';
import CardList from './components/card/CardList';
import Navigation from './components/Navigation';
import Signin from './components/Signin';
import Register from './components/Register';

const App = () => {
  const [route, setRoute] = useState('signin');
  const[isSignedIn, setIsSignedIn] = useState(false); //for routing 
  const [data, setData] = useState([]); //for fetching from the itunes API
  const [input, setInput] = useState(''); //for search parameters
  const [search, setSearch] = useState('');

  const getContent = async () =>{
    const url = new URL('https://itunes.apple.com/search');
    const params = { term: search, media: 'music'};
    url.search = new URLSearchParams(params);
    await fetch(url, { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setData(res.results);
    })
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
   }

   const onButtonSubmit = () => {
    setSearch(input);
    getContent(search);
  }

  const onRouteChange = (route) => {
    if(route==='home'){
      setIsSignedIn(true);
    }
    else{
      setIsSignedIn(false);
    }
    setRoute(route);
    setData([]); 
  }

  return (
    <div className="App">
    { route==='signin'
      ?  <div>
              <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
              <Signin onRouteChange={onRouteChange}/> 
         </div>
      :   route==='register' ? 
          <div>
              <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
              <Register onRouteChange={onRouteChange}/>
          </div>
      :   <div>
                <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
                <SongSearchForm
                  onInputChange={onInputChange}
                  onButtonSubmit={onButtonSubmit}
                  data={data}
                />
                <CardList data={data}/>
          </div>
    }    
    </div>
  );
}

export default App;




