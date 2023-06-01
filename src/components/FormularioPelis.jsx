import { Form,Button, Container, Alert } from "react-bootstrap";
import ListaPelis from "./ListaPelis";
import {useForm} from 'react-hook-form'

const FormularioPelis = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()


    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <>
        <Container>
        <Form onSubmit={handleSubmit(onSubmit)}
        className="bg-primary-subtle py-5 border border-secondary w-100 m-auto mt-5">
            <h3 className="text-center">Formulario Peliculas que se guardan en localStorage</h3>
            <hr />
        <Form.Group controlId="nombre">
          <Form.Label>Nombre *</Form.Label>
          <Form.Control
            {...register("nombre",{required:"El nombre de la pelicula es requerido. ",minLength:2,maxLength:30})}
            type="text"
            placeholder="Ingrese su nombre"
            className="my-input w-100 border border-secondary mb-2 p-2"
          />
        </Form.Group>
  
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción *</Form.Label>
          <Form.Control
            {...register("descripcion",{required:"La descripción de la pelicula es requerido. ",minLength:10,maxLength:300})}
            as="textarea"
            placeholder="Ingrese una descripción"
            className="my-textarea w-100 border border-secondary mb-2 p-2"
          />
        </Form.Group>
  
        <Form.Group controlId="genero">
          <Form.Label>Género *</Form.Label>
          <Form.Control 
          as="select" 
          className="my-select w-100 border border-secondary mb-2 p-2"
          {...register("genero",{required:"Es requerido seleccionar un genero de pelicula. "})}
          >
            <option value="">Seleccione un género</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="infantil">Infantil</option>
          </Form.Control>
        </Form.Group>
      {errors?.nombre && <Alert variant="danger">{errors.nombre?.message}El nombre como minimo 2 caracteres y como maximo 30</Alert>}
      {errors?.descripcion && <Alert variant="danger">{errors.descripcion?.message}La descripción como minimo 10 caracteres y como maximo 300</Alert>}
      {errors?.genero && <Alert variant="danger">{errors.genero?.message}</Alert>}
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