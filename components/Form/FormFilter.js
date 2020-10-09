import React from "react";
import { useToasts } from 'react-toast-notifications'
// reactstrap components
import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Label,
    Row,
    Col,
    Button
} from "reactstrap";

const FormFilter = ({ className='', onSearch = ()=>{}}) => {
    const { addToast } = useToasts()
    const msg = 'No ha ingresado condiciones de busqueda.'


    const handleSubmit = (event) => {
        event.preventDefault()
        let nombre = event.target.nombre_cientifico.value.trim()
        let genero = event.target.genero.value.trim()
        let alimentacion = event.target.alimentacion.value
        let data = {}

        if (nombre != '') {
            data.nombre_cientifico = nombre
        }
        if (genero != '' ) {
            data.genero = genero
        }
        if (alimentacion != '') {
            data.alimentacion = alimentacion
        }
        if (Object.keys(data).length==0) {
            addToast(msg, {
                appearance: 'info',
                autoDismiss: true,
            })
            return
        } else {
            onSearch(data)
            event.target.reset();
        }
    };

    return (
        <section className={'cp-form-filter ' + className}>
            <div className="p-4 w-md-75 w-lg-75 w-xl-50 m-auto">
                <Form onSubmit={handleSubmit} className='px-5'>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <Label for="exampleEmail">Nombre Científico</Label>
                                <Input
                                    className=" form-control-alternative"
                                    name='nombre_cientifico'
                                    placeholder="Nombre Científico"
                                    type="text"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="exampleEmail">Género</Label>
                                <Input
                                    className=" form-control-alternative"
                                    name='genero'
                                    placeholder="Género"
                                    type="text"
                                ></Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="exampleEmail">Alimentación</Label>
                                <Input 
                                    className=" form-control-alternative"
                                    type="select" name="alimentacion" id="exampleSelect">
                                    <option value="">Seleccionar</option>
                                    <option>Frugívoro</option>
                                    <option>Carnívoro</option>
                                    <option>Insectívoros</option>
                                    <option>Hematófagos</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-right'>
                            <Button size='md' type='submit' className='cp-button'>
                                <i className='fa fa-search mr-2'></i> Buscar
                            </Button>
                        </Col>
                    </Row>
                    
                </Form>
            </div>
        </section>
    );
}

export default FormFilter;