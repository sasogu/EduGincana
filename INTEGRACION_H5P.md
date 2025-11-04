# Integración de actividades H5P en EduGincana

## 📋 Resumen de la propuesta

Implementar soporte para actividades H5P mediante una solución híbrida que combina **iframe embebido** + **campo de confirmación**. Esta solución permite integrar contenido interactivo H5P sin necesidad de backend, manteniendo la simplicidad de la PWA.

---

## 🎯 Objetivos

- Permitir insertar actividades H5P en cualquier reto
- Mantener el control del flujo de la gimcana
- Funcionar sin servidor backend
- Compatible con cualquier plataforma H5P (H5P.org, Moodle, WordPress, Lumi, etc.)
- No romper la compatibilidad con gimcanas existentes

---

## 🏗️ Arquitectura propuesta

### Estructura de datos actualizada

```javascript
// Estructura de un challenge con H5P
{
  id: "challenge-123",
  title: "Repte interactiu amb H5P",
  description: "Resol l'activitat interactiva per obtenir el codi",
  
  // NUEVOS CAMPOS
  h5pUrl: "https://h5p.org/h5p/embed/1234", // URL del iframe H5P (opcional)
  h5pHeight: "600px", // Altura personalizada del iframe (opcional, default: 500px)
  requireH5pCompletion: true, // Si true, muestra instrucciones específicas H5P
  
  // CAMPOS EXISTENTES
  answer: "codigo-secreto", // El código que aparece al completar el H5P
  successMessage: "Molt bé! Has completat l'activitat interactiva",
  hint: "Mira atentament la pantalla final de l'activitat",
  // ... resto de campos normales
}
```

---

## 🎨 Interfaz de usuario

### Modo creador

#### Formulario de nuevo reto
Agregar campos después del campo "Pista":

```html
<fieldset class="h5p-section">
  <legend data-i18n="creator.challenges.h5p.title">Activitat H5P (opcional)</legend>
  
  <label>
    <span data-i18n="creator.challenges.h5p.url.label">URL de l'activitat H5P</span>
    <input
      type="url"
      id="new-ch-h5p-url"
      data-i18n-placeholder="creator.challenges.h5p.url.placeholder"
      placeholder="https://h5p.org/h5p/embed/1234"
    />
  </label>
  
  <label>
    <span data-i18n="creator.challenges.h5p.height.label">Altura del visor (opcional)</span>
    <input
      type="text"
      id="new-ch-h5p-height"
      data-i18n-placeholder="creator.challenges.h5p.height.placeholder"
      placeholder="500px"
      value="500px"
    />
  </label>
  
  <p class="hint" data-i18n="creator.challenges.h5p.hint">
    Pega la URL del iframe de qualsevol plataforma H5P. El codi de resposta ha d'aparèixer 
    a la pantalla final de l'activitat o ser proporcionat pel professor.
  </p>
  
  <details>
    <summary data-i18n="creator.challenges.h5p.help.title">Com obtenir la URL del H5P?</summary>
    <ul data-i18n-html="creator.challenges.h5p.help.content">
      <li><strong>H5P.org:</strong> Clica "Embed" → Copia la URL del src del iframe</li>
      <li><strong>Moodle:</strong> Afegeix l'activitat → Compartir → Obtenir codi iframe</li>
      <li><strong>WordPress:</strong> Plugin H5P → Obtenir codi d'incrustació</li>
      <li><strong>Lumi:</strong> Exporta i publica → Usa la URL pública</li>
    </ul>
  </details>
</fieldset>
```

#### Template de reto guardado
Similar al formulario de nuevo reto, con campos editables.

### Modo jugador

