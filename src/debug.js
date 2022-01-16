const exec = require('child_process').exec;

function execute(command, callback) {
  exec(command, (error, stdout, stderr) => {
      callback(stdout);
  });
};

function debugApp() {
  execute('ping 8.8.8.8', (output) => {
    console.log(output);
  });
}

module.exports = { debugApp }
