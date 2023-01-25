import { useState } from 'react';

export default function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSumit = (event) => {
        event.preventDefault();

        onSubmit('cars');
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return( 
        <div>
            <form onSubmit={handleFormSumit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>

)}