```html
<!-- Si el reto tiene h5pUrl, se renderiza así: -->
<div class="h5p-container">
  <iframe 
    src="${challenge.h5pUrl}" 
    width="100%" 
    height="${challenge.h5pHeight || '500px'}"
    frameborder="0" 
    allowfullscreen="allowfullscreen"
    allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
    title="${challenge.title}"
  ></iframe>
  
  <div class="h5p-instructions">
    <p data-i18n="player.h5p.instruction">
      📝 Completa l'activitat interactiva i copia el codi que apareix al final
    </p>
  </div>
</div>

<!-- Luego el formulario de respuesta normal -->
<form id="challenge-form">
  <label>
    <span data-i18n="player.challenge.answer.label">Codi de resposta</span>
    <input type="text" id="challenge-answer" placeholder="Escriu el codi ací" />
  </label>
  <button type="submit">Valida la resposta</button>
</form>
```

---

## 💻 Implementación técnica

### 1. Actualizar traducciones (`app.js`)

```javascript
// Añadir a las traducciones en valenciano (ca)
"creator.challenges.h5p.title": "Activitat H5P (opcional)",
"creator.challenges.h5p.url.label": "URL de l'activitat H5P",
"creator.challenges.h5p.url.placeholder": "https://h5p.org/h5p/embed/1234",
"creator.challenges.h5p.height.label": "Altura del visor (opcional)",
"creator.challenges.h5p.height.placeholder": "500px",
"creator.challenges.h5p.hint": "Pega la URL del iframe de qualsevol plataforma H5P. El codi de resposta ha d'aparèixer a la pantalla final de l'activitat o ser proporcionat pel professor.",
"creator.challenges.h5p.help.title": "Com obtenir la URL del H5P?",
"creator.challenges.h5p.help.content": "<li><strong>H5P.org:</strong> Clica 'Embed' → Copia la URL del src del iframe</li><li><strong>Moodle:</strong> Afegeix l'activitat → Compartir → Obtenir codi iframe</li><li><strong>WordPress:</strong> Plugin H5P → Obtenir codi d'incrustació</li><li><strong>Lumi:</strong> Exporta i publica → Usa la URL pública</li>",
"player.h5p.instruction": "📝 Completa l'activitat interactiva i copia el codi que apareix al final",

// Español (es)
"creator.challenges.h5p.title": "Actividad H5P (opcional)",
"creator.challenges.h5p.url.label": "URL de la actividad H5P",
"creator.challenges.h5p.url.placeholder": "https://h5p.org/h5p/embed/1234",
"creator.challenges.h5p.height.label": "Altura del visor (opcional)",
"creator.challenges.h5p.height.placeholder": "500px",
"creator.challenges.h5p.hint": "Pega la URL del iframe de cualquier plataforma H5P. El código de respuesta debe aparecer en la pantalla final de la actividad o ser proporcionado por el profesor.",
"creator.challenges.h5p.help.title": "¿Cómo obtener la URL del H5P?",
"creator.challenges.h5p.help.content": "<li><strong>H5P.org:</strong> Haz clic en 'Embed' → Copia la URL del src del iframe</li><li><strong>Moodle:</strong> Añade la actividad → Compartir → Obtener código iframe</li><li><strong>WordPress:</strong> Plugin H5P → Obtener código de incrustación</li><li><strong>Lumi:</strong> Exporta y publica → Usa la URL pública</li>",
"player.h5p.instruction": "📝 Completa la actividad interactiva y copia el código que aparece al final",

// English (en)
"creator.challenges.h5p.title": "H5P Activity (optional)",
"creator.challenges.h5p.url.label": "H5P activity URL",
"creator.challenges.h5p.url.placeholder": "https://h5p.org/h5p/embed/1234",
"creator.challenges.h5p.height.label": "Viewer height (optional)",
"creator.challenges.h5p.height.placeholder": "500px",
"creator.challenges.h5p.hint": "Paste the iframe URL from any H5P platform. The answer code should appear at the end of the activity or be provided by the teacher.",
"creator.challenges.h5p.help.title": "How to get the H5P URL?",
"creator.challenges.h5p.help.content": "<li><strong>H5P.org:</strong> Click 'Embed' → Copy the iframe src URL</li><li><strong>Moodle:</strong> Add activity → Share → Get iframe code</li><li><strong>WordPress:</strong> H5P Plugin → Get embed code</li><li><strong>Lumi:</strong> Export and publish → Use public URL</li>",
"player.h5p.instruction": "📝 Complete the interactive activity and copy the code that appears at the end",
```

