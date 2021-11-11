import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class Formulario extends Component {
    handleSubmit = ({nome, telefone, email}) => {
        if(nome === '' && telefone  === '' && email === ''){
            Swal.fire({
            title: "O formulário não foi preenchido corretamente",
            icon: "error",
            text: 'Por favor verifique se os campos "Nome", "Telefone" e "Email" foram preenchidos'
            });
        }
        else {
            Swal.fire({ 
            title: "Valores Enviados:",
            icon: "success",
            html: `Nome: ${nome} <br> Telefone: ${telefone} <br> Email: ${email}`
            })
        }
        
        console.log(this.state.nome);
    }

    render() {
        return (
            <>

                <Formik initialValues={{ nome: '', telefone:'', email: '' }} onSubmit={this.handleSubmit}>
                    <Form>
                        <Field placeholder="insira seu nome" type="text" name="nome" id="nome" className="form-control" />
                        <Field placeholder="insira seu telefone - (xx) xxxxx-xxxx" type="text" name="telefone" id="telefone" className="form-control" />
                        <Field placeholder="insira seu email - nome@email.com" type="email" name="email" id="email" className="form-control" />
                        <button type="submit">Enviar</button>
                    </Form>
                </Formik>
            </>
        );
    }
}