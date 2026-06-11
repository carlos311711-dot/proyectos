const fs = require('fs');
const file = 'c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/landing-ventas.html';
let content = fs.readFileSync(file, 'utf8');

// Match <div class="temario-accordion" ...> ... </div>
// Since nested divs could be tricky, we know it ends with exactly:
// </details>
//                                 </div>
//                             </div>
//                             <div style="text-align: center; background: var(--card-bg);
content = content.replace(/<div class="temario-accordion"[\s\S]*?<\/details>\s*<\/div>/g, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Accordions removed.');
