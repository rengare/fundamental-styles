let fs = require('fs');

let dots =  fs.existsSync('./package.json')? '.' : '..';

let packageContent = JSON.parse(fs.readFileSync(`${dots}/package.json`, 'utf8'));
let versionContent = JSON.parse(fs.readFileSync(`${dots}/version.json`, 'utf8'));

packageContent.version = versionContent.version;

fs.writeFileSync(`${dots}/package.json`, JSON.stringify(packageContent, null, '\t'));
