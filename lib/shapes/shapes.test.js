const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    it('should render a circle with the correct color', () =>{
        const shape = new Circle();
        expect(shape.draw("text","orange")).toEqual(`<svg width="300" height="200">
        <svg><circle cx="100" cy="100" r="50" fill="undefined" /><text x="100" y="100" fill="orange" font-family="Times New Roman, Times, serif" font-size="24" text-anchor="middle" alignment-baseline="middle">text</text></svg>
        </svg>
        `);
    });
});

describe('Square', () => {
    it('should render a square with the correct color', () =>{
        const shape = new Square();
        expect(shape.draw("text","red")).toEqual(`<svg width="300" height="200">
        <rect width="100" height="100" fill="undefined" />
        <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="red" font-family="Times New Roman, Times, serif" font-size="24">text</text>
        </svg>`);
    });
});

describe('Triangle', () => {
    it('should render a square with the correct color', () =>{
        const shape = new Triangle();
        expect(shape.draw("text","blue")).toEqual(`<svg width="300" height="200">
        <polygon points="50,10 10,90 90,90" fill="undefined" />
        <text x="50" y="60" dominant-baseline="middle" text-anchor="middle" fill="blue" font-family="Times New Roman, Times, serif" font-size="24">text</text>
        </svg>`);
    });
});