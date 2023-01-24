import { useState } from 'react';

export default function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSumit = (event) => {
        event.preventDefault();

        onSubmit('cars');
    }

    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return( 
        <div>
            <form onSubmit={handleFormSumit}>
                <input onChange={handleChange} />
            </form>
        </div>

)}