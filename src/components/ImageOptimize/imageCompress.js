export const imageCompress = (imageUrl,size={})=>{ // size is optional
    //base url of firebase storage bucket
    const fireUrl = 'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-354b9.appspot.com/o/images%2F'
    
    //It integrates directly with your Firebase Cloud Storage
    //and can deliver optimized and resized images across devices with minimal effort.
    //ImageKit is a cloud-based end-to-end image management
    //and delivery service. It comes with in-built storage and delivery CDN (AWS CloudFront).
    
    let imageKitUrl = 'https://ik.imagekit.io/iq6ykmlug/'
    if(Object.keys(size).length != 0){
        imageKitUrl =`https://ik.imagekit.io/iq6ykmlug/tr:w-${size.w},h-${size.h}/`
    }
    const finalUrl = imageUrl.replace(fireUrl,imageKitUrl)
    return finalUrl
}