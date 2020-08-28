import React from 'react';
import './Gallery.scss'
import { galleryImages } from './GalleryImageItems'
export const GallerySection = () => {

    console.log(galleryImages)
    return (
        <div className="gallery-section">
              <h2 className="title">Gallery</h2>
              <div className="gallery-main-view">
                    <img src={`${galleryImages[0].image_src}`}/>
              </div>
        </div>
    )
}