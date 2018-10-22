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

export default [
    new PortfolioObject('Gif Fisher', 'http://github.com', 'blah', 'blah', 'blah', "1"),
    new PortfolioObject('Desktop Fighter', 'http://github.com', 'blah', 'blah', 'blah', "2"),
    new PortfolioObject('Frender', 'http://github.com', 'blah', 'blah', 'blah', "3"),
    new PortfolioObject('Karmadillo', 'http://github.com', 'blah', 'blah', 'blah', "4"),
    new PortfolioObject('MeetPie', 'http://github.com', 'blah', 'blah', 'blah', "5"),
    new PortfolioObject('Another App', 'http://github.com', 'blah', 'blah', 'blah', "5"),
    new PortfolioObject('Home Alone II', 'http://github.com', 'blah', 'blah', 'blah', "5"),
    new PortfolioObject('Harry & the Hendersons', 'http://github.com', 'blah', 'blah', 'blah', "5"),
];