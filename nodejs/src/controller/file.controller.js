const path = require("path");
const download = (req, res) => {
  console.log("entered download");
  const fileName = req.params.name + ".json";
  const directoryPath = path.join(__dirname, "../../files/");
  console.log("Files path is: ", directoryPath);
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
module.exports = {
  download,
};
