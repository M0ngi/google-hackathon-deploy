import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import GooglePage from './pages/google_page';
import SearchPage from './pages/search_page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<GooglePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
