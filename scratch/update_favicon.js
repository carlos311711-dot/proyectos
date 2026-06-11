const fs = require('fs');
const path = require('path');

const projectDir = 'c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos';

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'assets' && file !== 'scratch') {
                getHtmlFiles(fullPath, fileList);
            }
        } else if (file.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const htmlFiles = getHtmlFiles(projectDir);

for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace 7Antigravity.png favicon with the logo_oscuro.png favicon
    // E.g. <link rel="icon" type="image/png" href="assets/img/formation/7Antigravity.png">
    
    content = content.replace(/<link rel="icon" type="image\/png" href="[^"]*7Antigravity\.png">/g, (match) => {
        if (match.includes('../')) {
            return '<link rel="icon" type="image/png" href="../assets/img/logo/logo_oscuro.png">';
        } else {
            return '<link rel="icon" type="image/png" href="assets/img/logo/logo_oscuro.png">';
        }
    });
    
    fs.writeFileSync(file, content, 'utf8');
}
console.log('Favicons updated in ' + htmlFiles.length + ' files.');
