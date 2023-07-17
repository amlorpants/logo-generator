const { createSvgContent } = require('./your-svg-code-file');

describe('createSvgContent', () => {
  test('should return the correct SVG content for a circle shape', () => {
    const svgContent = createSvgContent(
      'ABC',
      'red',
      'circle',
      'blue'
    );
    expect(svgContent).toContain(
      '<circle cx="150" cy="100" r="50" fill="blue" />'
    );
    expect(svgContent).toContain(
      '<text x="150" y="100" fill="red" text-anchor="middle">ABC</text>'
    );
  });

  test('should return the correct SVG content for a triangle shape', () => {
    const svgContent = createSvgContent(
      'XYZ',
      'green',
      'triangle',
      'yellow'
    );
    expect(svgContent).toContain(
      '<polygon points="150,50 100,150 200,150" fill="yellow" />'
    );
    expect(svgContent).toContain(
      '<text x="150" y="100" fill="green" text-anchor="middle">XYZ</text>'
    );
  });

  test('should return the correct SVG content for a square shape', () => {
    const svgContent = createSvgContent(
      '123',
      'purple',
      'square',
      'pink'
    );
    expect(svgContent).toContain(
      '<rect x="50" y="50" width="200" height="100" fill="pink" />'
    );
    expect(svgContent).toContain(
      '<text x="150" y="100" fill="purple" text-anchor="middle">123</text>'
    );
  });
});
