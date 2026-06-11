const fs = require('fs');

const bioFile = 'c:/HOME LOCAL/PROYECTOS/Antigravity/proyectos/pages/biografia.html';
let content = fs.readFileSync(bioFile, 'utf8');

const newProfiles = `
            <!-- Profile 1: Jhon Velasque -->
            <div class="detail-grid" style="grid-template-columns: 1fr 1.8fr; gap: 40px; margin-bottom: 80px; align-items: flex-start;">
                <div>
                    <div style="border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: #0c1a30; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;">
                        <img src="../assets/img/profes/1.png" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" alt="Jhon Velasque">
                    </div>
                    <div style="margin-top: 20px; text-align: center;">
                        <span class="badge" style="position: static; display: inline-block; background-color: var(--primary-color); margin-bottom: 8px;">Instructor Excel & SQL</span>
                        <h3 style="margin-bottom: 4px; font-weight: 700; color: var(--text-main);">Jhon Velasque</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">Data Analytics Engineer en RIMAC Seguros</p>
                    </div>
                </div>
                <div>
                    <h3 class="detail-section-title" style="font-size: 1.5rem; margin-bottom: 16px;"><i class="fas fa-id-card"></i> Trayectoria Profesional</h3>
                    <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
                        Jhon es un experto en Data Analytics, especializado en transformar procesos de negocio con herramientas como Excel y SQL. Su experiencia en RIMAC Seguros le permite enseñar con casos de uso reales y enfocados en el mercado laboral.
                    </p>
                    
                    <h4 style="font-size: 1.05rem; margin-bottom: 12px; color: var(--text-main); font-weight: 700;">Cursos Impartidos:</h4>
                    <div class="tech-tags" style="margin-bottom: 28px;">
                        <span>Excel En Vivo</span>
                        <span>SQL para Data Analyst</span>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <hr style="border: 0; border-top: 1px solid var(--border-color); margin-bottom: 60px;">

            <!-- Profile 2: Richard Ñahui -->
            <div class="detail-grid" style="grid-template-columns: 1fr 1.8fr; gap: 40px; margin-bottom: 80px; align-items: flex-start;">
                <div>
                    <div style="border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: #0c1a30; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;">
                        <img src="../assets/img/profes/2.png" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" alt="Richard Ñahui">
                    </div>
                    <div style="margin-top: 20px; text-align: center;">
                        <span class="badge" style="position: static; display: inline-block; background-color: var(--primary-dark); margin-bottom: 8px;">Instructor SQL Engineer</span>
                        <h3 style="margin-bottom: 4px; font-weight: 700; color: var(--text-main);">Richard Ñahui</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">Data Engineer en vooxell</p>
                    </div>
                </div>
                <div>
                    <h3 class="detail-section-title" style="font-size: 1.5rem; margin-bottom: 16px;"><i class="fas fa-database"></i> Trayectoria Profesional</h3>
                    <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
                        Richard es un profesional destacado en la Ingeniería de Datos. Cuenta con sólida experiencia arquitectando bases de datos y desarrollando pipelines de datos eficientes en entornos empresariales.
                    </p>
                    
                    <h4 style="font-size: 1.05rem; margin-bottom: 12px; color: var(--text-main); font-weight: 700;">Cursos Impartidos:</h4>
                    <div class="tech-tags" style="margin-bottom: 28px;">
                        <span>SQL para Data Engineer</span>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <hr style="border: 0; border-top: 1px solid var(--border-color); margin-bottom: 60px;">

            <!-- Profile 3: Junior Candela -->
            <div class="detail-grid" style="grid-template-columns: 1fr 1.8fr; gap: 40px; margin-bottom: 80px; align-items: flex-start;">
                <div>
                    <div style="border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: #0c1a30; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;">
                        <img src="../assets/img/profes/3.png" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" alt="Junior Candela">
                    </div>
                    <div style="margin-top: 20px; text-align: center;">
                        <span class="badge" style="position: static; display: inline-block; background-color: #f2c811; color: #000; margin-bottom: 8px;">Instructor Power BI</span>
                        <h3 style="margin-bottom: 4px; font-weight: 700; color: var(--text-main);">Junior Candela</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">Data Analytics Engineer en JOCKEYPLAZA</p>
                    </div>
                </div>
                <div>
                    <h3 class="detail-section-title" style="font-size: 1.5rem; margin-bottom: 16px;"><i class="fas fa-chart-bar"></i> Trayectoria Profesional</h3>
                    <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
                        Junior se especializa en la visualización e inteligencia de negocios (BI). A través de su experiencia en JOCKEYPLAZA, desarrolla dashboards interactivos que empoderan la toma de decisiones estratégicas basadas en datos.
                    </p>
                    
                    <h4 style="font-size: 1.05rem; margin-bottom: 12px; color: var(--text-main); font-weight: 700;">Cursos Impartidos:</h4>
                    <div class="tech-tags" style="margin-bottom: 28px;">
                        <span>Power BI En Vivo</span>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <hr style="border: 0; border-top: 1px solid var(--border-color); margin-bottom: 60px;">

            <!-- Profile 4: Christian Condori -->
            <div class="detail-grid" style="grid-template-columns: 1fr 1.8fr; gap: 40px; margin-bottom: 40px; align-items: flex-start;">
                <div>
                    <div style="border-radius: 20px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background: #0c1a30; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center;">
                        <img src="../assets/img/profes/4.png" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" alt="Christian Condori">
                    </div>
                    <div style="margin-top: 20px; text-align: center;">
                        <span class="badge" style="position: static; display: inline-block; background-color: #3776ab; margin-bottom: 8px;">Instructor Python</span>
                        <h3 style="margin-bottom: 4px; font-weight: 700; color: var(--text-main);">Christian Condori</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">Data Engineer en bluetab (an IBM Company)</p>
                    </div>
                </div>
                <div>
                    <h3 class="detail-section-title" style="font-size: 1.5rem; margin-bottom: 16px;"><i class="fab fa-python"></i> Trayectoria Profesional</h3>
                    <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
                        Christian es un Ingeniero de Datos en una de las empresas de tecnología más reconocidas del mundo. Posee un amplio dominio de Python y PySpark para el análisis avanzado, limpieza masiva de datos y automatización de procesos.
                    </p>
                    
                    <h4 style="font-size: 1.05rem; margin-bottom: 12px; color: var(--text-main); font-weight: 700;">Cursos Impartidos:</h4>
                    <div class="tech-tags" style="margin-bottom: 28px;">
                        <span>Python + PySpark</span>
                    </div>
                </div>
            </div>
`;

// Regex to replace from Profile 1 up to the Quick CTA
content = content.replace(/<!-- Profile 1: Founder -->[\s\S]*?(?=<!-- Quick CTA -->)/, newProfiles + '\\n            ');

fs.writeFileSync(bioFile, content, 'utf8');
console.log('biografia.html updated');
