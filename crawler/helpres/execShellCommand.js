
const { exec } = require("child_process");

function execShellCommand (cmd) {
  console.log(cmd);
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

module.exports = execShellCommand;
