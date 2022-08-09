import { Formik, Form, Field, ErrorMessage } from "formik"

type errorsType = {
    name?: string,
    email?: string,
    password?: string,
}

export const MyForm = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const onSubmit = (values : typeof initialValues)  => {
        console.log(values)
    }

    const validate = (values : typeof initialValues) => {

        let errors : errorsType = {}
    
        if(!values.name){
            errors.name = 'Campo obrigatório'
        }

        if(!values.email){
            errors.email = 'Campo obrigatório'
        }

        if(!values.password){
            errors.password = 'Campo obrigatório'
        }

        return errors
    }


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            <Form>
                <label htmlFor="name">Nome:</label>
                <Field type="text" id="name" name="name"/>
                <ErrorMessage name="name"/>

                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name="email"/>

                <label htmlFor="password">Senha:</label>
                <Field type="password" id="password" name="password"/>
                <ErrorMessage name="password"/>

                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    )
}