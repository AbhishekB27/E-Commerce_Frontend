import * as Yup from "yup";
const AddressSchema = Yup.object().shape({
    addressType:Yup.string().default('home').oneOf(['home','office'],'AddressType is required'),
    addressTitle:Yup.string().required('Address Title is required'),
    fullName:Yup.string().required('Full Name is required'),
    contactNumber: Yup.number().required('Contact Number is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
  });
  export default AddressSchema