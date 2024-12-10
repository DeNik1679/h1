  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  import Home from "./Home";
  import Page from "./Page";
  import Page2 from "./Page2";
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import './App.css' 


  function App() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    // для page2
    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/posts')
        .then(({ data}) => setData2(data))
        .catch((err) => {
          console.log(err);
        });
    }, []);

    // для page1
    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => setData(data))
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
      <div>
        <BrowserRouter>
          <header className='header'>
          <Link  id='logo' to={'/'}>Logo</Link>
          <div className='logo'>
            <Link  className='home' to={'/'}>Home</Link>
            <Link className='page' to={'/page'}>Page</Link>
            <Link className='page2' to={'/page2'}>Page2</Link>
            </div>
          </header>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page' element={<Page items={data} />} />
            <Route path='/page2' element={<Page2 itemsPage={data2} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
