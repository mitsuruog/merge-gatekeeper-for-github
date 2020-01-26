const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const manifest = require("../manifest");
const version = manifest.version;

const outputFileName = path.resolve("package", `merge gatekeeper for github-${version}.zip`);

console.log("output path: " + outputFileName);

// create a file to stream archive data to.
const output = fs.createWriteStream(outputFileName);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", function() {
  console.log(archive.pointer() + " total bytes");
  console.log("archiver has been finalized and the output file descriptor has closed.");
});

output.on("end", function() {
  console.log("Data has been drained");
});

archive.on("error", function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append files from a directory
archive.directory("dist/", false);

archive.finalize();
