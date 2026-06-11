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
    
    // Replace logo_oscuro.png favicon with favicon_square.png
    
    content = content.replace(/<link rel="icon" type="image\/png" href="[^"]*logo_oscuro\.png">/g, (match) => {
        if (match.includes('../')) {
            return '<link rel="icon" type="image/png" href="../assets/img/logo/favicon_square.png">';
        } else {
            return '<link rel="icon" type="image/png" href="assets/img/logo/favicon_square.png">';
        }
    });
    
    fs.writeFileSync(file, content, 'utf8');
}
console.log('Favicons updated in ' + htmlFiles.length + ' files.');
