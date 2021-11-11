import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class Formulario extends Component {
    handleSubmit = ({nome, number}) => {
        if(nome === ''){
            Swal.fire({
            title: "Aconteceu um erro",
            icon: "error",
            text: "Vesh"
            });
        }
        else {
            Swal.fire({ 
            title: "Valores Enviados",
            icon: "success",
            text: "Deu tudo certo"
            })
        }
        
        console.log(this.state.nome);
    }

    render() {
        return (
            <>

                <Formik initialValues={{ nome: '', number: '' }} onSubmit={this.handleSubmit}>
                    <Form>
                        <Field placeholder="insira seu nome" type="text" name="nome" id="nome" className="form-control" />
                        <Field placeholder="insira sua idade" type="number" name="number" id="number" className="form-control" />
                        <button type="submit">Enviar</button>
                    </Form>
                </Formik>
            </>
        );
    }
}