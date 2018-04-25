let fs = require("fs");

// var res = fs.statSync("../main/index.html").isFile();
// console.log(res)

describe('main()', () => {

  it('should pass', () => {
    expect(fs.statSync("../main/index.html")).toBe(true);
  });

});

