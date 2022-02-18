var fs = require("fs");

const buildInfo = require("./buildInfo.json");

const incrementBuildNumber = () => {
  buildInfo.buildNumber++;
  fs.writeFile("./buildInfo.json", JSON.stringify(buildInfo), function (err) {
    if (err) throw err;
    console.log(`Current build number: ${buildInfo.buildNumber}`);
  });
};

incrementBuildNumber();

module.exports = incrementBuildNumber;
