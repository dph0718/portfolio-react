import React, { Component } from 'react';

import portfolioItems from "../components/data/portfolioObjects"
import carouselArrange from "../functions/carouselArrange.js"

// [ ] When making the Css for this, make sure to ...
// [ ] inline styles for x-position to be received as props from the parent, who shifts arrays. 

class PortfolioCard extends Component {

    render() {

        let row = this.props.row;
        let pos = this.props.position;
        let color;
        let moving = carouselArrange(portfolioItems, pos, row);
        let distance = moving.distance;
        let className = moving.className;
        console.log("MOVING")
        console.log(distance)
        switch (pos) {
            case 1: color = 'purple';
                break;
            case 2: color = 'yellow'
                break;
            case 3: color = 'white';
                break;
            default: color = 'black'
        }
        let styling = {
            className: className + " portfolio-card",
            left: distance,
            color: color,
        }
        return (
            <div className={styling.className}
                style={styling} >
                <h2>This a PortfolioCard component.</h2>
                <h4>Title: {this.props.title}</h4>
                <h3>Other thing: {this.props.githubLink}</h3>
                <h3>{this.props.id}</h3>
                <p>currently in {this.props.position}</p>
            </div>
        )
    }
}

export default PortfolioCard;