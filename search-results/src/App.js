import SearchBar from './components/SearchBar'

export default function App() {


    const handleSubmit = (term) => {
        console.log('Thank you for submit', term);
    }

    return <div>
            <SearchBar onSubmit={handleSubmit} />
           </div>
    
}