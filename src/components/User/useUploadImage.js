import React from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
const useUploadImage = () => {

  const [detail, setDetail] = useState({url:null,img:null,progress:0,error:false});
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const handleImage = (event,setFieldValue) => {
    const file = Array.from(event.target.files)
    console.log(file)
    file.map(image => {
      if(types.includes(image.type)){
        const pImage = URL.createObjectURL(image)
        setDetail(prev => {return {...prev,img: pImage}})
        const storageRef = ref(storage,`images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef,image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setDetail(prev => {return {...prev,progress: progress}})
            },
            (error) => {
                toast.error(error,{position:'top-center'})
                setDetail(prev => {return {...prev,error:error}})
            },
            async () => {
                await getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                  setFieldValue(event.target.name,downloadURL)
                setDetail(prev => {return {...prev,url:downloadURL}})
                }).catch((error) => {
                    console.log(error);
                    toast.info(error.message, { position: "top-center" });
                setDetail(prev => {return {...prev,error: error}})
                  });
            }
        )
      }
    })
    console.log(file)
        console.log(types.includes(file[0].type))
    }
    
    return {handleImage,detail}
}

export default useUploadImage


   
