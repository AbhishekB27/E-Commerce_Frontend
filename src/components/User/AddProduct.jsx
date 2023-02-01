import { useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/product/productAction";
import Loader from "../Loader";
import ProductSchema from "./productSchema";
import useUploadImage from "./useUploadImage";

const AddProduct = () => {
  const {handleImage,detail} = useUploadImage()
  const {url,img,progress} = detail
  const dispatch = useDispatch()
  const {pLoading} = useSelector(state => state.products)
  const [product, setProduct] = useState({
    // productName:'',
    // category:'',
    // gender:'',
    // brand:'',
    // stock:'',
    // description:'',
    imageURL:'',
    // size:'',
    // color:'', 
    // price:'',
  })
  const initialValues ={
    productName:'',
    category:'',
    gender:'',
    brand:'',
    stock:'',
    description:'',
    imageURL:'',
    size:'',
    color:'', 
    price:'',
    featuredProduct:false,
  }
  const handlePro = (data) => {
    dispatch(addProduct(data))
    // console.log(data)
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ProductSchema,
    onSubmit:handlePro
  })
  useEffect(() => {
    setProduct(prev => {return{...prev,imageURL:url}})
    console.log(url)
  
  }, [url])
  
  // console.log(progress + " : " + img + " : " + url)
  // const handleInput = (event) => {
  //   console.log(event.target.value)
  //   const name = event.target.name
  //   const value = event.target.value
  //   if(name === 'color' || name === 'size'){
  //     setProduct(prev => {return{...prev,[name]:value.split(',')}})
  //   }
  //   else return setProduct(prev => {return{...prev,[name]:value}})
  // }
  const handleChange =(event,setFieldValue)=>{
    const name = event.target.name
    const value = event.target.value
    console.log(name)
    if(name === 'color' || name === 'size'){
      setFieldValue([name],value.split(','))
    }
  }
  // const handleProduct = (event) => {
  //   event.preventDefault();
  //   console.log(Object.keys(product).length)
  //   if(Object.keys(product).length === 10){
  //     console.log("I m ready to add product")
  //     dispatch(addProduct(product))
  //   }else{
  //     console.log("I am not ready to add product")
  //   }
  // }
  // const handleImage = (event) => {
  //   const file = event.target.files
  //   console.log(file)
  //   uploadImage(file)
  //   const pImage = URL.createObjectURL(event.target.files[0])
  //   setImage(pImage)
  // }
  return (
    <div className="w-full lg:translate-y-[-8rem] translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl bg-slate-100 dark:bg-gray-900 lg:translate-x-[-0.5rem] md:rounded">
      <div className="text-center text-lg font-semibold md:text-left border-b-2 border-blue-500 dark:border-b-gray-300">
        Add Product
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="space-y- flex flex-col justify-between">
          <div className=" text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            {" "}
            <label htmlFor="pName">Product Name</label>{" "}
            <input
            onChange={formik.handleChange}
              className="text-gray-400 text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
              type="text"
              name="productName"
              id="pName"
              value={formik.values.productName}
            />{" "}
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.productName && formik.touched.productName)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.productName}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
          <div className="grid sm:grid-cols-[auto_8rem] gap-3 text-sm font-semibold">
            {" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="category">Category</label>{" "}
              <input
            onChange={formik.handleChange}
            value={formik.values.category}
                className="text-gray-400 text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
                type="text"
                name="category"
                id="category"
              />{" "}
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.category && formik.touched.category)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.category}
                    </div>
                  ) : null}{" "}
                </div>
            </div>{" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="gender">Gender</label>{" "}
              <select 
              required
              onChange={formik.handleChange}
              name="gender"
              className="text-gray-400 text-base px-3 py-2 w-full rounded outline-none cursor-pointer">
                {" "}
                <option value=''>
                  Select
                </option>{" "}
                <option value='Male'>
                  Male
                </option>{" "}
                <option value='Female'>
                  Female
                </option>{" "}
              </select>{" "}
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.gender && formik.touched.gender)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.gender}
                    </div>
                  ) : null}{" "}
                </div>
            </div>{" "}
          </div>
          <div className=" text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            {" "}
            <label htmlFor="brand">Brand</label>{" "}
            <input
            onChange={formik.handleChange}
            value={formik.values.brand}
              className="text-gray-400 text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
              type="text"
              name="brand"
              id="brand"
            />{" "}
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.brand && formik.touched.brand)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.brand}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
          <div className=" text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            {" "}
            <label htmlFor="description">Description</label>{" "}
            <textarea
            onChange={formik.handleChange}
            value={formik.values.description}
              className="text-gray-400 resize-none h-[12.5rem] text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
              type="text"
              name="description"
              id="description"
            />{" "}
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.description && formik.touched.description)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.description}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
        </div>

        <div className="space-y-2 flex flex-col justify-between">
          <div className="text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            <span className="">Product Image</span>
            <div className="relative grid sm:grid-cols-2 gap-2 w-full">
              <div className="h-[10rem] relative border-2 rounded grid place-items-center overflow-auto">
                <div style={{width:`${progress}%`}} className="absolute left-0 grid place-items-center overflow-hidden h-full bg-white/30 text-white"> {progress === 100 ? 'Completed' : progress} </div>
                {img != null ? <img className="w-full h-full object-contain" src={img} alt="img" /> : <span>No Images</span>}{" "}
              </div>
              <label
                className={`h-[10rem] border-dashed border-2 font-sans text-xs font-medium border-gray-400 ${img != null ? 'cursor-not-allowed' : ''} rounded flex justify-center items-center flex-col cursor-pointer hover:bg-slate-400/30`}
                htmlFor="productImage"
              >
                {" "}
                <i class="fa-solid fa-image"></i>{" "}
                <p>
                  Drop your images here or{" "}
                  <span className="text-sm hover:underline cursor-pointer">
                    Click to browse
                  </span>
                </p>{" "}
              </label>
              <input
              disabled={img != null ? true : false}
              onChange={(event)=>{handleImage(event, formik.setFieldValue)}}
                className="appearance-none absolute w-0 h-0 invisible"
                type="file"
                name="imageURL"
                id="productImage"
              />
              
            </div>
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.imageURL && formik.touched.imageURL)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.imageURL}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold">
            {" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="size">Size</label>{" "}
              <input
              onChange={(event)=>{handleChange(event, formik.setFieldValue)}}
              value={formik.values.size}
                className="text-gray-400 text-sm font-normal tracking-wider px-3 py-2 w-full rounded outline-none"
                placeholder="XXXL,XXL,XL,L,M,S"
                type="text"
                name="size"
                id="size"
              />{" "}
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.size && formik.touched.size)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.size}
                    </div>
                  ) : null}{" "}
                </div>
            </div>{" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="color">Color</label>{" "}
              <input
              id="color"
              onChange={(event)=>{handleChange(event, formik.setFieldValue)}}
              value={formik.values.color}
              name="color"
                className="text-gray-400 text-sm font-normal px-3 py-2 w-full rounded outline-none"
                placeholder="#000000,#121212,#111111"
              />{" "}
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.color && formik.touched.color)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.color}
                    </div>
                  ) : null}{" "}
                </div>
            </div>{" "}
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold">
            {" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="price">Price</label>{" "}
              <input
              onChange={formik.handleChange}
              value={formik.values.price}
                className="text-gray-400 text-sm font-normal tracking-wider px-3 py-2 w-full rounded outline-none"
                type="text"
                name="price"
                id="price"
              />{" "}
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.price && formik.touched.price)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.price}
                    </div>
                  ) : null}{" "}
                </div>
            </div>{" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="stock">Stock</label>{" "}
              <input
              id="stock"
              onChange={formik.handleChange}
              value={formik.values.stock}
              name="stock"
                className="text-gray-400 text-sm font-normal px-3 py-2 w-full rounded outline-none"
              />{" "}
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.stock && formik.touched.stock)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.stock}
                    </div>
                  ) : null}{" "}
                </div>
            </div>{" "}
            <div className="flex flex-col justify-cente items-start gap-1">
              {/* <label htmlFor="">Mark as Featured</label> */}
              <div className="w-full flex justify-start items-center gap-1">
              <div className="grid place-items-center">
              <input
              type='checkbox'
              onChange={formik.handleChange}
              value={formik.values.featuredProduct}
              name="featuredProduct"
                className="text-gray-400 text-sm font-normal px-3 py-2 w-full roline-none"
              />
              </div>
              <label className="text-sm font-sans font-normal" htmlFor="stock">Mark as Featured Product </label>{" "}

              {/* <label className="text-sm font-sans font-normal" htmlFor="stock">No</label>{" "}
              <input
              type='checkbox'
              // id="stock"
              // checked
              onChange={formik.handleChange}
              name="featuredProduct"
                className="text-gray-400 text-sm font-normal px-3 py-2 w-full rounded outline-none"
              /> */}
              </div>
              <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.featuredProduct && formik.touched.featuredProduct)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.featuredProduct}
                    </div>
                  ) : null}{" "}
                </div>
              <div className="flex justify-center items-center gap-1">
              
              </div>
            </div>{" "}
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            disabled={pLoading ? true : false}
            type='submit'
            className="bg-gradient-to-l font-semibold hover:bg-gradient-to-r dark:from-gray-300 dark:to-gray-300 dark:text-gray-900 from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white grid place-items-center w-full h-[2rem] rounded py-1"
          >
            {pLoading ? <Loader/> : 'Add Product'
}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
