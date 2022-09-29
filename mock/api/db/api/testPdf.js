var fs = require('fs')
var pdfData = require("../base64/pdf");
var tiffData = require("../base64/tiff");

module.exports = (req, res) => {
  createStreamFile("pdf", res);
  return {
    status: "A0001",
    message: "success",
    success: true,
    data: {
      fileName: "demo.pdf",
      fileByteArray: pdfData,
    },
  };
};

/**
 * 建立串流檔案下載
 *
 * @param fileType - 檔案類型
 * @param res - response
 */
function createStreamFile(fileType, res) {
  var fileMimeType = "";
  var fileExtension = "";
  if (fileType === "pdf") {
    fileMimeType = "application/pdf";
    fileExtension = "pdf";
  }
  if (fileType === "excel") {
    fileMimeType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    fileExtension = "xlsx";
  }
  if (fileType === "tiff") {
    fileMimeType =
      "image/tiff";
    fileExtension = "tiff";
  }
  console.log(__dirname)
  var path = __dirname + "/../../../../mock/assets/demo." + fileExtension;
  var filename = "test_" + Date.now() + "." + fileExtension;

  if (fs.existsSync(path)) {
    var stream = fs.createReadStream(path);
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader("Content-disposition", 'inline; filename="' + filename + '"');
    res.setHeader("Content-type", fileMimeType);
    stream.pipe(res);
  } else {
    res.status(404);
    console.log("File not found");
    res.send("File not found");
  }
}
