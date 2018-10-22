
function arrangeCarousel(containingArray, position, row) {

    let rowSize = Math.floor(containingArray.length);

    let firstBack = 2 + Math.floor(rowSize/2);

    let distance;
    let className;

    if (row === 'front') {
        className = 'front-row-item';
    } else {
        className = 'back-row-item';
    }

    if (className == 'front-row-item') {
        distance = 38 * position - 20 + '%'
    }
    if (className == 'back-row-item') {
        console.log('index of first back row:', firstBack)
        console.log("this element's position", position)
        distance = 99 - (33 * (Math.abs(position - firstBack))) - 4 + '%'
        console.log("distance from left:", distance);
    }
    let stylin = {
        distance,
        className,
    };
    console.log('carouselArrange.js did this.')
    console.log(stylin)
    return stylin;



    // //dividing rows in half
    // let rowSize = Math.floor(containingArray.length) / 2;

    // let firstBack;
    // //the first position from the second row to display
    // let firstPosBack = () => {
    //     if (rowSize % 2 == 0) {
    //         firstBack =  rowSize / 2;
    //     } else {
    //         firstBack =  rowSize / 2 + 1
    //     }
    // }
    // let distance;
    // let className;

    // if (position <= rowSize) {
    //     className = 'front-row';
    // } else {
    //     className = 'back-row';
    // }

    // if (className == 'front-row') {
    //     distance = 38 * position - 20 + '%'
    // }
    // if (className == 'back-row') {
    //     distance = 66 - 33 * (position - firstBack) - 4 + '%'
    // }
    // let stylin = {
    //     distance,
    //     className,
    // };
    // console.log('carouselArrange.js did this.')
    // console.log(stylin)
    // return stylin;

}



export default arrangeCarousel;