### 2. Actualizar normalización de datos (`normalizeProject`)

```javascript
// En la función normalizeProject, actualizar normalizedChallenge:
const normalizedChallenge = {
  id: challenge.id || generateId(),
  title: typeof challenge.title === "string" ? challenge.title : "",
  description: typeof challenge.description === "string" ? challenge.description : "",
  answer: typeof challenge.answer === "string" ? challenge.answer : "",
  successMessage: typeof challenge.successMessage === "string" 
    ? challenge.successMessage 
    : challenge.successMessage == null ? "" : String(challenge.successMessage),
  hint: typeof challenge.hint === "string" 
    ? challenge.hint 
    : challenge.hint == null ? "" : String(challenge.hint),
  
  // NUEVOS CAMPOS H5P
  h5pUrl: typeof challenge.h5pUrl === "string" ? challenge.h5pUrl : "",
  h5pHeight: typeof challenge.h5pHeight === "string" ? challenge.h5pHeight : "500px",
  
  collapsed: Boolean(challenge.collapsed),
  descriptionAttachments: Array.isArray(challenge.descriptionAttachments)
    ? challenge.descriptionAttachments.map(safeAttachment).filter(Boolean)
    : [],
  hintAttachments: Array.isArray(challenge.hintAttachments)
    ? challenge.hintAttachments.map(safeAttachment).filter(Boolean)
    : [],
  conditionalAnswers: Array.isArray(challenge.conditionalAnswers)
    ? challenge.conditionalAnswers.map((cond) => ({
        answer: typeof cond.answer === "string" ? cond.answer : "",
        nextChallengeId: typeof cond.nextChallengeId === "string" ? cond.nextChallengeId : null,
        successMessage: typeof cond.successMessage === "string" ? cond.successMessage : "",
      })).filter(c => c.answer)
    : [],
};
```

### 3. Modificar el manejador de creación de retos

```javascript
// En bindCreatorEvents(), actualizar addChallengeBtn.addEventListener:
elements.addChallengeBtn.addEventListener("click", () => {
  const project = getActiveProject();
  if (!project) return;
  
  const title = elements.newChallengeTitle.value.trim();
  const description = elements.newChallengeDescription.value.trim();
  const answer = elements.newChallengeAnswer.value.trim();
  const successMessage = elements.newChallengeSuccess.value.trim();
  const hint = elements.newChallengeHint.value.trim();
  
  // NUEVOS CAMPOS H5P
  const h5pUrl = document.getElementById('new-ch-h5p-url')?.value.trim() || "";
  const h5pHeight = document.getElementById('new-ch-h5p-height')?.value.trim() || "500px";
  
  if (!title || !answer) {
    showToast(t("toast.challenge.requireFields"), { error: true });
    return;
  }
  
  // Recoger las respuestas condicionales si existen
  const conditionalAnswers = [];
  const conditionContainer = document.getElementById('conditional-answers-container');
  if (conditionContainer) {
    const conditions = conditionContainer.querySelectorAll('.condition-item');
    conditions.forEach(condItem => {
      const answerInput = condItem.querySelector('.condition-answer');
      const nextSelect = condItem.querySelector('.condition-next');
      if (answerInput && nextSelect && answerInput.value.trim()) {
        conditionalAnswers.push({
          answer: answerInput.value.trim(),
          nextChallengeId: nextSelect.value || null,
          successMessage: "",
        });
      }
    });
  }
  
  project.challenges.push({
    id: generateId(),
    title,
    description,
    answer,
    successMessage,
    hint,
    h5pUrl,           // NUEVO
    h5pHeight,        // NUEVO
    collapsed: false,
    descriptionAttachments: [],
    hintAttachments: [],
    conditionalAnswers,
  });
  
  project.updatedAt = new Date().toISOString();
  persistProjects();
  renderProjectForm();
  
  // Limpiar formulario
  elements.newChallengeTitle.value = "";
  elements.newChallengeDescription.value = "";
  elements.newChallengeAnswer.value = "";
  elements.newChallengeSuccess.value = "";
  elements.newChallengeHint.value = "";
  document.getElementById('new-ch-h5p-url').value = "";      // NUEVO
  document.getElementById('new-ch-h5p-height').value = "500px"; // NUEVO
  if (conditionContainer) {
    conditionContainer.innerHTML = "";
  }
  
  const displayTitle = title || t("creator.challenge.untitled");
  showToast(t("toast.challenge.added", { title: displayTitle }));
});
```

