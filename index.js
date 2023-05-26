const SVG = require('./lib/SVG.js')
const {Circle, Triangle, Square} = require('./lib/shapes.js')

const fs = require("fs");
const inquirer = require('inquirer');
function askUser(){
inquirer.prompt([
  {
    type: "input",
    message: "Type out three letters.",
    name: "text",
  },
  {
    type: "list",
    message: "Choose a text color.",
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black'],
    name: "textColor",
  },
  {
    type: "list",
    message: "choose a shape.",
    choices: ['circle', 'triangle', 'square'],
    name: "shape",
  },
  {
    type: "list",
    message: "choose a shape color.",
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black'],
    name: "shapeColor",
  },
 
]).then(answers => {
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

})
}

askUser()