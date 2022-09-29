var fs = require("fs");

var base64PDF = base64_encode(__dirname + "/../../../../mock/assets/demo.pdf");
console.log(base64PDF)

module.exports = (req, res) => {
  createStreamFile("pdf", res);
  return {
    status: "A0001",
    message: "success",
    success: true,
    data: {
      fileName: "demo.pdf",
      fileByteArray: base64PDF,
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
    fileMimeType = "image/tiff";
    fileExtension = "tiff";
  }
  console.log(__dirname);
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

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString("base64");
}

function _base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}
