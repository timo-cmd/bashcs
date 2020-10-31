/***************** M305 **************************************
*             Copyright MIT LICENSE 2020 Timo Sarkar         *
**************************************************************/

var http = require('http');

console.warn(/*chalk.yellow(*/'Listening on Localhost adress:127.0.0.1 on Port:8080'/*)*/);
http.createServer(function (req, res) {
  res.write("./Bash & Unix Shell Cheat Sheet M305 - Developed by Timo Sarkar using vanilla Nodejs14\n\nProject content:\n\t./index.js - the code for this place\n\t./package.json - contains metadata about this place\n\t./Dockerfile - contains scripts to host this page on a dockerized env\n\t./node_modules - containes dependencies\n\nInstall and run this cheat sheet:\n\t$ wget https://github.com/timo-cmd/bashcs/release1.0.0.tar.gz\n\t$ tar -zxf release1.0.0.tar.gz\n\t$ cd release1.0.0\n\t$ npm install \n\t# you need nodejs installed on your machine\n\t$ node index.js\n\nCheatsheet:\n\tsudo <command>:\t executes a command as an other user\n\tcd <location>:\t changes the current location to a given folder\n\tmkdir <folder name>:\t creates a folder with a given name\n\ttouch <filename>:\t creates a new empty file with a given filename\n\tls [-a or -al]:\t lists the content of the current dir (use -al to list even hidden files and dirs)\n\ttree: \t lists the folder hierarchie in AST mode\n\tmv <file> <location>: \t moves a given file to a given location\n\tcp <filename> <location>: \t copies a given file to a given location\n\trmdir <dirname>: \t deletes a given directory\n\trm: <filename>\t deletes a given file\n\tcat <filename>: \t prints the content of a given file to the stdout\n\tpwd: \t shows the current location path\n\tclear: \t clears the current stdout\n\twhoami: \t shows to current username\n\tpasswd: \t overwrites the current password\n\tman <command>: \t enters the manual mode for a given command\n\tapt[-get] [[install] <package>] [upgrade]: \t usage of the apt linux package manager: install, update, upgrade etc...\n\tip addr[ess]: \t shows the current network config\n\nSymbols:\n\t~: \t the current working directory\n\t#: \t root user\n\t/: \t main-directory\n\t"); 
  res.end();
}).listen(8080); // send repsponses from the server to the client webpage
// to be continued soon
// add some live-reload 
// hot-reload
// etc...
