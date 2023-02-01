import * as Yup from 'yup'

const ProductSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    category: Yup.string().required('Category is required'),
    gender: Yup.string().oneOf(['Male', 'Female']).required('Gender is required'),
    brand: Yup.string().required('Brand is required'),
    description: Yup.string().max(300,'maximum 300 words').required('Description is required'),
    imageURL: Yup.mixed().required('Image URL is required'),
    size: Yup.array().of(Yup.string()).required('Size is required'),
    color: Yup.array().of(Yup.string()).required('Color is required'),
    price: Yup.number().typeError('Price should be a number').required('Price is required'),
    stock: Yup.number().typeError('Stock should be a number').required('Stock is required'),
    featuredProduct: Yup.bool().default(false).oneOf([true,false]),
})
export default ProductSchema