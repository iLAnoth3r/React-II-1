import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-start">
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home
        </Link>
        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          Contacto
        </Link>
      </Container>
      <Navbar.Brand>
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Happy Cake{" "}
          <img
            style={{ width: 40, height: 40 }}
            src="https://cdn.pixabay.com/photo/2013/07/13/10/12/birthday-156744_1280.png"
            alt=""
          />
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};
export default Navigation;
