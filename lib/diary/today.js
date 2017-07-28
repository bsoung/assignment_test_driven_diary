const fs = require("fs");
const file = "./diary/diary.txt";

module.exports = () => {
  let currentDate = new Date();

  // let hojeParsed = Date.parse(hoje);
  // let hojeUnParsed = new Date(hojeParsed).getDate();

  let entries = [];
  let contents = fs.readFileSync(file).toString();

  contents = contents.split("\n");

  contents.forEach(entry => {
    entry = entry.split(":");
    let day = new Date(+entry[0]);
  });

  return entries;
};

// Date(Date.parse("10/10/10")).getDate()
