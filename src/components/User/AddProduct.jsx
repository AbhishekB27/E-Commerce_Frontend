import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useUploadImage from "./useUploadImage";

const AddProduct = () => {
  const {handleImage,detail} = useUploadImage()
  const {url,img,progress} = detail
  const [product, setProduct] = useState({
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
  })
  useEffect(() => {
    setProduct(prev => {return{...prev,imageURL:url}})
    console.log(url)
  
  }, [url])
  
  console.log(progress + " : " + img + " : " + url)
  const handleInput = (event) => {
    console.log(event.target.value)
    const name = event.target.name
    const value = event.target.value
    if(name === 'color' || name === 'size'){
      setProduct(prev => {return{...prev,[name]:value.split(',')}})
    }
    else return setProduct(prev => {return{...prev,[name]:value}})
  }
  const handleProduct = (event) => {
    event.preventDefault();
    console.log(product)
  }
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
      <form onSubmit={handleProduct} className="w-full grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="space-y-2 flex flex-col justify-between">
          <div className=" text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            {" "}
            <label htmlFor="pName">Product Name</label>{" "}
            <input
            onChange={handleInput}
              className="text-gray-400 text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
              type="text"
              name="productName"
              id="pName"
            />{" "}
          </div>
          <div className="grid sm:grid-cols-[auto_8rem] gap-3 text-sm font-semibold">
            {" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="category">Category</label>{" "}
              <input
            onChange={handleInput}
                className="text-gray-400 text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
                type="text"
                name="category"
                id="category"
              />{" "}
            </div>{" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="gender">Gender</label>{" "}
              <select 
              name="gender"
              required
            onChange={handleInput}
              className="text-gray-400 text-base px-3 py-2 w-full rounded outline-none cursor-pointer">
                {" "}
                <option disabled hidden selected>
                  Select
                </option>{" "}
                <option name="male">
                  Male
                </option>{" "}
                <option name="female">
                  Female
                </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>
          <div className=" text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            {" "}
            <label htmlFor="brand">Brand</label>{" "}
            <input
            onChange={handleInput}
              className="text-gray-400 text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
              type="text"
              name="brand"
              id="brand"
            />{" "}
          </div>
          <div className=" text-sm flex flex-col justify-center items-start gap-1 font-semibold">
            {" "}
            <label htmlFor="description">Description</label>{" "}
            <textarea
            onChange={handleInput}
              className="text-gray-400 resize-none h-[12.5rem] text-sm tracking-wider px-3 py-2 w-full rounded outline-none"
              type="text"
              name="description"
              id="description"
            />{" "}
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
              onChange={handleImage}
                className="appearance-none absolute w-0 h-0 invisible"
                type="file"
                name="imageUrl"
                id="productImage"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold">
            {" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="size">Size</label>{" "}
              <input
              onChange={handleInput}
                className="text-gray-400 text-sm font-normal tracking-wider px-3 py-2 w-full rounded outline-none"
                placeholder="XXXL,XXL,XL,L,M,S"
                type="text"
                name="size"
                id="size"
              />{" "}
            </div>{" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="color">Color</label>{" "}
              <input
              id="color"
              onChange={handleInput}
              name="color"
                className="text-gray-400 text-sm font-normal px-3 py-2 w-full rounded outline-none"
                placeholder="#000000,#121212,#111111"
              />{" "}
            </div>{" "}
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold">
            {" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="price">Price</label>{" "}
              <input
              onChange={handleInput}
                className="text-gray-400 text-sm font-normal tracking-wider px-3 py-2 w-full rounded outline-none"
                type="text"
                name="price"
                id="price"
              />{" "}
            </div>{" "}
            <div className="flex flex-col justify-center items-start gap-1">
              {" "}
              <label htmlFor="stock">Stock</label>{" "}
              <input
              id="stock"
              onChange={handleInput}
              name="stock"
                className="text-gray-400 text-sm font-normal px-3 py-2 w-full rounded outline-none"
              />{" "}
            </div>{" "}
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type='submit'
            className="bg-gradient-to-l font-semibold hover:bg-gradient-to-r dark:from-gray-300 dark:to-gray-300 dark:text-gray-900 from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white w-full rounded py-1"
          >
            Add Product
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
