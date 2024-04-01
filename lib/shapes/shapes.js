const generateLogo = require('./svgGenerator');
class Circle{
    constructor(color){
        this.color = color;
    }
    draw(text, textColor){
        return `<svg width="300" height="200">
        <svg><circle cx="100" cy="100" r="50" fill="${this.color}" /><text x="100" y="100" fill="${textColor}" font-family="Times New Roman, Times, serif" font-size="24" text-anchor="middle" alignment-baseline="middle">${text}</text></svg>
        </svg>
        `;
    }
}

class Square{
    constructor(color){
        //super();
        this.color = color;
    }
    draw(text, textColor){
       return  `<svg width="300" height="200">
        <rect width="100" height="100" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Times New Roman, Times, serif" font-size="24" text-anchor="middle" alignment-baseline="middle" >${text}</text>
        </svg>`;
    }
}

class Triangle{
    constructor(color){
        this.color = color;
    }
    draw(text, textColor){  
    return  `<svg width="300" height="200">
        <polygon points="50,10 10,90 90,90" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Times New Roman, Times, serif" font-size="24" text-anchor="middle" alignment-baseline="middle">${text}</text>
        </svg>`;
    }
}

module.exports = {Circle, Square, Triangle, generateLogo};