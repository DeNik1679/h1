import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Page2 = ({ itemsPage }) => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Page2</h1>
<button onClick={ ()=> {navigate(-1)}}> go back</button>

      {
        itemsPage.map(item => (
          <h2 key={item.id}>{item.title}</h2>
        ))
      }

      

    </div>
  );
}

export default Page2;
