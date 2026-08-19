# mi-portfolio

Portfolio web de Milagros Escarlon (HTML, CSS, JS). Mobile-first, accesible y con diseño serio en tonos oscuros/azules.

## Estructura
- index.html
- styles.css
- script.js
- README.md

## Cómo crear el repositorio público en GitHub (paso a paso)

1. Iniciá sesión en GitHub con tu cuenta (milagros888).
2. Hacé clic en el botón "New" (o ir a https://github.com/new).
3. En "Repository name" poné: `mi-portfolio`
4. En "Description" pegá: `Portfolio web de Milagros Escarlon — Desarrolladora Fullstack, QA Engineer y Técnica en Informática.`
5. Seleccioná "Public".
6. Opcional: marcar "Add a README file" para inicializar el repo.
7. Crear el repositorio con "Create repository".

## Subir los archivos desde tu máquina (ejemplo)
En la carpeta local del proyecto:
```bash
git init
git add .
git commit -m "Initial: Portfolio Milagros Escarlon"
# si creaste el repo en GitHub sin README, podés usar:
git branch -M main
git remote add origin https://github.com/milagros888/mi-portfolio.git
git push -u origin main
```
Si en GitHub el repo ya existe con README, clonalo primero y luego agregá los archivos:
```bash
git clone https://github.com/milagros888/mi-portfolio.git
cd mi-portfolio
# copiar los archivos al directorio clonado
git add .
git commit -m "Add portfolio"
git push
```

## Desplegar en Vercel (rápido)
1. Crear cuenta o iniciar sesión en https://vercel.com con GitHub.
2. Click en "New Project" → "Import Git Repository".
3. Seleccionar `mi-portfolio` (permitir acceso si lo solicita).
4. Framework: seleccionar "Other" o "Static Site".
5. Leave build & output settings empty (no build needed para HTML estático).
6. Click "Deploy".
7. Vercel generará una URL pública (por ejemplo: https://mi-portfolio-xxxx.vercel.app).

## Notas de accesibilidad y mejoras
- Tipografía Montserrat (Google Fonts).
- Enfocado en contraste y navegación por teclado.
- Próximos pasos: agregar proyectos con descripciones, screenshots y enlaces a repositorios/demo; mejorar meta tags para SEO; añadir deploy preview CI si usás GitHub Actions.
