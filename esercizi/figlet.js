
import * as fs from "fs";
var figlet = require("figlet");

fs.writeFilefiglet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});