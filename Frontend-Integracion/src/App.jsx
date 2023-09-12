import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import RoutesDos from "./routes/RoutesDos";
// import "./App.css";
import LoginScreen from "./pages/LoginScreen";
import ErrorScreen from "./pages/ErrorScreen";

function App() {
  //Estados para manejar login y datos de usuario
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  //Función para guardar datos del usuario autenticado
  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  //Función cuando inicia sesión
  const iniciarSesion = () => {
    setLogin(true);
  };

  //Función cuando cierra sesión
  const cerrarSesion = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas protegidas que reciben login, datos de usuario y función cerrar sesión*/}
        <Route
          path="/*"
          element={
            <ProtectedRoutes login={login}>
              <RoutesDos cerrarSesion={cerrarSesion} user={user} />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
        {/*Ruta de login que recibe función para iniciar sesión y guardar datos de usuario*/}
        <Route
          path="/login"
          element={
            <LoginScreen
              iniciarSesion={iniciarSesion}
              guardarUsuario={guardarUsuario}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
