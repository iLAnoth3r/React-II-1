import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="caja">
      <h1 style={{ textAlign: "center" }}>
        Cuéntanos, ¿en qué te podemos ayudar?
      </h1>
      <Form style={{ marginTop: 30, textAlign: "center" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <div style={{ textAlign: "center" }}>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default Contacto;
