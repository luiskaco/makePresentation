# Guía Práctica de Herramientas de IA - Orange LATAM

Aplicación web interactiva premium que convierte la presentación de PowerPoint corporativa (`2026_IA_v6_con_tutoriales.pptx`) en un portal interactivo y responsivo.

## Características

- **Modo Diapositivas:** Navegación secuencial de las 18 diapositivas de la guía de herramientas con transiciones fluidas de desvanecimiento, barra de progreso y control por teclado (Flechas / Espacio) o gestos táctiles.
- **Dashboard / Directorio:** Catálogo interactivo de todas las herramientas de IA clasificadas. Permite:
  - Búsqueda reactiva por texto en tiempo real.
  - Filtros rápidos por área (SEO, Video, Edición, Audio, Imágenes, Diseño UI, Asistentes).
  - Filtro por licencia ("YA LO TIENES" de SEO Conjuntas vs. "INDEPENDIENTE").
- **Reproductor de Video Modal:** Acceso directo a los videos tutoriales de YouTube de las herramientas a través de una ventana modal flotante en la misma interfaz.
- **Fidelidad Estética:** Diseño premium alineado al manual de marca de Orange LATAM (colores negro azulado, acentos naranjas y tipografías Outfit/Inter).

## Estructura del Proyecto

```bash
├── assets/             # Recursos gráficos (fondos, logotipos, iconos)
├── docs/               # Documentación interna del proyecto (PRD, SDD, TASKS)
├── index.html          # Estructura principal de la SPA
├── styles.css          # Estilos premium, animaciones y layouts responsivos
├── data.js             # Base de datos local JSON de diapositivas y herramientas
└── app.js              # Lógica de navegación, modal de video y filtros
```

## Ejecución Local

Para visualizar el proyecto localmente sin problemas de caché del navegador:

1. Levanta un servidor web local en la raíz del proyecto:
   ```bash
   npx http-server -p 8080 -c-1
   ```
2. Abre en tu navegador la dirección: [http://localhost:8080](http://localhost:8080)

---
*WE CREATE · WE PLAN · WE DO* · **Orange LATAM**
