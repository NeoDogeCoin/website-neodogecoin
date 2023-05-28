const fs = require("fs");

console.log(
  fs.readdirSync(__dirname).map((file) => ({
    title: file.split(".")[0],
    image: file.split(".")[0],
    url: ""
  }))
);
