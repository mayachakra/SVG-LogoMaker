const {Circle, Square, Triangle} = require('./shapes');

function generateLogo(text, textColor, shape, shapeColor){
    let selectedShape;
    switch(shape){
        case 'circle':
            selectedShape = new Circle(shapeColor);
            break;
        case 'square':
            selectedShape = new Square(shapeColor);
            break;
        case 'triangle':
            selectedShape = new Triangle(shapeColor);
            break;
        default:
            throw new Error('Invalid shape specified.');
    }
    return selectedShape.draw(text, textColor); //issue here
}
//console.log(typeof(generateLogo));
module.exports = {generateLogo};