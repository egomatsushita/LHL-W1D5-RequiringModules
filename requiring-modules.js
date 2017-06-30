
var someObject = {
  callPrivate: function() {
    return privateFunction();
  }
}

var privateFunction = function() {
    console.log("I'm a private function!");
}

module.exports = {
  someObject: someObject
}