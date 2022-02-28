const download = (req, res) => {
  console.log("entered download");
  const fileName = req.params.name + ".json";
  const directoryPath = "C:/Users/Brendin/express-node/files/";
  console.log(fileName);
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
