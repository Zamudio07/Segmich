import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter y Route
import LoginF from './components/LoginF.js'; 
import './App.css';
import Home from './components/Home.js';

function App() {
    const [user, setUser] = useState(null); // para guardar el usuario que se registre por ahora

    return (
      <Router> {/* Utiliza BrowserRouter para establecer el enrutador */}
          <div className='App'>
              <Routes> {/* Utiliza Routes para definir tus rutas */}
                  <Route path="/Home" element={<Home />} /> {/* Define la ruta para el componente Home */}
                  <Route path="/" element={<LoginF setUser={setUser} />} /> {/* Define la ruta predeterminada para el componente LoginF */}
              </Routes>
          </div>
      </Router>
  );
};

export default App;