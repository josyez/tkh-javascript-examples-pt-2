const fs = require("fs");

(function () {
  // const fileContent = fs.readFileSync("./index.txt");

  // console.log(fileContent.toString()); //Should print whatever is put into the file
  fs.readdir("./", function (err, content) {
    if (err) {
      throw err;
    } else {
      content.forEach(fileOrFolder => {
        const splitName = fileOrFolder.split(".");

        if (splitName.length >= 2) {
          console.log("this is a file");
        } else {
          const folderContent = fs.readdirSync(fileOrFolder);
          console.log(folderContent);
        }
      });
    }
  });
})();

//For the next one, let's open a folder and read all it's files and the file's contents;
