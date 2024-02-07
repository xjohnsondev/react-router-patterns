import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import dogs from './db.json';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav dogs={dogs.dogs}/>
      <Routes>
        <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs.dogs}/>} />
        <Route exact path="/dogs" element={<DogList />} />
        <Route exact path="*" element={<Navigate to="/dogs" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
