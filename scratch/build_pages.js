const fs = require('fs');
const path = require('path');

const template = fs.readFileSync('c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/pages/curso-sql.html', 'utf8');

function buildPage(dest, data) {
    let content = template;
    
    // Title
    content = content.replace(/<title>.*?<\/title>/, `<title>${data.title} | Data Academy</title>`);
    
    // Icon
    content = content.replace(/src="\.\.\/assets\/img\/formation\/[a-zA-Z0-9_\.]+"/g, `src="../assets/img/formation/${data.icon}"`);
    content = content.replace(/alt="[^"]*Icon"/g, `alt="${data.short} Icon"`);
    
    // H1
    content = content.replace(/<h1>.*?<\/h1>/, `<h1>${data.title}</h1>`);
    
    // Schedule
    content = content.replace(/<li style="margin-bottom: 8px;"><i class="fas fa-calendar-alt"[^>]*><\/i>.*?<\/li>/, 
        `<li style="margin-bottom: 8px;"><i class="fas fa-calendar-alt" style="color: var(--primary-color); width: 20px;"></i> ${data.schedule}</li>`);
        
    // WhatsApp
    content = content.replace(/text=Hola,%20quiero%20inscribirme%20en%20el%20Curso%20de%20SQL/g, 
        `text=Hola,%20quiero%20inscribirme%20en%20el%20Curso%20de%20${data.short}`);
        
    // Image for brochure
    content = content.replace(/<source srcset="\.\.\/assets\/img\/projects\/sql_project\.webp" type="image\/webp">/, '');
    content = content.replace(/src="\.\.\/assets\/img\/projects\/sql_project\.png"/, `src="../assets/img/formation/${data.icon}" style="max-width:200px; display:block; margin:auto;"`);
        
    // Syllabus
    let syllabusHtml = '<div class="syllabus-list">\n';
    for (let i=0; i<data.modules.length; i++) {
        syllabusHtml += `                        <div class="syllabus-module">\n`;
        syllabusHtml += `                            <h4>${data.modules[i].title}</h4>\n`;
        syllabusHtml += `                            <p>${data.modules[i].desc}</p>\n`;
        syllabusHtml += `                        </div>\n`;
    }
    syllabusHtml += '                    </div>';
    
    content = content.replace(/<div class="syllabus-list">[\s\S]*?<\/div>\s*<\/div>/, syllabusHtml + '\n                </div>');
    
    fs.writeFileSync(dest, content, 'utf8');
}

const excelData = {
    title: 'Excel En Vivo (De Cero a Experto)',
    short: 'Excel',
    icon: '3Excel.png',
    schedule: 'Lunes y Miércoles, 9:30 AM - 12:30 PM',
    modules: [
        {title: 'Módulo 1: Fundamentos de Calidad y Limpieza de Datos', desc: 'Inicia con la auditoría de información, detectando y limpiando anomalías mediante el uso avanzado de funciones de texto y fecha en la importación de datos.'},
        {title: 'Módulo 2: Transformación ETL con Power Query', desc: 'Conéctate a múltiples orígenes externos y utiliza el motor ETL nativo de Excel para realizar transformaciones masivas y consolidación tabular automática.'},
        {title: 'Módulo 3: Búsquedas y Cruces de Información Avanzados', desc: 'Evoluciona desde el clásico BUSCARV hasta el dominio absoluto de la nueva función BUSCARX, logrando realizar cruces complejos con múltiples criterios simultáneos.'},
        {title: 'Módulo 4: Lógica Condicional y Control de Errores', desc: 'Simplifica lógicas complejas utilizando SI.CONJUNTO, anida operadores lógicos y condicionales, y aplica técnicas de segmentación e inteligencia de tiempo.'},
        {title: 'Módulo 5: Análisis Multidimensional con Tablas Dinámicas', desc: 'Estructura tu Modelo de Datos creando relaciones robustas, e implementa campos y elementos calculados avanzados para un análisis profundo de la información.'},
        {title: 'Módulo 6: Visualización Dinámica y Formato Condicional', desc: 'Aplica las mejores prácticas de visualización, utilizando formato condicional basado en fórmulas avanzadas para preparar el inicio del proyecto final.'},
        {title: 'Módulo 7: Proyecto Integrador: Finanzas Personales', desc: 'Aplica todo lo aprendido en un caso de uso real desarrollando un proyecto integral en formato Sheet enfocado en la gestión visual de finanzas personales.'},
        {title: 'Módulo 8: Presentación de Dashboards y Cierre', desc: 'Consolida tu Dashboard interactivo final, aprende a presentar tus hallazgos de forma ejecutiva y da el kick-off definitivo a tu carrera analítica.'}
    ]
};

const pythonData = {
    title: 'Python + PySpark En Vivo (De Cero a Experto)',
    short: 'Python',
    icon: '5Python.png',
    schedule: 'Viernes y Sábado, 7:30 PM - 10:00 PM',
    modules: [
        {title: 'Módulo 1: Fundamentos y Tipos de Datos en Python I', desc: 'Domina los conceptos básicos declarando variables, ejecutando operaciones matemáticas y manipulando estructuras de datos primordiales como Strings, Listas y Tuplas.'},
        {title: 'Módulo 2: Control de Flujo y Estructuras en Python II', desc: 'Aprende a controlar la ejecución de tu código utilizando Diccionarios, variables Booleanas, ciclos repetitivos (Bucles) y sentencias condicionales If, Elif y Else.'},
        {title: 'Módulo 3: Creación de Funciones y Manejo de Errores', desc: 'Modulariza tu código creando funciones reutilizables, aplicando buenas prácticas de desarrollo y aprendiendo a gestionar correctamente diccionarios y booleanos.'},
        {title: 'Módulo 4: Introducción a Pandas para el Análisis de Datos', desc: 'Inicia el trabajo analítico comprendiendo los conceptos básicos de la librería Pandas, ejecutando la lectura de datos y aplicando sus métodos estadísticos básicos.'},
        {title: 'Módulo 5: Limpieza y Combinación Avanzada en Pandas', desc: 'Aplica funciones de limpieza profunda, realiza combinaciones complejas de DataFrames (Joins), exporta tus resultados y establece buenas prácticas de procesamiento.'},
        {title: 'Módulo 6: Interacción con el Sistema y Bases de Datos', desc: 'Aprende a interactuar con las carpetas de tu equipo conociendo OS y Pathlib para el manejo de archivos en lotes, y establece conexiones a bases de datos mediante casos de uso.'},
        {title: 'Módulo 7: Control de Versiones en Entornos Profesionales', desc: 'Aprende a trabajar de forma colaborativa y segura en la industria tecnológica dominando los sistemas de control de versiones con Git y tu repositorio en GitHub.'},
        {title: 'Módulo 8: Visualización de Datos con Matplotlib y Seaborn', desc: 'Transforma tus hallazgos en insights gráficos impactantes aprendiendo a crear y personalizar visualizaciones interactivas utilizando las librerías Matplotlib y Seaborn.'}
    ]
};

buildPage('c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/pages/curso-excel.html', excelData);
buildPage('c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/pages/curso-python.html', pythonData);
console.log('Pages generated!');
