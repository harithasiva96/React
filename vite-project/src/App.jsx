import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import BookShelf from './Pages/Home/Home.jsx'
import Dashboard from './Pages/Dash/DashBoard.jsx'


const App = () => {
  const [info, setInfo] = useState([
    {id:1, bookName:'The Kite Runner', author:'Khaled Hosseini'},
    {id:2, bookName:'Brilliant Blunders', author:'Mario Livio'},
    {id:3, bookName:'Sputnik Sweetheart', author:'Murakami'}
]);

const addInfo = [
    {id:3, bookName:'After we fell', author:'Anna Tood'},
    {id:4, bookName:'The Hobbit', author:'J.R..R.Tolkien'},
    {id:5, bookName:'Chaos', author:'James Gleik'}
];

const [index, setIndex] = useState(0)



const handleaddInfo = () => {
  if (index < addInfo.length){

    setInfo((info) => [...info, { id: info.length + 1, bookName: addInfo[index].bookName, author: addInfo[index].author} ]);
    setIndex(index+1)
  }
};
  return (
      <Router>
          
              
              <Routes>
                    <Route path="/" element = {<BookShelf/> } />
                
                    <Route path="/books" element = {<Dashboard info={info} handleaddInfo={handleaddInfo}/>} />
              </Routes>
              
          
      </Router>
  );


}

export default App;
