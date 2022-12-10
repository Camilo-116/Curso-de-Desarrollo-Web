import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: require("../../../assets/imagenes/index-pic-1.jpg"),
        altText: 'Music aesthetic recording studio',
        caption: ''
    },
    {
        src: require("../../../assets/imagenes/index-pic-2.jpg"),
        altText: 'Music aesthetic recording studio',
        caption: ''
    },
    {
        src: require("../../../assets/imagenes/index-pic-3.jpg"),
        altText: 'Music aesthetic recording studio',
        caption: ''
    }
];

const Carousel = () => <UncontrolledCarousel items={items} indicators={false} controls={false} autoPlay interval={3000} />;

export default Carousel;
