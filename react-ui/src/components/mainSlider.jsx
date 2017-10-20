import { Carousel } from 'react-bootstrap';
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

require('../css/stylesForMainSlider.css');

class MainSlider extends Component {
 
    render() {
        return (
            <div className="main-slider-container">
                <Carousel>
                    <Carousel.Item className="main-slider-item">
                       <Image src="http://hdwallpaperdaily.com/wp-content/uploads/2013/05/oblivion-fallen-bridge-wallpaper-1920x1080.jpg" responsive />
                        <Carousel.Caption className="main-slider-caption">
                            <h3>Oblivion</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="main-slider-item">
                        <Image src="https://s-media-cache-ak0.pinimg.com/originals/61/da/5d/61da5d9c8ce5efdd3b3436cd41a36bd0.jpg" responsive />
                        <Carousel.Caption className="main-slider-caption">
                            <h3>Captain America: Civil War</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="main-slider-item">
                        <Image src="http://www.ibackgroundwallpaper.com/wp-content/uploads/2014/03/World-War-Z-wallpaper.jpg" responsive />
                        <Carousel.Caption className="main-slider-caption">
                            <h3>Word War Z</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>    
        );
    }
}

export default MainSlider;
