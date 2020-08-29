import React from 'react';
import './Gallery.scss'
import { galleryImages } from './GalleryImageItems'
export const GallerySection = () => {

    console.log(galleryImages)
    return (
        <div className="gallery-section">
              <h2 className="title">Gallery</h2>
              <div className="gallery-main-view">
                  <div className="image-container">
                  {galleryImages.map((image) => (
                      <img src ={image} className="gallery-image"/>
                  ))}
                  </div>
              </div>
        </div>
    )
}