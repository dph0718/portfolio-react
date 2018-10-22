//makes a carousel of objects
import React from 'react';

import PortfolioCard from "../components/PortfolioCard.js";
import portfolioItems from "../components/data/portfolioObjects"

import shiftArrays from "./shiftArrays.js"
import carouselArrange from "./carouselArrange.js"

function makeCarousel(row) {
    console.log('making the carousel...')

    // [O] Array.map() the portfolio items as React elements.
    let allPortfolioItems = portfolioItems.map(pfItem => {
        return <PortfolioCard
            title={pfItem.title}
            githubLink={pfItem.githubLink}
            linkedInLink={pfItem.linkedInLink}
            stackOverflowLink={pfItem.stackOverflowLink}
            portfolioImage={pfItem.portfolioImage}
            key={pfItem.id}
            position={pfItem.position}
            row={row}
        />
    })


    return allPortfolioItems;
}

export default makeCarousel;


//=======================================================================================

/*
Making them move:
? - change the left: and/or right: css attributes of the element with transition effect

Hiding them:
? - place them behind an element with a transparent middle, set its pointer-events: none to click through

Making infinite scroll:
? - display all of them from left to right in order of the array;
[O] - when <ScrollLeft /> (or whatever) is clicked, 
    -change Array portfolioItems, ```
        let l = portfolioItems.length
        portfolioItems.splice()
    ```
     and animate their resulting 'index' changes. Ah! I see why keys are important now!
*/