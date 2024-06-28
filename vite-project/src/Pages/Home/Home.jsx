import { Link } from 'react-router-dom';
// import './App.css'
const BookShelf = () => {
    return (
        <div>
            <h1>Books World</h1>
            <h3>Welcome Bibiliophile</h3>

            <Link to = '/books'>Dashboard</Link>
        </div>
    )
}
export default BookShelf