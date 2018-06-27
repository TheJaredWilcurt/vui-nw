let path = require('path');
let exec = require('child_process').execSync;
let executableAndArgs = path.join('.', 'node_modules', '.bin', 'vue ui --port 8242 --headless');
exec(executableAndArgs);
