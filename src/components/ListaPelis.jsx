import { Container,Col,Row } from "react-bootstrap";
import ItemPeli from "./ItemPeli";

const ListaPelis = ({peliculas,borrarPelicula}) => {
    return (
        <Container className="mt-3">
        <Row >
        {peliculas.map((pelicula,index)=>  <Col key={index} xs={12} md={6} lg={4}>
          <ItemPeli pelicula={pelicula} borrarPelicula={borrarPelicula}/>
          </Col>)}
        </Row>
      </Container>
    );
};

export default ListaPelis;