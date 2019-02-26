let path = require('path');
let executable = path.join('.', 'node_modules', '.bin', 'vue')
let args = ['ui', '--port=8242', '--headless'];
let executableAndArgs = executable + ' ' + args.join(' ');

const { exec } = require('child_process');
let server = exec(executableAndArgs, (error, stdout, stderr) => {
  if (error) {
    console.error('exec error: ' + error);
    return;
  }
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
});

function die () {
  server.kill();
}


