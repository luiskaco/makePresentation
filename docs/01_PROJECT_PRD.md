# 01_PROJECT_PRD - Guía Práctica de Herramientas de IA (Orange LATAM)

Este documento define los requisitos de producto para la conversión de la presentación `2026_IA_v6_con_tutoriales.pptx` en una aplicación web interactiva premium.

---

## 1. Objetivos del Producto
- **Fidelidad Visual:** El diseño web debe ser fiel al diseño corporativo de la presentación original de Orange LATAM (fondo oscuro `#1A1A2E`, naranja `#FF6B00`, blanco, gris claro y tipografías premium).
- **Interactividad Dinámica:** Proporcionar una experiencia inmersiva para navegar entre las diapositivas y aprender sobre las herramientas de IA.
- **Acceso a Tutoriales:** Integrar los videos tutoriales de YouTube directamente en la interfaz.

---

## 2. Modos de Visualización
El proyecto contará con un interruptor superior para alternar entre dos vistas principales:

### A. Modo Diapositivas (Presentación)
- Navegación secuencial de 19 diapositivas.
- Transiciones fluidas por hardware.
- Control por teclado (flechas izquierda/derecha, barra espaciadora) y gestos táctiles.
- Disposición de cuadrícula exacta (3 columnas) para las diapositivas de catálogo de herramientas.
- Botones de "Play" (`image23.png`) sobre las tarjetas de herramientas que cuentan con enlace a tutorial.

### B. Modo Dashboard (Directorio)
- Buscador interactivo de herramientas en tiempo real.
- Filtros por categoría (SEO, Video, Edición, Audio, Imágenes, Diseño UI, Asistentes).
- Filtros por tipo de licencia: "YA LO TIENES" (SEO Conjuntas) e "INDEPENDIENTE".
- Visualización de tarjetas con hover effects y accesos a tutoriales en modal.

---

## 3. Estructura de Contenidos

### Diapositivas Conceptuales
1. **Slide 1: Portada** - Bogotá, México, Buenos Aires, Miami, Chile, Quito. Logo principal (`image1.png`).
2. **Slide 2: Identidad** - "WE CREATE WE PLAN WE DO".
3. **Slide 3: Presentación** - Guía Práctica de Herramientas.
4. **Slide 4: Fundamentos de la IA** - El núcleo, Modelos de lenguaje, De generar a razonar.
5. **Slide 5: Dinámicas** - Chat vs. Agente.
6. **Slide 6: Métricas** - Tokens vs. Créditos.
7. **Slide 7: Ecosistema Agéntico** - LLM, Contexto, Agente, MCP, Tools.
8. **Slide 8: Metodología** - Tools vs. Skills.
9. **Slide 9: Categorías** - Grid de iconos con las categorías de herramientas.
10. **Slide 10: Tipos de Licencias** - Explicación de "Ya disponibles en SEO Conjuntas" vs. "Herramientas independientes".

### Diapositivas de Herramientas (Con Enlaces a Tutoriales)
11. **SEO:**
    - Semrush Gurú (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=4_xOC5cmuVc`
    - Mangools Agency (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=JZry_EFgqzg`
    - Screaming Frog (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=IGy3NBR1XqM`
    - Perplexity AI (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=SfuXCj8jqmk`
    - Answer the Public (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=K5EkttOpr3s`
12. **VIDEO (Creación):**
    - InVideo AI (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=JFoXttlALZw`
    - Sora (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=kkwe8zVecM0`
    - Magisto Pro (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=1KGtxMcCD4E`
    - Opus Clip (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=MVUDXVNaQ58`
    - Freepik Video IA (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=RrEf5NsMlTI`
    - ElevenLabs (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=qCZHNbf7z5g`
13. **EDICIÓN:**
    - Higgsfield AI (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=k5snckO_l0I`
    - Submagic (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=pbmRmo73DFA`
    - Wisecut (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=muzzSuYj64M`
    - Descript (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=Eo-FPrDONqY`
    - CapCut (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=jFUPLsPctlc`
    - Heygen (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=uMkt8UaOOOg`
14. **AUDIO:**
    - ElevenLabs (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=qCZHNbf7z5g`
    - Suno V4 (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=n2x43tA-hzI`
    - Whisper (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=iosd0jUKcvU`
15. **IMÁGENES:**
    - Midjourney (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=xNEUlMQRBjo`
    - Freepik IA (Magnific) (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=rIic3PuQHAU`
    - Canva (EDU) (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=s1Xj1UDR6aM`
    - Dall-E 3 (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=mmfz73EW60w`
    - Nano Banana (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=ZSoVm6Q-sbc`
    - Adobe Firefly (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=Z1Yj0hct1nA`
16. **DISEÑO UI:**
    - Claude Design (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=R1UHzF_9n4A`
    - Genspark AI (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=7i8-R1qEOzQ`
    - Stitch (Google) (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=kgInSDPkWSM`
    - V0 (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=n4GNdIqOYFc`
    - Anima (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=LDfY9qH1g9c`
    - Galileo AI (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=jjSaUeqJi4s`
17. **ASISTENTES:**
    - ChatGPT Plus (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=K5EkttOpr3s`
    - Claude (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=qth5wFHKDV8`
    - Gemini (INDEPENDIENTE) -> Tutorial: `https://www.youtube.com/watch?v=D2b-b-gQyzg`
    - Perplexity AI (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=liiMB8iISJQ`
    - NotebookLM (YA LO TIENES) -> Tutorial: `https://www.youtube.com/watch?v=g9fwgx54dEo`

### Diapositivas de Vanguardia y Cierre
18. **Los Nuevos Gigantes de la IA:** Qwen, DeepSeek, MiniMax.
19. **Cierre:** Canales de contacto y URL de Orange LATAM.

---

## 4. Requisitos de Rendimiento e Interfaz
- Carga de imágenes en local desde `assets/`.
- Modal de video fluido con reproductor de YouTube integrado.
- Estilos responsivos para Mobile-first y soporte para monitores 4K.
