import { Routes, Route } from "react-router-dom";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import AdminScreen from "../pages/AdminScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import CursoScreen from "../pages/CursoScreen";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";

const RoutesDos = ({ cerrarSesion, user }) => {
  return (
    <>
      <NavbarApp cerrarSesion={cerrarSesion} user={user} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/curso/:id" element={<CursoScreen />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
          }
        />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <FooterApp />
    </>
  );
};

export default RoutesDos;
