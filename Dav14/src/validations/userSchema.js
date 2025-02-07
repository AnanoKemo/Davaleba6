import * as Yup from 'yup'

export const userSchema = Yup.object().shape({
    firstName: Yup.string().required('FirstName is required'),
    lastName: Yup.string().required('LastName is required'),
    email: Yup.string().email('invalid email').required('email is required'),
    mobile: Yup.string().required('mobile is required').matches(/^\d+$/, {message: 'wrong format'}).length(9, 'wrong mobile')
})