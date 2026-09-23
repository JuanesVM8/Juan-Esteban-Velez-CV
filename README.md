# Portafolio Juan Esteban Vélez Mazo

## Cómo ver el sitio localmente

1. Abre la carpeta del proyecto en VS Code.
2. Ejecuta una vista previa con Live Server o sirve la carpeta localmente.
3. Si prefieres hacerlo desde terminal, puedes usar:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000` en el navegador.

## Estructura principal

- `index.html` — estructura principal del portafolio.
- `css/styles.css` — diseño visual, responsive y estilos de impresión.
- `js/main.js` — menú móvil, sección activa, reveals y copia del correo.
- `assets/icons/favicon.svg` — favicon local.

## Información pendiente por confirmar antes de publicar

Antes de publicar el sitio, conviene revisar y confirmar lo siguiente:

- Estado académico real: estudiante de último semestre de Ingeniería de Sistemas.
- Proyectos reales para la sección de GitHub: nombre, problema, contribución, tecnologías, enlace al repositorio y demo si existe.
- PDF de hoja de vida real, si se desea incluirlo en `assets/docs/` y activar un enlace con `download`.
- Artículo publicado: título, medio y enlace para añadir la sección correspondiente cuando esté verificado.
- Fotografía opcional si se decide incluirla.
- Dominio o URL final para la versión pública.

## Cómo preparar proyectos reales

Cuando haya 2–3 proyectos confirmados, sustituye el bloque actual de GitHub por tarjetas con:

- nombre del proyecto
- problema que resuelve
- contribución personal
- tecnologías utilizadas
- imagen real opcional, con ancho/alto definidos
- enlace al repositorio
- demo o enlace adicional si existe

## Cómo cambiar contenido y estilos

- Edita los textos principales directamente en `index.html`.
- Ajusta colores, espacios y tipografía en `css/styles.css` usando las variables definidas en `:root`.
- Mantén la estructura semántica y actualiza enlaces cuando se tenga información verificada.

## Recomendaciones finales

- No enlazar archivos inexistentes ni simular descargas.
- No añadir publicaciones, métricas o certificados sin verificar.
- Mantener la página con un contenido real, claro y profesional.
- Revisión visual recomendada en escritorio, tablet y móvil antes de publicar.
