import React, { Component } from 'react';

import makeCarousel from '../functions/makeCarousel.js'
import portfolioItems from "../components/data/portfolioObjects"
import shiftArrays from "../functions/shiftArrays.js"
import positiono from "../functions/assignPosition.js"


class CarouselContainer extends Component {
    state = {
        carouselComponentsArray: [],
    }

    componentWillMount = () => {
        positiono.initializePositions(portfolioItems);
        this.setState({ carouselComponentsArray: portfolioItems })
        console.log(this.state.carouselComponentsArray)
    }

    scrollLeft = () => {
        positiono.increasePositions(portfolioItems);
        this.setState({ carouselComponentsArray: portfolioItems })
        console.log(this.state.carouselComponentsArray)
    }

    scrollRight = () => {
        positiono.decreasePositions(portfolioItems);
        console.log(this);
        this.setState({ carouselComponentsArray: portfolioItems })
    }

    render() {
        console.log(this);
        return (
            <div className="carousel-container">
                <h1 id='left-arrow'
                    onClick={this.scrollRight}
                >{"<"}</h1>
                <h1 id='right-arrow'
                    onClick={this.scrollLeft}
                >{">"}</h1>
                <div id='carousel-back-row'>
                    {makeCarousel('back')}
                </div>
                
                <div id='carousel-front-row'>
                    {makeCarousel('front')}
                </div>
                

            </div>
        )
    }
}

export default CarouselContainer;