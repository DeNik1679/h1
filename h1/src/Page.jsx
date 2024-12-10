import React from 'react';
import { data, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const Page = ({items}) => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Page</p>
            <button onClick={ ()=> {
                navigate(-1)
            }}> go back</button>

            {
                items.map((items) => (
                    <h2>{items.name}</h2>
                ))
            }
            

        </div>
    );
}

export default Page;
