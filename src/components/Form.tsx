import { useFormik } from "formik"

export const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => console.log(values)
        
    })

    return (
            <form id="form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Nome:</label>
                    <input required type="text" onChange={formik.handleChange} value={formik.values.name} name="name" id="name"/>

                    <label htmlFor="email">Email:</label>
                    <input required onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email"/>

                    <label htmlFor="password">Senha:</label>
                    <input required onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password"/>

                    <button type="submit">Enviar</button>
            </form>
    )
}