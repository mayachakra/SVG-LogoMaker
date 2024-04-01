/*
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           

prompt user for the logo text, color for text, shape, and color for shape
*/

//MAKE A SHAPES.TEST.JS FILES TO TEST SHAPES
//FIX CODE TO ADD MULTIPLE SVG's into the file, not just replace it
import('inquirer').then(({default:inquirer}) => {

    const fs = require('fs'); //to create files
    async function promptUser(){
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text for your logo:'
            },
            {
                type:'input',
                name:'textColor',
                message: 'Enter the color for the text:'
            },
            {
                type:'list',
                name:'shape',
                message:'Select a shape for the logo',
                choices:['circle','square','triangle']
            },
            {
                type:'input',
                name:'shapeColor',
                message: 'Enter the color for the shape:'
            }
    
        ]);
        return answers;
    }
    
    //main function to get user input and use it to generate the file
    async function main(){
        const { generateLogo } = require('./shapes/svgGenerator');
        try{
            const {text, textColor, shape, shapeColor} = await promptUser();
            //const {generateLogo} = require('./shapes/shapes');
            const svgContent = generateLogo(text, textColor, shape, shapeColor);
    
            const path = require('path');
            const logosFolder = path.join(__dirname,'logos');
            if(!fs.existsSync(logosFolder)){
                fs.mkdirSync(logosFolder);
            }
            const logosFilePath = path.join(logosFolder, 'logo.svg');

            fs.writeFileSync(logosFilePath, svgContent);
            console.log('Logo generated!');
    
        } catch(error){
            console.log('Error', error);
        }
    }
    //call main
    main();
}).catch(error => {
    console.error('Error', error);
});