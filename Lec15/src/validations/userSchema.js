import * as Yup from 'yup'

export const userSchema = Yup.object().shape({
    fullName: Yup.string().required('fullname is required'),
    email: Yup.string().email('invalid email').required('email is required'),
    age: Yup.number().required('age is required').min(10, 'min age is 10').max(80, 'max age is 80'),
    mobile: Yup.string().required('mobile is required').matches(/^\d+$/, {message: 'wrong format'}).length(9, 'wrong mobile')
})