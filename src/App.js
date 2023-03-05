// import logo from './logo.svg';
// import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import CarsPage from "./components/CarsPage/CarsPage";
import Contacts from "./components/contacts-page/Contacts";
import CounterPage from "./components/CounterPage/CounterPage";
import MainContent from "./components/mainContent/MainContent";
import Naujienos from "./components/naujienos/Naujienos";
import Programos from "./components/programos/Programos";
import ShoppingListPage from "./components/ShoppingListPage/ShoppingListPage";
import ToDoList from "./components/ToDoList/ToDoList";

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
            <li>
              <Link to='/other-projects/counter'>Counter</Link>
            </li>
            <li>
              <Link to='/other-projects/cars'>Cars page</Link>
            </li>
            <li>
              <Link to='/other-projects/shopping-list'>Shopping list page</Link>
            </li>
            <li>
              <Link to='/other-projects/to-do-list'>To do list page</Link>
            </li>
          </ul>
        } />
        <Route path="/codeacademy" element={<MainContent />} />
        <Route path="/codeacademy/news" element={<Naujienos />} />
        <Route path="/codeacademy/programs" element={<Programos />} />
        <Route path="/other-projects/contacts" element={<Contacts />} />
        <Route path="/other-projects/counter" element={<CounterPage />} />
        <Route path="/other-projects/cars" element={<CarsPage />} />
        <Route path="/other-projects/shopping-list" element={<ShoppingListPage />} />
        <Route path="/other-projects/to-do-list" element={<ToDoList />} />
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
