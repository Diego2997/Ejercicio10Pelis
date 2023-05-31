import { Container,Col,Row } from "react-bootstrap";
import ItemPeli from "./ItemPeli";

const ListaPelis = () => {
    return (
        <Container className="mt-3">
        <Row >
          <Col xs={12} md={6} lg={4}>
          <ItemPeli/>
          <ItemPeli/>
          <ItemPeli/>
          </Col>
        </Row>
      </Container>
    );
};

export default ListaPelis;