### 4. Renderizar H5P en el modo jugador

```javascript
// Crear nueva función para renderizar contenido H5P
function renderH5pContent(container, challenge) {
  if (!challenge.h5pUrl || !challenge.h5pUrl.trim()) {
    return; // No hay H5P, no hacer nada
  }
  
  const h5pContainer = document.createElement('div');
  h5pContainer.className = 'h5p-embed-container';
  
  const iframe = document.createElement('iframe');
  iframe.src = challenge.h5pUrl;
  iframe.style.width = '100%';
  iframe.style.height = challenge.h5pHeight || '500px';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '0.5rem';
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('allow', 'geolocation *; microphone *; camera *; midi *; encrypted-media *');
  iframe.setAttribute('title', challenge.title || 'H5P Activity');
  
  const instructions = document.createElement('div');
  instructions.className = 'h5p-instructions';
  instructions.innerHTML = `
    <p><strong>${t('player.h5p.instruction')}</strong></p>
  `;
  
  h5pContainer.appendChild(iframe);
  h5pContainer.appendChild(instructions);
  container.appendChild(h5pContainer);
}

// Modificar renderCurrentChallenge para incluir H5P
function renderCurrentChallenge(project, progress) {
  const currentIndex = progress.currentIndex ?? 0;
  const challenge = project.challenges[currentIndex];
  
  // ... código existente de renderizado ...
  
  // Renderizar descripción
  renderMarkdown(elements.challengeDescription, challenge.description || t("player.challenge.defaultDescription"));
  
  // NUEVO: Renderizar H5P si existe
  if (challenge.h5pUrl) {
    renderH5pContent(elements.challengeDescription.parentElement, challenge);
  }
  
  // ... resto del código existente ...
}
```

### 5. Actualizar el template HTML de retos guardados

```html
<!-- En el template challenge-template, añadir después del campo hint: -->
<fieldset class="h5p-section">
  <legend data-i18n="creator.challenges.h5p.title">Activitat H5P (opcional)</legend>
  
  <label>
    <span data-i18n="creator.challenges.h5p.url.label">URL de l'activitat H5P</span>
    <input type="url" data-field="h5pUrl" />
  </label>
  
  <label>
    <span data-i18n="creator.challenges.h5p.height.label">Altura del visor (opcional)</span>
    <input type="text" data-field="h5pHeight" placeholder="500px" />
  </label>
  
  <p class="hint" data-i18n="creator.challenges.h5p.hint">
    Pega la URL del iframe de qualsevol plataforma H5P.
  </p>
</fieldset>
```

### 6. Actualizar renderChallenges para campos H5P

