import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    message: Yup.string().max(350,'maximum 350 words').required('Message is required')
})
export default ContactSchema