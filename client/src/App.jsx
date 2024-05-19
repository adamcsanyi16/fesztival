import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hozzaad from "./pages/Fesztivalhozzaad";
import Adatok from "./pages/Fesztivaladatok";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Container from "react-bootstrap/esm/Container";
import Footer from "./components/Footer";
import star from "../src/star.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" className="navbarka">
          <Container>
            <Navbar.Brand href="/">
              <img src={star} alt="" />
              Festival
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Főoldal</Nav.Link>
                <Nav.Link href="/fesztivalHozzaad">
                  Fesztivál hozzáadás
                </Nav.Link>
                <Nav.Link href="/fesztivalKiir">Fesztivál adatok</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fesztivalHozzaad" element={<Hozzaad />} />
          <Route path="/fesztivalKiir" element={<Adatok />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
