var expect    = require("chai").expect;
var simple = require("../app/simple");

// describe("the big two plus two", function() {
//   describe("the big two plus two", function() {
//     it ("adds the paramater to itself and ouputs total", function() {
//       var something   = simple.adder(2);
//
//       expect(something).to.equal(4);
//
//       });
//   });
// });


  describe("the big two plus two", function() {
    it ("adds the paramater to itself and ouputs total", function() {
      var something   = simple.adder(2);

      expect(something).to.equal(4);

      });
  });

  describe("subtracting two this time", function() {
    it("subtracts two from the parameter", function() {
      var subtracted = simple.subtracter(5)

      expect(subtracted).to.equal(3);
    });
  });




  // exports.rgbToHex = function(red, green, blue) {
  //
  //   var redHex   = red.toString(16);
  //   var greenHex = green.toString(16);
  //   var blueHex  = blue.toString(16);
  //
  //   return pad(redHex) + pad(greenHex) + pad(blueHex);
  //
  // };
