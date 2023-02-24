// import logo from './logo.svg';
// import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import MainContent from "./components/mainContent/MainContent";
import Naujienos from "./components/naujienos/Naujienos";
import Programos from "./components/programos/Programos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <ul>
            <li>
              <Link to='/codeacademy'>CodeAcademy Project</Link>
            </li>
            <li>
              <Link to='/other-projects/contacts'>Contacts</Link>
            </li>
          </ul>
        } />
        <Route path="/codeacademy" element={<MainContent />} />
        <Route path="/codeacademy/news" element={<Naujienos />} />
        <Route path="/codeacademy/programs" element={<Programos />} />
        <Route
          path="/*"
          element={
            <div>
              <h1>404 error. Page not found.</h1>
              <Link to="/">Back to Home page</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
