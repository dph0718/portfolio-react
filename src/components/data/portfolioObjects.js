//make a Class to define portfolio item 

let PortfolioObject = class {
    constructor(title,
        githubLink,
        linkedInLink,
        stackOverflowLink,
        portfolioImage,
        id,
        arrayposition,
    ) {

        this.title = title;
        this.githubLink = githubLink;
        this.linkedInLink = linkedInLink;
        this.stackOverflowLink = stackOverflowLink;
        this.portfolioImage = portfolioImage;
        this.id = id;
        this.arrayposition = arrayposition;
        //. and others... ?
    }

};

//export all of them.

        //for localhost
// export default [
//     new PortfolioObject('Gif Fisher', 'http://github.com', 'blah', 'blah', '../../images/fishygif.png', "1"),
//     new PortfolioObject('Desktop Fighter', 'http://github.com', 'blah', 'blah', '../../images/week4.png', "2"),
//     new PortfolioObject('Tiki Trivia', 'http://github.com', 'blah', 'blah', '../../images/tikitrivia.png', "3"),
//     new PortfolioObject('Frender', 'http://github.com', 'blah', 'blah', '../../images/shaqfu.png', "3"),
//     new PortfolioObject('LIRI, the Cable Guy', 'http://github.com', 'blah', 'blah', '../../images/liri.png', "3"),
//     new PortfolioObject('Hangman', 'http://github.com', 'blah', 'blah', '../../images/hangman.png', "3"),
//     new PortfolioObject('Karmadillo', 'http://github.com', 'blah', 'blah', '../../images/shaqfu.png', "4"),
//     new PortfolioObject('MeetPie', 'http://github.com', 'blah', 'blah', '../../images/shaqfu.png', "5"),
//     new PortfolioObject('Another App', 'http://github.com', 'blah', 'blah', '../../images/shaqfu.png', "5"),
//     new PortfolioObject('Home Alone II', 'http://github.com', 'blah', 'blah', '../../images/shaqfu.png', "5"),
//     new PortfolioObject('Harry & the Hendersons', 'http://github.com', 'blah', 'blah', '../../images/shaqfu.png', "5"),
// ];

//removed ../.. for build
export default [
    new PortfolioObject('Gif Fisher', 'http://github.com', 'blah', 'blah', '/images/fishygif.png', "1"),
    new PortfolioObject('Desktop Fighter', 'http://github.com', 'blah', 'blah', '/images/week4.png', "2"),
    new PortfolioObject('Tiki Trivia', 'http://github.com', 'blah', 'blah', '/images/tikitrivia.png', "3"),
    new PortfolioObject('Frender', 'http://github.com', 'blah', 'blah', '/images/shaqfu.png', "3"),
    new PortfolioObject('LIRI, the Cable Guy', 'http://github.com', 'blah', 'blah', '/images/liri.png', "3"),
    new PortfolioObject('Hangman', 'http://github.com', 'blah', 'blah', '/images/hangman.png', "3"),
    new PortfolioObject('Karmadillo', 'http://github.com', 'blah', 'blah', '/images/shaqfu.png', "4"),
    new PortfolioObject('MeetPie', 'http://github.com', 'blah', 'blah', '/images/shaqfu.png', "5"),
    new PortfolioObject('Another App', 'http://github.com', 'blah', 'blah', '/images/shaqfu.png', "5"),
    new PortfolioObject('Home Alone II', 'http://github.com', 'blah', 'blah', '/images/shaqfu.png', "5"),
    new PortfolioObject('Harry & the Hendersons', 'http://github.com', 'blah', 'blah', '/images/shaqfu.png', "5"),
];