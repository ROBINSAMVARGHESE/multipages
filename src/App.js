import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rootlayouts from './Components/layouts/Rootlayouts';
import Home from './Pages/home/Home';
import TodoApp from './Pages/todo/TodoApp';
import Countriesbox from './Pages/countries/Countriesbox';
import Notfound from './Pages/notfound/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayouts />}>
          <Route index element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/countries" element={<Countriesbox />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;