
function arrangeCarousel(containingArray, position, row) {

    let rowSize = containingArray.length;
    let firstBack = 2 + Math.floor(rowSize / 2);
    let distance;
    let className;
    let adjPos;
    let display;
    if (row === 'front') {
        className = 'front-row-item';
    } else {
        className = 'back-row-item';
    }

    if (className == 'front-row-item') {
        distance = 60 * position - 70 + '%'
        adjPos = position;
    }

    if (className == 'back-row-item') {
        let halfWay = Math.floor(firstBack / 2);
        adjPos = (((position + halfWay)) + rowSize) % rowSize;
        distance = (-33 * adjPos) + 66 + (halfWay * 33) + '%';
    };

    if (adjPos === rowSize - 1
        // || adjPos === 0
    ) {
        display = "none"
    } else {
        display = "block"
    }

    let stylin = {
        display,
        distance,
        className,
    };

    console.log('firstBack', firstBack);
    console.log('position:', position);
    console.log('adjPos:', adjPos);
    console.log('distance', distance);
    return stylin;
};
export default arrangeCarousel;