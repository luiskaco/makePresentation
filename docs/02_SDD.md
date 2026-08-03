# 02_SYSTEM_DESIGN_DOCUMENT - Guía Práctica de Herramientas de IA (Orange LATAM)

Este documento detalla el diseño de arquitectura y diseño visual para el proyecto web interactivo.

---

## 1. Arquitectura de la Aplicación
El proyecto se implementa como una Single Page Application (SPA) basada en Vanilla JS, HTML5 semántico y CSS3 puro. Esto asegura rendimiento máximo, carga instantánea y control total de estilos y layouts para que sean 100% fieles al PowerPoint original.

### Estructura de Archivos
- `index.html`: Estructura HTML5, metatags de SEO, importación de Google Fonts.
- `styles.css`: Hojas de estilos completas (diseño responsivo, animaciones, filtros y diseño glassmorphic).
- `data.js`: Base de datos de diapositivas y herramientas de la presentación.
- `app.js`: Lógica de renderizado dinámico, navegación de slides, filtros del directorio y modal de videos de YouTube.
- `assets/`: Carpeta con todos los recursos gráficos (fondos, logos, iconos) copiados del archivo PPTX original.

---

## 2. Paleta de Colores Corporativa
Basado en los colores extraídos de la presentación original, definimos las siguientes variables CSS:
- `--color-bg-main`: `#1A1A2E` (Azul marino muy oscuro / Negro azulado profundo).
- `--color-bg-dark`: `#111827` (Gris oscuro moderno de fondo).
- `--color-accent-orange`: `#FF6B00` (Naranja vibrante institucional de Orange LATAM).
- `--color-accent-blue`: `#57B8E9` (Azul cian para etiquetas independientes).
- `--color-accent-yellow`: `#FFD652` (Amarillo oro).
- `--color-text-white`: `#FFFFFF` (Blanco puro para contrastes altos).
- `--color-text-gray`: `#F3F3F3` (Gris claro de lectura).
- `--color-text-dark`: `#1A1A2E` (Negro para texto claro).

---

## 3. Comportamiento y Navegación
- **Slide Mode:**
  - El usuario puede navegar de forma secuencial usando los botones virtuales, las flechas del teclado, o gestos de deslizamiento en dispositivos móviles.
  - Al cambiar de slide, se aplica un efecto de transición fluida de desvanecimiento (`opacity`).
- **Dashboard Mode:**
  - Muestra un grid responsivo con todas las herramientas de las diapositivas 11 a 17.
  - Cuenta con un campo de texto de búsqueda reactivo y botones de filtro por categoría y tipo de licencia.
- **Reproductor de Videos (Modals):**
  - Al hacer clic en el botón de reproducción de tutoriales (`image23.png`), se abre un lightbox/modal centrado en pantalla.
  - El modal embebe un reproductor iframe de YouTube optimizado para no recargar la página principal y permitir su cierre con la tecla `Escape` o haciendo clic fuera del reproductor.
