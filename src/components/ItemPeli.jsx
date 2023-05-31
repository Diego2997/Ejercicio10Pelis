import { Card,Button,Form } from "react-bootstrap";

const ItemPeli = () => {
    return (
        <Card className="border shadow p-3 mb-5 bg-primary-subtle rounded">
        <Card.Header>
        <Card.Title>Nombre:</Card.Title>
        </Card.Header>
        <Card.Body className="bg-form">
            <div className="d-flex justify-content-around align-items-center">
          <Card.Subtitle>
            Género:
          </Card.Subtitle>
          <Form.Control className="ms-3" type="text"  readOnly></Form.Control>
            </div>
            <div className="mt-2">
          <Card.Subtitle>
            Descripción:
          </Card.Subtitle>
          <Form.Control className="ms-3 textAreaPelis" as="textarea"  readOnly></Form.Control>
            </div>
        </Card.Body>
        <Card.Footer className="text-center">
            <Button type="button" variant="danger" className="ms-auto">Borrar</Button>
        </Card.Footer>
      </Card>
    );
};

export default ItemPeli;