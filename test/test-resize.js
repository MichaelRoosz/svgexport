const resize = require('../resize');
const expect = require('expect.js');

describe('Resize', function() {
  it('width', function() {
    const output = resize({
      width : 1,
      height : 1
    }, {
      width : 5
    });
    expect(output.width).equal(5);
    expect(output.height).equal(5);
    expect(output.scale).equal(5);
  });

  it('both', function() {
    const output = resize({
      width : 1,
      height : 1
    }, {
      width : 5,
      height : 2
    });
    expect(output.width).equal(5);
    expect(output.height).equal(2);
    expect(output.scale).equal(5);
  });

  it('pad', function() {
    const output = resize({
      width : 1,
      height : 1
    }, {
      width : 5,
      height : 2,
      mode : 'pad'
    });
    expect(output.width).equal(5);
    expect(output.height).equal(2);
    expect(output.scale).equal(2);
  });
});
