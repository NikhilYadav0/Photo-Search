import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList=(props)=>{
    const links=props.imageLinks;
    var images=links.map(image=>{return <ImageCard key={image} imageSrc={image}/>})
    return <div className="image-list">{images}</div> 
}

export default ImageList