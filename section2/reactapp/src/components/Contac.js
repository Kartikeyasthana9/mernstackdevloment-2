import { Button, Card, CardContent, CardMedia, TextField } from '@mui/material'
import { Container } from '@mui/system'
import { ErrorMessage, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const contac = () => {
    const formSubmit = (formdata) => {
        console.log(formdata);
    }

    const myValidation = Yup.object().shape({
        email: Yup.string().email('Invalid Email'),
        fullname: Yup.string().required('Fullname Required').min(3, 'Too Small')
    })
    return (
        <div>
            <Container>
                <Card>
                    <CardMedia height="300" component="img" image="https://i.ytimg.com/vi/8ZMxLZqL73M/maxresdefault.jpg" />
                    <CardContent>
                        <h2 className='text-center'> Contact Us Now</h2>

                        <Formik initialValues={{ fullname: '', email: '', phone: '' }} onSubmit={formSubmit}
                            validationSchema={myValidation}>
                            {({ values, handleSubmit, handleChange, errors }) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField error={Boolean(errors.fullname)} helperText={errors.fullname} sx={{ mt: 3 }} label="FullName" variant='outlined' value={values.fullname} id="fullname" onChange={handleChange} fullWidth />
                                    <TextField error={Boolean(errors.email)} helperText={errors.email} sx={{ mt: 3 }} label="Email Address" variant='outlined' value={values.email} id="email" onChange={handleChange} fullWidth />
                                    <TextField error={Boolean(errors.phone)} helperText={errors.phone} sx={{ mt: 3 }} label="Phone Number" variant='outlined' value={values.phone} id="phone" onChange={handleChange} fullWidth />
                                    <Button type='submit' sx={{ mt: 7 }} variant='contained'>   Submit</Button>
                                </form>
                            )}


                        </Formik>

                    </CardContent>
                </Card>
            </Container>

        </div>
    )
}

export default contac