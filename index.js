const questions = {
  characters: {
    type: 'input',
    message: 'Choose (up to) three characters for your logo',
    name: 'logo characters',
  },
  characterColor: {
    type: 'input',
    message: 'What color would you like those characters to be?',
    name: 'character color',
  },
  shape: {
    type: 'list',
    message: 'What shape would you like your logo to be?',
    choices: ['circle', 'square', 'triangle'],
    name: 'logo shape',
  },
  installation: {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
    name: 'installation',
  },
  backgroundColor: {
    type: 'input',
    message:
      'What color would you like for the background of your logo?',
    name: 'background color',
  },
};
