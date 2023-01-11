import React from 'react'

const Stars = ({star}) => {
    const stars= []
    const StarF = <i class="fa-solid fa-star"></i> // it indicates full star
    const StarH = <i class="fa-regular fa-star-half-stroke"></i> // it indicates half star
    const StarB = <i class="fa-light fa-star"></i> // it indicates empty star
    for(let i = 0; i < 5; i++){
        let number = i + 0.5
        if(star >= i + 1){
            stars.push(StarF)
        }else if(star >= number){
            stars.push(StarH)
        }else{
            stars.push(StarB)
            
        }
    }
  return (
    <div>
        {
            stars.map(item => {
                return item
            })
        }
    </div>
  )
}

export default Stars