const fs = require('fs');

let dots = fs.existsSync('./package.json') ? '.' : '..';

let version = process.argv[2];

if (version) {
    version = version.replace('v', '');
    
    let packageContent = JSON.parse(fs.readFileSync(`${dots}/package.json`, 'utf8'));
    packageContent.version = version;

    if (fs.existsSync(`${dots}/package-lock.json`)) {
        let lockContent = JSON.parse(fs.readFileSync(`${dots}/package-lock.json`, 'utf8'));
        lockContent.version = version;
        fs.writeFileSync(`${dots}/package-lock.json`, JSON.stringify(lockContent, null, '\t'));
    }

    fs.writeFileSync(`${dots}/package.json`, JSON.stringify(packageContent, null, '\t'));
}
