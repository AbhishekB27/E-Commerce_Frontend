import * as Yup from 'yup'

const UserDataSchema = Yup.object().shape({
    firstName: Yup.string().min(3,'minimum 3 word').required('firstName is required'),
    lastName: Yup.string().min(3,'minimum 3 word').required('lastName is required'),
    userName: Yup.string().min(5,'minimum 5 word').required('Username is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.mixed().required('New password is required'),
})
export default UserDataSchema