```javascript
// En renderChallenges, añadir manejo de campos H5P:
const h5pUrlInput = node.querySelector('input[data-field="h5pUrl"]');
const h5pHeightInput = node.querySelector('input[data-field="h5pHeight"]');

if (h5pUrlInput) {
  h5pUrlInput.value = challenge.h5pUrl || "";
  h5pUrlInput.addEventListener("input", handleChallengeField(project, index, "h5pUrl"));
}

if (h5pHeightInput) {
  h5pHeightInput.value = challenge.h5pHeight || "500px";
  h5pHeightInput.addEventListener("input", handleChallengeField(project, index, "h5pHeight"));
}
```

---

## 🎨 Estilos CSS

```css
/* Estilos para contenedor H5P */
.h5p-section {
  margin-top: 1rem;
  background: rgba(248, 250, 252, 0.6);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1rem;
}

.h5p-section legend {
  font-weight: 600;
  color: var(--accent);
  padding: 0 0.5rem;
}

.h5p-section .hint {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.h5p-section details {
  margin-top: 0.75rem;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.h5p-section summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--accent-dark);
  padding: 0.25rem;
}

.h5p-section ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

/* Estilos para el visor H5P en modo jugador */
.h5p-embed-container {
  margin: 1.5rem 0;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.h5p-embed-container iframe {
  display: block;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.h5p-instructions {
  margin-top: 1rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1));
  border-left: 4px solid var(--accent);
  border-radius: 0.5rem;
}

.h5p-instructions p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text);
}

@media (max-width: 720px) {
  .h5p-embed-container {
    padding: 0.75rem;
  }
  
  .h5p-embed-container iframe {
    height: 400px !important;
  }
}
```

---

## 📝 Flujo de uso

### Para el creador (profesor)

1. **Crear actividad H5P** en cualquier plataforma (H5P.org, Moodle, WordPress, Lumi)
2. **Obtener URL del iframe** (botón "Embed" o "Compartir")
3. **Crear reto en EduGincana**:
   - Título: "Activitat sobre els vertebrats"
   - Descripción: "Classifica els animals segons el seu esquelet"
   - URL H5P: `https://h5p.org/h5p/embed/617821`
   - Respuesta: "VERTEBRATS2024" ← código que aparece al completar
4. **Publicar gimcana**

### Para el jugador (alumno)

1. **Ver el reto** con el H5P embebido
2. **Completar la actividad** interactiva
3. **Copiar el código** que aparece al final
4. **Introducir el código** en el campo de respuesta
5. **Continuar** al siguiente reto

---

## 🔒 Consideraciones de seguridad

### Validación de URLs
```javascript
function isValidH5pUrl(url) {
  if (!url || !url.trim()) return true; // Vacío es válido (opcional)
  
  try {
    const parsed = new URL(url);
    // Permitir solo HTTPS (más seguro)
    if (parsed.protocol !== 'https:') {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

// Usar en el evento de input:
h5pUrlInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value && !isValidH5pUrl(value)) {
    e.target.setCustomValidity(t('creator.challenges.h5p.error.invalidUrl'));
    e.target.reportValidity();
  } else {
    e.target.setCustomValidity('');
  }
  handleChallengeField(project, index, "h5pUrl")(e);
});
```

### Atributos de iframe seguros
```javascript
// Sandbox (opcional, puede romper algunas actividades H5P)
// iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');

// Content Security Policy (configurar si es necesario)
// Nota: H5P necesita permisos amplios para funcionar correctamente
```

---

## 🧪 Testing y validación

### Casos de prueba

1. **Reto sin H5P** → Debe funcionar exactamente como antes
2. **Reto con H5P válido** → Debe mostrar iframe correctamente
3. **URL H5P inválida** → Debe mostrar error o iframe vacío
4. **Código correcto** → Debe avanzar al siguiente reto
5. **Código incorrecto** → Debe mostrar mensaje de error
6. **Diferentes alturas** → Comprobar que se respetan (300px, 500px, 800px)
7. **Móvil** → Verificar que el iframe es responsive
8. **Exportar/Importar** → Los campos H5P deben preservarse

### Plataformas H5P para probar

