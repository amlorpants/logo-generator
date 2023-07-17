const inquirer = require('inquirer');
const fs = require('fs');

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

function generateLogo() {
  getUserInput().then((answers) => {
    const { logoText, textColor, shape, shapeColor } = answers;

    const svgContent = createSvgContent(
      logoText,
      textColor,
      shape,
      shapeColor
    );
    saveSvgToFile('logo.svg', svgContent);

    console.log('Logo generated successfully!');
  });
}

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

  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeElement}
            ${textElement}
          </svg>`;
}

function createCircleElement(color) {
  return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
}

function createTriangleElement(color) {
  return `<polygon points="150,50 100,150 200,150" fill="${color}" />`;
}

function createSquareElement(color) {
  return `<rect x="50" y="50" width="200" height="100" fill="${color}" />`;
}

function createTextElement(text, color) {
  return `<text x="150" y="100" fill="${color}" text-anchor="middle">${text}</text>`;
}

function saveSvgToFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error while saving the SVG file:', err);
    }
  });
}

generateLogo();
