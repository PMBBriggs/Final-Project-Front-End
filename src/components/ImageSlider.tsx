import { useState } from "react";
import { Slide, SliderData } from "./SliderData";
import '../styles/ImageSlider.css'


export default function ImageSlider() {

    return(<div className='ImageSlider'>
        {SliderData.map((slide, index) => (<div><img src= {slide.image}></img></div>))    
        }
    </div>)
};