- **H5P.org**: https://h5p.org/h5p/embed/617821 (ejemplo público)
- **Moodle**: Requiere cuenta en un Moodle con H5P
- **WordPress**: Requiere WordPress con plugin H5P
- **Lumi**: App de escritorio, puede generar URLs públicas

---

## 🚀 Plan de implementación

### Fase 1: Estructura básica (1 hora)
- [ ] Añadir campos h5pUrl y h5pHeight al HTML
- [ ] Actualizar traducciones
- [ ] Modificar normalizeProject para incluir campos H5P

### Fase 2: Creador (1 hora)
- [ ] Añadir inputs en formulario nuevo reto
- [ ] Añadir inputs en template de retos guardados
- [ ] Actualizar manejadores de eventos
- [ ] Validación de URLs

### Fase 3: Jugador (30 minutos)
- [ ] Crear función renderH5pContent
- [ ] Integrar en renderCurrentChallenge
- [ ] Probar diferentes URLs

### Fase 4: Estilos (30 minutos)
- [ ] CSS para sección H5P en creador
- [ ] CSS para iframe en jugador
- [ ] Responsive design

### Fase 5: Testing (1 hora)
- [ ] Probar todos los casos de uso
- [ ] Verificar exportar/importar
- [ ] Probar en móvil
- [ ] Documentar ejemplos

**Tiempo total estimado: 4 horas**

---

## 📚 Recursos y ejemplos

### Ejemplos de URLs H5P públicas

```
https://h5p.org/h5p/embed/617821
https://h5p.org/h5p/embed/1209180
https://h5p.org/h5p/embed/591673
```

### Ejemplo de gimcana con H5P

```json
{
  "title": "Gimcana de Biologia",
  "challenges": [
    {
      "title": "Classifica els vertebrats",
      "description": "Arrossega cada animal a la categoria correcta",
      "h5pUrl": "https://h5p.org/h5p/embed/617821",
      "h5pHeight": "600px",
      "answer": "VERTEBRATS2024",
      "successMessage": "Excel·lent! Has classificat correctament tots els animals"
    }
  ]
}
```

---

## 🔮 Mejoras futuras (v2)

1. **Captura automática de eventos H5P** (requiere backend)
   - Usar postMessage API para comunicación iframe
   - Detectar completación sin código manual

2. **Galería de actividades H5P**
   - Catálogo de actividades pre-creadas
   - Filtro por materia y nivel

3. **Integración xAPI/LRS**
   - Seguimiento completo de progreso
   - Analíticas de aprendizaje

4. **Modo offline**
   - Guardar paquetes .h5p en IndexedDB
   - Reproducción sin conexión

5. **Preview en tiempo real**
   - Mostrar preview del H5P al pegar URL
   - Validación automática de URLs

---

## ❓ FAQs

**P: ¿Funcionará con cualquier plataforma H5P?**  
R: Sí, siempre que proporcionen una URL embebible (iframe). Algunas plataformas privadas pueden requerir autenticación.

**P: ¿Qué pasa si el servidor H5P está caído?**  
R: El iframe mostrará un error. El usuario puede intentar más tarde o el profesor puede dar el código manualmente.

**P: ¿Puedo poner varios H5P en un mismo reto?**  
R: En esta versión, solo uno. Para v2 se podría soportar múltiples.

**P: ¿Cómo genero códigos únicos para cada estudiante?**  
R: Esta versión no soporta códigos dinámicos. Usa códigos genéricos o implementa un backend para v2.

**P: ¿Funciona offline?**  
R: No, el iframe requiere conexión. Para offline necesitarías H5P.js y paquetes descargados.

---

## 📄 Licencia y créditos

- H5P es software libre: https://h5p.org/
- Esta implementación es compatible con la licencia MIT de EduGincana
- Créditos a H5P.org por la tecnología de contenido interactivo

---

**Documento creado:** 4 de noviembre de 2025  
**Versión:** 1.0  
**Estado:** Pendiente de implementación
