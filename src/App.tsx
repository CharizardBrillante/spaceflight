import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import Home from './components/Home';
import SingleArticle from './components/SingleArticle';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { GiBoomerangSun } from 'react-icons/gi';
import { Button } from 'react-bootstrap';
import useLocalStorage from 'react-use-localstorage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <Button 
          className="theme-button box-shadow mx-2" 
          onClick={switchTheme}>
              {theme === 'light' ? <FaMoon size={25}/> : <GiBoomerangSun size={25}/>}
        </Button>
        <MyNav theme={theme}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:articleId" element={<SingleArticle/>}/>
          <Route path="*" element={<NotFound/>}/>
  </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
