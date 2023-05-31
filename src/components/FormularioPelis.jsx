import { Form,Button, Container } from "react-bootstrap";
import ListaPelis from "./ListaPelis";

const FormularioPelis = () => {
    return (
        <>
        <Container>
        <Form className="bg-primary-subtle py-5 border border-secondary w-100 m-auto mt-5">
            <h3 className="text-center">Formulario Peliculas que se guardan en localStorage</h3>
            <hr />
        <Form.Group controlId="nombre">
          <Form.Label>Nombre *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            className="my-input w-100 border border-secondary mb-2 p-2"
          />
        </Form.Group>
  
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción *</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingrese una descripción"
            className="my-textarea w-100 border border-secondary mb-2 p-2"
          />
        </Form.Group>
  
        <Form.Group controlId="genero">
          <Form.Label>Género *</Form.Label>
          <Form.Control as="select" className="my-select w-100 border border-secondary mb-2 p-2">
            <option value="">Seleccione un género</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Control>
        </Form.Group>
  
       <div className="text-center">
       <Button variant="danger" type="submit">
          Enviar
        </Button>
       </div>
        <hr />
      </Form>
        </Container>
      <ListaPelis/>
      </>
    );
};

export default FormularioPelis;