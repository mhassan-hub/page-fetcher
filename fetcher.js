const fs = require("fs");
const request = require('request');
let arg = process.argv.slice(2);
// console.log(arg[0] + '   ' + arg [1])
request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(`${arg[1]}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${arg[1]}`);
    }
  });
});
// module.exports = arg;