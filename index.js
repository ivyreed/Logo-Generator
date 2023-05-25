const SVG = require('./lib/SVG.js')
const {Circle, Triangle, Square} = require('./lib/shapes.js')

const fs = require("fs");
const inquirer = require('inquirer');
function askUser(){
inquirer.prompt([
  {
    type: "input",
    message: "three letter word",
    name: "text",
  },
  {
    type: "list",
    message: "text color",
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black'],
    name: "textColor",
  },
  {
    type: "list",
    message: "shape",
    choices: ['circle', 'triangle', 'square'],
    name: "shape",
  },
  {
    type: "list",
    message: "shape color",
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black'],
    name: "shapeColor",
  },
 
]).then(answers => {
    console.log(answers)
    let shape;
if(answers.shape === 'circle'){
    shape = new Circle()
}
if(answers.shape === 'triangle'){
    shape = new Triangle()
}
if(answers.shape === 'square'){
    shape = new Square()
}
shape.setColor(answers.shapeColor)
const svg = new SVG()
svg.setText(answers.text, answers.textColor)
svg.setShape(shape)
fs.writeFile('logo.svg', svg.renderSVG(), (err) => {
    if(err) throw err
})
//     return `
// <svg viewbox= '0 0 300 200'>

//     <'${answers.shape}'
//         x = '1' y = '1'
//         width = '100%' height = "100%"
//         fill = '${answers.shapeColor}'
//     />    
//     <text 
//     x = '1' y = '1'
//     width = '100%' height = "100%"
//     fill = '${answers.textColor}'>${answers.name}</text>
// </svg>
// `
})
}
// .then(logoString => {
// fs.appendFile('logo.svg', logoString, (err) => {
//     if(err) throw err
// })

// })
// }
// function createString(data){
// }
askUser()