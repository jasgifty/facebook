import React from 'react'
import Story from './Story.js'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
             image='https://media.wired.com/photos/5e6c06e613205e0008da2461/master/w_2560%2Cc_limit/Biz-billgates-950211062.jpg' 
             profileSrc='https://media.wired.com/photos/5e6c06e613205e0008da2461/master/w_2560%2Cc_limit/Biz-billgates-950211062.jpg' 
             title='USER1' />
            
            <Story
             image='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e75465a10380d0006bdcb9f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1089%26cropX2%3D2195%26cropY1%3D4%26cropY2%3D1109' 
             profileSrc='https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg' 
             title='USER2'/>
            
            <Story
             image='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg' 
             profileSrc='https://en.wikipedia.org/wiki/Blue_Origin#/media/File:Blue_Origin_Feather.svg' 
             title='USER3'/>
            
            <Story
             image='https://i0.wp.com/www.mjworld.net/wp-content/uploads/bad-2.jpg?w=1000&ssl=1' 
             profileSrc='https://upload.wikimedia.org/wikipedia/commons/e/eb/The_Prime_Minister%2C_Shri_Narendra_Modi_presenting_the_USIBC_Global_Leadership_Award_to_Mr._Jeff_Bezos%2C_in_Washington_DC%2C_USA_on_June_07%2C_2016.jpg' 
             title='USER4'/>
            
        </div>
    )
}

export default StoryReel
