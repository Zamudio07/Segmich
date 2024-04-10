import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function Header() {
    return <div style={{height:60, backgroundColor:"blueviolet"}}>Header</div>;
  }

  function Footer() {
    return <div style={{height:50, backgroundColor:"purple"}}>Footer</div>;
  }

  function SideMenu() {
    const handleMenuClick = ({ key }) => {
      if (key === "signout") {
        // TODO: Agrega la funcionalidad de cerrar sesión aquí
      } else {
        navigate(key);
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Menu
          onClick={handleMenuClick}
          items={[
            { label: "Inicio", key: "/Home" },
            { label: "Historico", key: "/history" },
            { label: "Estadísticas", key: "/stats" }
          ]}
        />
        <Content />
      </div>
    );
  }// esta parte es el sidebar para agregar o quitar rutas

  return (
    <div>
      <Header />
      <div>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  ); //aqui se agregan las diferentes funciones
}


function Content() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<div>Inicio</div>} />
        <Route path="/history" element={<div>Historico</div>} />
        <Route path="/stats" element={<div>Estadísticas</div>} />
      </Routes>
    </div>
  );
}// en esta parte se agregan las rutas que aparecen en el sidebar

export default Home;

