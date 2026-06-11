const fs = require('fs');

const bioFile = 'c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/pages/biografia.html';
let content = fs.readFileSync(bioFile, 'utf8');

// The badges in biografia.html look like this:
// <span class="badge" style="position: static; display: inline-block; background-color: var(--primary-color); margin-bottom: 8px;">Instructor Excel & SQL</span>
// <span class="badge" style="position: static; display: inline-block; background-color: #f2c811; color: #000; margin-bottom: 8px;">Instructor Power BI</span>

content = content.replace(/background-color: [^;]+;?/g, (match) => {
    // If it's inside a style="..." and we are modifying a badge, we want to remove the color override.
    // However, it's safer to just remove any background-color overrides from the badge spans directly.
    return '';
});

// A safer regex just for the badges:
let newContent = fs.readFileSync(bioFile, 'utf8');
newContent = newContent.replace(/<span class="badge" style="([^"]*)"/g, (match, styleAttr) => {
    let newStyle = styleAttr.replace(/background-color:[^;]+;?/g, '').replace(/color:[^;]+;?/g, '');
    return `<span class="badge" style="${newStyle}"`;
});

fs.writeFileSync(bioFile, newContent, 'utf8');
console.log('Badges in biografia.html cleaned up.');
