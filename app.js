document.addEventListener("DOMContentLoaded", () => {
  let currentSlideIndex = 0;
  const slideWrapper = document.getElementById("slide-wrapper");
  const slideIndicator = document.getElementById("slide-indicator");
  const slideProgress = document.getElementById("slide-progress");
  
  const presentationContainer = document.getElementById("presentation-container");
  const dashboardContainer = document.getElementById("dashboard-container");
  
  const btnSlideMode = document.getElementById("btn-slide-mode");
  const btnDashboardMode = document.getElementById("btn-dashboard-mode");
  
  // Dashboard elements
  const dashboardGrid = document.getElementById("dashboard-grid");
  const dashboardSearch = document.getElementById("dashboard-search");
  const categoryFilters = document.getElementById("category-filters");
  const licenseFilters = document.getElementById("license-filters");
  
  // Modal elements
  const videoModal = document.getElementById("video-modal");
  const videoIframe = document.getElementById("video-iframe");
  const modalToolName = document.getElementById("modal-tool-name");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const videoModalOverlay = document.getElementById("video-modal-overlay");

  let activeCategory = "ALL";
  let activeLicense = "ALL";
  let searchQuery = "";

  // 1. Initial Render of Slides
  function renderSlides() {
    slideWrapper.innerHTML = "";
    
    slidesData.forEach((slide, idx) => {
      const slideDiv = document.createElement("div");
      slideDiv.className = `slide ${idx === currentSlideIndex ? 'active' : ''} ${slide.type !== 'cover' && slide.type !== 'closing' && slide.type !== 'identity' ? 'slide-normal' : ''}`;
      
      // Estilos inline de fondo si aplica
      if (slide.backgroundImage) {
        slideDiv.style.backgroundImage = `url('${slide.backgroundImage}')`;
      }

      let contentHTML = "";

      switch (slide.type) {
        case "cover":
          contentHTML = `
            <div class="slide-cover-content" style="justify-content: flex-end; padding-bottom: 20px;">
              <div class="cover-cities">
                ${slide.locations.map(city => `<span class="city-tag">${city}</span>`).join('')}
              </div>
            </div>
          `;
          break;


        case "identity":
          contentHTML = `
            <div class="slide-header">
              <div></div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-identity-content">
              <div class="identity-title">${slide.title}</div>
              <div class="identity-sub">${slide.subtitle}</div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">${slide.copyright}</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "intro":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">INTRODUCCIÓN</div>
                <h2>${slide.title}</h2>
                <div class="slide-subtitle">${slide.subtitle}</div>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="concept-card-two" style="width: 80%; text-align: center; margin: 0 auto; border-color: var(--color-accent-orange);">
                <h3 style="font-size: 24px; margin-bottom: 15px;">Guía de Recursos de IA</h3>
                <p style="font-size: 15px; line-height: 1.6;">Esta presentación sirve como un compendio práctico y estructurado de herramientas de Inteligencia Artificial seleccionadas por el equipo de tecnología de Orange LATAM. Cubre herramientas ya incluidas en nuestras conjuntas SEO y soluciones complementarias recomendadas.</p>
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">${slide.copyright}</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "concept-three":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">${slide.category}</div>
                <h2>${slide.title}</h2>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="concept-grid-three">
                ${slide.concepts.map(c => `
                  <div class="concept-card-three">
                    <h3>${c.title}</h3>
                    <p>${c.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "concept-two":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">${slide.category}</div>
                <h2>${slide.title}</h2>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="concept-split-two">
                ${slide.concepts.map(c => `
                  <div class="concept-card-two">
                    <h3>${c.title}</h3>
                    <p>${c.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "ecosystem":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">${slide.category}</div>
                <h2>${slide.title}</h2>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="ecosystem-stepper">
                ${slide.steps.map(step => `
                  <div class="step-card">
                    <div class="step-number">${step.num}</div>
                    <div class="step-title">${step.title}</div>
                    <div class="step-sub">${step.subtitle}</div>
                    <div class="step-desc">${step.desc}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "categories-grid":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">SERVICIOS</div>
                <h2>${slide.title}</h2>
                <div class="slide-subtitle">${slide.subtitle}</div>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="categories-grid-container">
                ${slide.categories.map(cat => `
                  <div class="category-pill" onclick="window.viewCategoryFromSlide('${cat}')">
                    ${cat}
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "types-explanation":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">ESTRUCTURA</div>
                <h2>${slide.title}</h2>
                <div class="slide-subtitle">${slide.subtitle}</div>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="types-explanation-wrapper">
                ${slide.groups.map(g => `
                  <div class="type-group-card">
                    <div class="type-group-badge ${g.badge.includes('TIENES') ? 'badge-included' : 'badge-independent'}">${g.badge}</div>
                    <h3>${g.title}</h3>
                    <p>${g.desc}</p>
                    <div class="example-tags">
                      ${g.examples.map(ex => `<span class="example-tag">${ex}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "tools":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">${slide.category}</div>
                <h2>${slide.title}</h2>
                <div class="slide-subtitle">${slide.subtitle}</div>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="tools-slide-grid">
                ${slide.tools.map(tool => `
                  <div class="tool-card">
                    <div class="tool-header-row">
                      <div class="tool-label ${tool.type === 'included' ? 'label-included' : 'label-independent'}">
                        ${tool.label}
                      </div>
                      ${tool.tutorial ? `
                        <button class="btn-play-tutorial" onclick="event.stopPropagation(); window.playTutorial('${tool.name}', '${tool.tutorial}')" title="Ver Tutorial">
                          <svg class="icon-play-svg" viewBox="0 0 24 24" width="22" height="22">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                            <polygon points="10 8 16 12 10 16" fill="currentColor"/>
                          </svg>
                        </button>
                      ` : ''}
                    </div>
                    <div>
                      <div class="tool-name-container">
                        <img src="assets/image22.png" alt="Icon" class="bullet-icon">
                        <div class="tool-name">${tool.name}</div>
                      </div>
                      <div class="tool-sub">${tool.subtitle}</div>
                      <p class="tool-desc" title="${tool.desc}">${tool.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "giants":
          contentHTML = `
            <div class="slide-header">
              <div class="slide-title-area">
                <div class="slide-category">VANGUARDIA TECNOLÓGICA</div>
                <h2>${slide.title}</h2>
                <div class="slide-subtitle">${slide.subtitle}</div>
              </div>
              <img src="assets/image3.png" alt="Orange" class="slide-branding-logo">
            </div>
            <div class="slide-body">
              <div class="giants-grid">
                ${slide.giants.map(g => `
                  <div class="giant-card">
                    <h3>${g.name}</h3>
                    <div class="giant-tagline">${g.tagline}</div>
                    <p>${g.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="slide-footer">
              <div class="copyright-text">PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®</div>
              <div class="slide-number">${slide.slideNum}</div>
            </div>
          `;
          break;

        case "closing":
          contentHTML = `
            <div class="slide-closing-content">
              <img src="assets/image30.png" alt="Orange" class="closing-logo">
              <div class="closing-title">${slide.title}</div>
              <div class="closing-tagline">${slide.tagline}</div>
              <a href="https://${slide.web}" target="_blank" class="closing-web">${slide.web}</a>
              <div class="cover-cities" style="margin-top: 30px;">
                ${slide.locations.map(city => `<span class="city-tag">${city}</span>`).join('')}
              </div>
            </div>
          `;
          break;
      }

      slideDiv.innerHTML = contentHTML;
      slideWrapper.appendChild(slideDiv);
    });
  }

  // 2. Navigation Actions
  function updateSlidesUI() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, idx) => {
      if (idx === currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    // Control navigation buttons state
    document.getElementById("btn-prev-slide").disabled = currentSlideIndex === 0;
    document.getElementById("btn-next-slide").disabled = currentSlideIndex === slidesData.length - 1;

    // Numbers & Progress
    slideIndicator.textContent = `${currentSlideIndex + 1} / ${slidesData.length}`;
    const pct = ((currentSlideIndex + 1) / slidesData.length) * 100;
    slideProgress.style.width = `${pct}%`;
  }

  function changeSlide(direction) {
    if (direction === "next" && currentSlideIndex < slidesData.length - 1) {
      currentSlideIndex++;
    } else if (direction === "prev" && currentSlideIndex > 0) {
      currentSlideIndex--;
    }
    updateSlidesUI();
  }

  // Bind Keyboard Keys
  document.addEventListener("keydown", (e) => {
    if (presentationContainer.classList.contains("hidden")) return;
    
    if (e.key === "ArrowRight" || e.key === "Space") {
      e.preventDefault();
      changeSlide("next");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      changeSlide("prev");
    }
  });

  document.getElementById("btn-prev-slide").addEventListener("click", () => changeSlide("prev"));
  document.getElementById("btn-next-slide").addEventListener("click", () => changeSlide("next"));

  // View Category From Cover Slide Grid Click
  window.viewCategoryFromSlide = (catName) => {
    activeCategory = catName;
    
    // Switch to Dashboard View
    btnDashboardMode.click();
    
    // Set Active Button in filter
    const catButtons = categoryFilters.querySelectorAll(".filter-btn");
    catButtons.forEach(btn => {
      if (btn.getAttribute("data-category") === catName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    
    renderDashboard();
  };

  // 3. YouTube Video Lightbox Actions
  window.playTutorial = (toolName, url) => {
    // Extraer ID de video de YouTube
    let videoId = "";
    if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get("v");
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }
    
    if (videoId) {
      videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      modalToolName.textContent = `Tutorial de ${toolName}`;
      videoModal.classList.remove("hidden");
      videoModal.setAttribute("aria-hidden", "false");
    } else {
      window.open(url, "_blank"); // Fallback
    }
  };

  function closeModal() {
    videoModal.classList.add("hidden");
    videoModal.setAttribute("aria-hidden", "true");
    videoIframe.src = ""; // Detener reproducción
  }

  btnCloseModal.addEventListener("click", closeModal);
  videoModalOverlay.addEventListener("click", closeModal);
  
  // Close Modal on Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !videoModal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // 4. Dashboard Grid Rendering & Filtering
  function renderDashboard() {
    dashboardGrid.innerHTML = "";
    
    // Recopilar todas las herramientas de slidesData de forma plana
    const allTools = [];
    slidesData.forEach(slide => {
      if (slide.type === "tools") {
        slide.tools.forEach(tool => {
          allTools.push({
            ...tool,
            category: slide.category
          });
        });
      }
    });

    // Aplicar filtros
    const filteredTools = allTools.filter(tool => {
      // Categoría
      const matchesCategory = activeCategory === "ALL" || tool.category === activeCategory;
      // Licencia (Ya lo tienes / Independiente)
      const matchesLicense = activeLicense === "ALL" || tool.type === activeLicense;
      // Búsqueda de texto
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch = cleanQuery === "" || 
        tool.name.toLowerCase().includes(cleanQuery) ||
        tool.subtitle.toLowerCase().includes(cleanQuery) ||
        tool.desc.toLowerCase().includes(cleanQuery) ||
        tool.category.toLowerCase().includes(cleanQuery);

      return matchesCategory && matchesLicense && matchesSearch;
    });

    if (filteredTools.length === 0) {
      dashboardGrid.innerHTML = `
        <div class="concept-card-two" style="grid-column: 1 / -1; text-align: center; padding: 40px; border-color: rgba(255,255,255,0.05)">
          <h3 style="color: var(--color-accent-orange); margin-bottom: 10px;">Sin resultados</h3>
          <p style="color: var(--color-text-muted);">No se encontraron herramientas que coincidan con la búsqueda o filtros aplicados.</p>
        </div>
      `;
      return;
    }

    filteredTools.forEach(tool => {
      const toolCard = document.createElement("div");
      toolCard.className = "tool-card";
      toolCard.innerHTML = `
        <div class="tool-header-row">
          <div class="tool-label ${tool.type === 'included' ? 'label-included' : 'label-independent'}">
            ${tool.label}
          </div>
          ${tool.tutorial ? `
            <button class="btn-play-tutorial" onclick="window.playTutorial('${tool.name}', '${tool.tutorial}')" title="Ver Tutorial">
              <svg class="icon-play-svg" viewBox="0 0 24 24" width="22" height="22">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
                <polygon points="10 8 16 12 10 16" fill="currentColor"/>
              </svg>
            </button>
          ` : ''}
        </div>
        <div>
          <div class="tool-name-container">
            <img src="assets/image22.png" alt="Icon" class="bullet-icon">
            <div class="tool-name">${tool.name}</div>
          </div>
          <div class="tool-sub">${tool.category} · ${tool.subtitle}</div>
          <p class="tool-desc" title="${tool.desc}">${tool.desc}</p>
        </div>
      `;
      dashboardGrid.appendChild(toolCard);
    });
  }

  // Dashboard Filters Events
  categoryFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      categoryFilters.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      activeCategory = e.target.getAttribute("data-category");
      renderDashboard();
    }
  });

  licenseFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-license-btn")) {
      licenseFilters.querySelectorAll(".filter-license-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      activeLicense = e.target.getAttribute("data-license");
      renderDashboard();
    }
  });

  dashboardSearch.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderDashboard();
  });

  // 5. Toggle View Modes (Slide View vs. Dashboard View)
  btnSlideMode.addEventListener("click", () => {
    btnSlideMode.classList.add("active");
    btnDashboardMode.classList.remove("active");
    presentationContainer.classList.remove("hidden");
    dashboardContainer.classList.add("hidden");
    
    // Sincronizar UI de diapositiva actual
    updateSlidesUI();
  });

  btnDashboardMode.addEventListener("click", () => {
    btnDashboardMode.classList.add("active");
    btnSlideMode.classList.remove("active");
    dashboardContainer.classList.remove("hidden");
    presentationContainer.classList.add("hidden");
    
    // Renderizar listado del Dashboard
    renderDashboard();
  });

  // Swipe Gestures Support (Móviles)
  let touchStartX = 0;
  let touchEndX = 0;

  presentationContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  presentationContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50; // Umbral mínimo de swipe en px
    if (touchStartX - touchEndX > threshold) {
      changeSlide("next"); // Swipe Izquierda -> Siguiente
    } else if (touchEndX - touchStartX > threshold) {
      changeSlide("prev"); // Swipe Derecha -> Anterior
    }
  }

  // Setup Inicial
  renderSlides();
  updateSlidesUI();
});
