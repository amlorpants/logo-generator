// Importing the necessary modules
const inquirer = require('inquirer'); // Package for user input
const fs = require('fs'); // File system module

// Function to prompt the user for input
function getUserInput() {
  return inquirer.prompt([
    {
      name: 'logoText',
      message: 'Enter up to three characters for your logo:',
    },
    {
      name: 'textColor',
      message: 'Choose the color for your logo text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Choose the color for the logo shape:',
    },
  ]);
}

// Function to generate the logo
function generateLogo() {
  getUserInput().then((answers) => {
    const { logoText, textColor, shape, shapeColor } = answers;

    const svgContent = createSvgContent(
      logoText,
      textColor,
      shape,
      shapeColor
    );
    saveSvgToFile('logo.svg', svgContent); // Saving the SVG to a file

    console.log('Logo generated successfully!');
  });
}

// Function to create the SVG content
function createSvgContent(text, color, shapeType, shapeColor) {
  let shapeElement = '';
  if (shapeType === 'circle') {
    shapeElement = createCircleElement(shapeColor);
  } else if (shapeType === 'triangle') {
    shapeElement = createTriangleElement(shapeColor);
  } else if (shapeType === 'square') {
    shapeElement = createSquareElement(shapeColor);
  }

  const textElement = createTextElement(text, color);

  // Generating the SVG content with the shape and text elements
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeElement}
            ${textElement}
          </svg>`;
}

// Function to create the SVG circle element
function createCircleElement(color) {
  return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
}

// Function to create the SVG triangle element
function createTriangleElement(color) {
  return `<polygon points="150,50 100,150 200,150" fill="${color}" />`;
}

// Function to create the SVG square element
function createSquareElement(color) {
  return `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
}

// Function to create the SVG text element
function createTextElement(text, color) {
  return `<text x="150" y="100" fill="${color}" text-anchor="middle">${text}</text>`;
}

// Function to save the SVG content to a file
function saveSvgToFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error while saving the SVG file:', err);
    }
  });
}

// Generating the logo
generateLogo();
