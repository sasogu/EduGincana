const STORAGE_KEY = "eduGincanaProjectsV1";
const PROGRESS_KEY_PREFIX = "eduGincanaProgress:";
const LANG_STORAGE_KEY = "eduGincanaLanguage";
const DEFAULT_LANGUAGE = "ca";

const translations = {
  ca: {
    "language.label": "Idioma",
    "language.option.ca": "Valencià",
    "language.option.es": "Castellà",
    "language.option.en": "Anglés",
    "app.windowTitle": "EduGincana · Creador de gimcanes didàctiques",
    "app.subtitle":
      "Dissenya i juga gimcanes didàctiques amb reptes encadenats i recompenses finals.",
    "app.hero.gamification": "Gamificació",
    "app.hero.activeLearning": "Aprenentatge actiu",
    "app.hero.teamwork": "Treball en equip",
    "mode.creator": "Mode creador",
    "mode.player": "Mode joc",
    "mode.switch": "Canviar de mode",
    "creator.heading": "Dissenya la teua gimcana",
    "creator.project.selector.label": "Selecciona una gimcana guardada",
    "creator.actions.new": "Nova gimcana",
    "creator.info.title": "Informació general",
    "creator.info.field.title.label": "Títol",
    "creator.info.field.title.placeholder": "Ex. Gimcana de ciències",
    "creator.info.field.author.label": "Autoria o equip",
    "creator.info.field.author.placeholder": "El teu nom o el grup",
    "creator.info.field.story.label": "Introducció o història",
    "creator.info.field.story.placeholder": "Context inicial per motivar a l'alumnat...",
    "creator.info.field.reward.label": "Missatge final / premi",
    "creator.info.field.reward.placeholder":
      "Missatge o instruccions per lliurar la recompensa final.",
    "creator.challenges.title": "Reptes",
    "creator.challenges.exportJson": "Exporta JSON",
    "creator.challenges.exportHtml": "Exporta HTML",
    "creator.challenges.duplicate": "Duplica",
    "creator.challenges.hint":
      "Ordena els reptes segons la seqüència desitjada. Cada resposta correcta desbloqueja el següent.",
    "creator.challenges.new.legend": "Afegeix nou repte",
    "creator.challenges.new.title.label": "Títol del repte",
    "creator.challenges.new.title.placeholder": "Ex. Repte de pistes",
    "creator.challenges.new.description.label": "Descripció o pista",
    "creator.challenges.new.description.placeholder": "Text que orienta per resoldre el repte...",
    "creator.challenges.new.answer.label": "Resposta correcta",
    "creator.challenges.new.answer.placeholder": "Codi, paraula clau, etc.",
    "creator.challenges.new.success.label": "Missatge en superar el repte (opcional)",
    "creator.challenges.new.success.placeholder": "Enhorabona! Has trobat...",
    "creator.challenges.new.hint.label": "Pista (opcional)",
    "creator.challenges.new.hint.placeholder": "Ajuda breu que es mostrarà en demanar-la.",
    "creator.challenges.new.button": "Afegeix repte",
    "creator.import.title": "Importa gimcana",
    "creator.import.description":
      "Si una altra persona et comparteix un JSON, enganxa'l ací per afegir-lo a la teua col·lecció.",
    "creator.import.placeholder": '{"id":"...","title":"..."}',
    "creator.import.button": "Importa",
    "creator.challenge.summary": "Repte {{index}}. {{title}}",
    "creator.challenge.untitled": "Repte sense títol",
    "creator.project.defaultTitle": "Nova gimcana",
    "creator.project.copySuffix": "{{title}} (còpia)",
    "player.heading": "Juga una gimcana",
    "player.select.label": "Selecciona una gimcana disponible",
    "player.select.placeholder": "Selecciona una gimcana...",
    "player.actions.start": "Comença / continua",
    "player.actions.reset": "Reinicia el progrés",
    "player.challenge.answer.label": "Resposta",
    "player.challenge.answer.placeholder": "Escriu ací la resposta",
    "player.challenge.submit": "Valida la resposta",
    "player.challenge.hintButton": "Demana pista",
    "player.challenge.untitled": "Repte sense títol",
    "player.challenge.title": "Repte {{index}} de {{total}}: {{title}}",
    "player.challenge.defaultDescription": "Resol aquest repte per continuar.",
    "player.intro.title": "Introducció",
    "player.feedback.noAnswer": "Introdueix una resposta.",
    "player.feedback.incorrect": "Resposta incorrecta. Torna-ho a provar!",
    "player.feedback.correct": "Correcte! Has desbloquejat el següent repte.",
    "player.feedback.noHint": "No hi ha cap pista disponible per a aquest repte.",
    "player.reward.title": "Repte final completat!",
    "player.reward.default":
      "Has completat tots els reptes! Reuneix-te amb la persona facilitadora per rebre el premi.",
    "player.meta.author": "Autoria: {{author}}",
    "player.meta.challenges": "Reptes: {{count}}",
    "player.progress": "Progrés: {{current}} / {{total}}",
    "toast.project.created": "Nova gimcana creada.",
    "toast.project.duplicated": "Gimcana duplicada.",
    "toast.project.none": "No hi ha cap gimcana per exportar.",
    "toast.project.requireChallenge": "Afig almenys un repte abans d'exportar.",
    "toast.project.jsonCopied": "JSON copiat al porta-retalls.",
    "toast.project.jsonFallback": "Copia manualment el text mostrat.",
    "toast.project.import.empty": "Introdueix un JSON vàlid per importar.",
    "toast.project.import.success": "Gimcana importada correctament.",
    "toast.project.import.error": "No s'ha pogut importar el JSON proporcionat.",
    "toast.challenge.requireFields":
      "Afig almenys un títol i una resposta per al repte.",
    "toast.challenge.added": 'Repte "{{title}}" afegit.',
    "toast.challenge.removed": 'Repte "{{title}}" eliminat.',
    "toast.player.select": "Selecciona una gimcana per jugar.",
    "toast.player.noChallenges": "Aquesta gimcana encara no té reptes.",
    "toast.player.progressReset": "Progrés reiniciat.",
    "toast.project.exportHtml": "Fitxer HTML descarregat."
  },
  es: {
    "language.label": "Idioma",
    "language.option.ca": "Valenciano",
    "language.option.es": "Español",
    "language.option.en": "Inglés",
    "app.windowTitle": "EduGincana · Creador de gincanas didácticas",
    "app.subtitle":
      "Diseña y juega gincanas didácticas con retos encadenados y recompensas finales.",
    "app.hero.gamification": "Gamificación",
    "app.hero.activeLearning": "Aprendizaje activo",
    "app.hero.teamwork": "Trabajo en equipo",
    "mode.creator": "Modo creador",
    "mode.player": "Modo juego",
    "mode.switch": "Cambiar de modo",
    "creator.heading": "Diseña tu gincana",
    "creator.project.selector.label": "Selecciona una gincana guardada",
    "creator.actions.new": "Nueva gincana",
    "creator.info.title": "Información general",
    "creator.info.field.title.label": "Título",
    "creator.info.field.title.placeholder": "Ej. Gincana de ciencias",
    "creator.info.field.author.label": "Autoría o equipo",
    "creator.info.field.author.placeholder": "Tu nombre o el grupo",
    "creator.info.field.story.label": "Introducción o historia",
    "creator.info.field.story.placeholder": "Contexto inicial para motivar al alumnado...",
    "creator.info.field.reward.label": "Mensaje final / premio",
    "creator.info.field.reward.placeholder":
      "Mensaje o instrucciones para entregar la recompensa final.",
    "creator.challenges.title": "Retos",
    "creator.challenges.exportJson": "Exportar JSON",
    "creator.challenges.exportHtml": "Exportar HTML",
    "creator.challenges.duplicate": "Duplicar",
    "creator.challenges.hint":
      "Ordena los retos según la secuencia deseada. Cada respuesta correcta desbloquea el siguiente.",
    "creator.challenges.new.legend": "Añadir nuevo reto",
    "creator.challenges.new.title.label": "Título del reto",
    "creator.challenges.new.title.placeholder": "Ej. Desafío de pistas",
    "creator.challenges.new.description.label": "Descripción o pista",
    "creator.challenges.new.description.placeholder":
      "Texto que guía para resolver el reto...",
    "creator.challenges.new.answer.label": "Respuesta correcta",
    "creator.challenges.new.answer.placeholder": "Código, palabra clave, etc.",
    "creator.challenges.new.success.label": "Mensaje al superar el reto (opcional)",
    "creator.challenges.new.success.placeholder": "¡Enhorabuena! Has encontrado...",
    "creator.challenges.new.hint.label": "Pista (opcional)",
    "creator.challenges.new.hint.placeholder": "Ayuda breve que se mostrará al pedirla.",
    "creator.challenges.new.button": "Añadir reto",
    "creator.import.title": "Importar gincana",
    "creator.import.description":
      "Si otra persona te comparte un JSON, pégalo aquí para añadirlo a tu colección.",
    "creator.import.placeholder": '{"id":"...","title":"..."}',
    "creator.import.button": "Importar",
    "creator.challenge.summary": "Reto {{index}}. {{title}}",
    "creator.challenge.untitled": "Reto sin título",
    "creator.project.defaultTitle": "Nueva gincana",
    "creator.project.copySuffix": "{{title}} (copia)",
    "player.heading": "Juega una gincana",
    "player.select.label": "Selecciona una gincana disponible",
    "player.select.placeholder": "Selecciona una gincana...",
    "player.actions.start": "Comenzar / continuar",
    "player.actions.reset": "Reiniciar progreso",
    "player.challenge.answer.label": "Respuesta",
    "player.challenge.answer.placeholder": "Escribe aquí tu respuesta",
    "player.challenge.submit": "Validar respuesta",
    "player.challenge.hintButton": "Pedir pista",
    "player.challenge.untitled": "Reto sin título",
    "player.challenge.title": "Reto {{index}} de {{total}}: {{title}}",
    "player.challenge.defaultDescription": "Resuelve este reto para continuar.",
    "player.intro.title": "Introducción",
    "player.feedback.noAnswer": "Introduce una respuesta.",
    "player.feedback.incorrect": "Respuesta incorrecta. ¡Inténtalo de nuevo!",
    "player.feedback.correct": "¡Correcto! Has desbloqueado el siguiente reto.",
    "player.feedback.noHint": "No hay pista disponible para este reto.",
    "player.reward.title": "¡Reto final completado!",
    "player.reward.default":
      "¡Has completado todos los retos! Reúnete con tu facilitador para recibir tu premio.",
    "player.meta.author": "Autoría: {{author}}",
    "player.meta.challenges": "Retos: {{count}}",
    "player.progress": "Progreso: {{current}} / {{total}}",
    "toast.project.created": "Nueva gincana creada.",
    "toast.project.duplicated": "Gincana duplicada.",
    "toast.project.none": "No hay gincana para exportar.",
    "toast.project.requireChallenge": "Añade al menos un reto antes de exportar.",
    "toast.project.jsonCopied": "JSON copiado al portapapeles.",
    "toast.project.jsonFallback": "Copia manualmente el texto mostrado.",
    "toast.project.import.empty": "Introduce un JSON válido para importar.",
    "toast.project.import.success": "Gincana importada correctamente.",
    "toast.project.import.error": "No se pudo importar el JSON proporcionado.",
    "toast.challenge.requireFields":
      "Añade al menos un título y una respuesta para el reto.",
    "toast.challenge.added": 'Reto "{{title}}" añadido.',
    "toast.challenge.removed": 'Reto "{{title}}" eliminado.',
    "toast.player.select": "Selecciona una gincana para jugar.",
    "toast.player.noChallenges": "Esta gincana aún no tiene retos.",
    "toast.player.progressReset": "Progreso reiniciado.",
    "toast.project.exportHtml": "Archivo HTML descargado."
  },
  en: {
    "language.label": "Language",
    "language.option.ca": "Valencian",
    "language.option.es": "Spanish",
    "language.option.en": "English",
    "app.windowTitle": "EduGincana · Scavenger hunt creator",
    "app.subtitle":
      "Design and play educational scavenger hunts with chained challenges and final rewards.",
    "app.hero.gamification": "Gamification",
    "app.hero.activeLearning": "Active learning",
    "app.hero.teamwork": "Teamwork",
    "mode.creator": "Creator mode",
    "mode.player": "Play mode",
    "mode.switch": "Change mode",
    "creator.heading": "Design your scavenger hunt",
    "creator.project.selector.label": "Select a saved scavenger hunt",
    "creator.actions.new": "New scavenger hunt",
    "creator.info.title": "General information",
    "creator.info.field.title.label": "Title",
    "creator.info.field.title.placeholder": "e.g. Science quest",
    "creator.info.field.author.label": "Author or team",
    "creator.info.field.author.placeholder": "Your name or the group",
    "creator.info.field.story.label": "Introduction or story",
    "creator.info.field.story.placeholder":
      "Introductory story to motivate the participants...",
    "creator.info.field.reward.label": "Final message / reward",
    "creator.info.field.reward.placeholder":
      "Message or instructions to deliver the final reward.",
    "creator.challenges.title": "Challenges",
    "creator.challenges.exportJson": "Export JSON",
    "creator.challenges.exportHtml": "Export HTML",
    "creator.challenges.duplicate": "Duplicate",
    "creator.challenges.hint":
      "Order the challenges in the desired sequence. Each correct answer unlocks the next one.",
    "creator.challenges.new.legend": "Add new challenge",
    "creator.challenges.new.title.label": "Challenge title",
    "creator.challenges.new.title.placeholder": "e.g. Clue challenge",
    "creator.challenges.new.description.label": "Description or clue",
    "creator.challenges.new.description.placeholder":
      "Text that guides participants to solve the challenge...",
    "creator.challenges.new.answer.label": "Correct answer",
    "creator.challenges.new.answer.placeholder": "Code, keyword, etc.",
    "creator.challenges.new.success.label": "Success message (optional)",
    "creator.challenges.new.success.placeholder": "Congrats! You have found...",
    "creator.challenges.new.hint.label": "Hint (optional)",
    "creator.challenges.new.hint.placeholder": "Short hint shown when requested.",
    "creator.challenges.new.button": "Add challenge",
    "creator.import.title": "Import scavenger hunt",
    "creator.import.description":
      "If someone shares a JSON with you, paste it here to add it to your local collection.",
    "creator.import.placeholder": '{"id":"...","title":"..."}',
    "creator.import.button": "Import",
    "creator.challenge.summary": "Challenge {{index}}. {{title}}",
    "creator.challenge.untitled": "Untitled challenge",
    "creator.project.defaultTitle": "New scavenger hunt",
    "creator.project.copySuffix": "{{title}} (copy)",
    "player.heading": "Play a scavenger hunt",
    "player.select.label": "Choose an available scavenger hunt",
    "player.select.placeholder": "Select a scavenger hunt...",
    "player.actions.start": "Start / continue",
    "player.actions.reset": "Reset progress",
    "player.challenge.answer.label": "Answer",
    "player.challenge.answer.placeholder": "Type your answer here",
    "player.challenge.submit": "Check answer",
    "player.challenge.hintButton": "Show hint",
    "player.challenge.untitled": "Untitled challenge",
    "player.challenge.title": "Challenge {{index}} of {{total}}: {{title}}",
    "player.challenge.defaultDescription": "Solve this challenge to continue.",
    "player.intro.title": "Introduction",
    "player.feedback.noAnswer": "Please enter an answer.",
    "player.feedback.incorrect": "Incorrect answer. Try again!",
    "player.feedback.correct": "Correct! The next challenge is unlocked.",
    "player.feedback.noHint": "No hint is available for this challenge.",
    "player.reward.title": "Final challenge complete!",
    "player.reward.default":
      "You finished every challenge! Meet your facilitator to receive the reward.",
    "player.meta.author": "Author: {{author}}",
    "player.meta.challenges": "Challenges: {{count}}",
    "player.progress": "Progress: {{current}} / {{total}}",
    "toast.project.created": "New scavenger hunt created.",
    "toast.project.duplicated": "Scavenger hunt duplicated.",
    "toast.project.none": "There is no scavenger hunt to export.",
    "toast.project.requireChallenge": "Add at least one challenge before exporting.",
    "toast.project.jsonCopied": "JSON copied to clipboard.",
    "toast.project.jsonFallback": "Copy the displayed text manually.",
    "toast.project.import.empty": "Provide a valid JSON to import.",
    "toast.project.import.success": "Scavenger hunt imported successfully.",
    "toast.project.import.error": "The provided JSON could not be imported.",
    "toast.challenge.requireFields": "Add at least a title and an answer for the challenge.",
    "toast.challenge.added": 'Challenge "{{title}}" added.',
    "toast.challenge.removed": 'Challenge "{{title}}" removed.',
    "toast.player.select": "Select a scavenger hunt to play.",
    "toast.player.noChallenges": "This scavenger hunt has no challenges yet.",
    "toast.player.progressReset": "Progress reset.",
    "toast.project.exportHtml": "HTML file downloaded."
  }
};

const elements = {};
let currentLanguage = loadLanguage();
let projects = loadProjects();
let activeProjectId = projects[0]?.id ?? null;

function loadLanguage() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    console.warn("No es va poder carregar l'idioma guardat", error);
  }
  return DEFAULT_LANGUAGE;
}

function getTranslations(lang) {
  return translations[lang] ?? translations[DEFAULT_LANGUAGE];
}

function formatTemplate(template, params = {}) {
  if (typeof template !== "string") {
    return template ?? "";
  }
  return template.replace(/\{\{(\w+)\}\}/g, (match, token) => {
    return Object.prototype.hasOwnProperty.call(params, token) ? params[token] : match;
  });
}

function t(key, params = {}) {
  const dict = getTranslations(currentLanguage);
  const fallback = getTranslations(DEFAULT_LANGUAGE);
  const template = dict[key] ?? fallback[key] ?? key;
  return formatTemplate(template, params);
}

function translateForLang(key, lang, params = {}) {
  const dict = getTranslations(lang);
  const fallback = getTranslations(DEFAULT_LANGUAGE);
  const template = dict[key] ?? fallback[key] ?? key;
  return formatTemplate(template, params);
}

function applyTranslations(root = document) {
  applyTranslationsTo(root);
  refreshLanguageSelector();
  if (typeof document !== "undefined" && document.documentElement) {
    document.documentElement.lang = currentLanguage;
    if (translations[currentLanguage]?.["app.windowTitle"]) {
      document.title = t("app.windowTitle");
    }
  }
}

function applyTranslationsTo(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key) {
      element.innerHTML = t(key);
    }
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key) {
      element.setAttribute("placeholder", t(key));
    }
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (key) {
      element.setAttribute("aria-label", t(key));
    }
  });
}

function initLanguage() {
  if (elements.languageSelector) {
    elements.languageSelector.value = currentLanguage;
    elements.languageSelector.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }
}

function setLanguage(lang) {
  const nextLanguage = translations[lang] ? lang : DEFAULT_LANGUAGE;
  currentLanguage = nextLanguage;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, currentLanguage);
  } catch (error) {
    console.warn("No es va poder guardar l'idioma preferit", error);
  }
  if (elements.languageSelector) {
    elements.languageSelector.value = currentLanguage;
  }
  renderProjectForm();
  renderSelectors();
  applyTranslations();
  refreshPlayerView();
}

function refreshLanguageSelector() {
  if (!elements.languageSelector) return;
  elements.languageSelector.querySelectorAll("option").forEach((option) => {
    const key = option.dataset.i18n;
    if (key) {
      option.textContent = t(key);
    }
  });
  elements.languageSelector.value = currentLanguage;
}

function refreshPlayerView() {
  if (!elements.playerView || elements.playerView.classList.contains("hidden")) {
    return;
  }
  const project = getPlayerProject();
  if (!project) return;
  const progress = loadProgress(project.id);
  showPlayerView(project, progress);
}

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  initLanguage();
  setupModeSwitch();
  bindCreatorEvents();
  bindPlayerEvents();
  ensureActiveProject();
  renderSelectors();
  renderProjectForm();
  applyTranslations();
  bindAutofocus();
  registerServiceWorker();
});

function cacheElements() {
  elements.creatorPanel = document.getElementById("creator");
  elements.playerPanel = document.getElementById("player");
  elements.languageSelector = document.getElementById("language-selector");
  elements.projectSelector = document.getElementById("project-selector");
  elements.playerProjectSelector = document.getElementById("player-project-selector");
  elements.newProjectBtn = document.getElementById("new-project");
  elements.duplicateProjectBtn = document.getElementById("duplicate-project");
  elements.exportProjectBtn = document.getElementById("export-project");
  elements.exportHtmlBtn = document.getElementById("export-html");
  elements.importBtn = document.getElementById("import-project");
  elements.importArea = document.getElementById("import-area");
  elements.toast = document.querySelector(".toast");
  elements.projectForm = document.getElementById("project-form");
  elements.projectTitle = document.getElementById("project-title");
  elements.projectAuthor = document.getElementById("project-author");
  elements.projectStory = document.getElementById("project-story");
  elements.projectReward = document.getElementById("project-reward");
  elements.challengeList = document.getElementById("challenge-list");
  elements.newChallengeTitle = document.getElementById("new-ch-title");
  elements.newChallengeDescription = document.getElementById("new-ch-description");
  elements.newChallengeAnswer = document.getElementById("new-ch-answer");
  elements.newChallengeSuccess = document.getElementById("new-ch-success");
  elements.newChallengeHint = document.getElementById("new-ch-hint");
  elements.addChallengeBtn = document.getElementById("add-challenge");
  elements.challengeTemplate = document.getElementById("challenge-template");
  elements.startRunBtn = document.getElementById("start-run");
  elements.resetProgressBtn = document.getElementById("reset-progress");
  elements.playerView = document.getElementById("player-view");
  elements.playerTitle = document.getElementById("player-title");
  elements.playerMeta = document.getElementById("player-meta");
  elements.playerStory = document.getElementById("player-story");
  elements.challengeView = document.getElementById("challenge-view");
  elements.challengeTitle = document.getElementById("challenge-title");
  elements.challengeDescription = document.getElementById("challenge-description");
  elements.challengeForm = document.getElementById("challenge-form");
  elements.challengeAnswer = document.getElementById("challenge-answer");
  elements.challengeFeedback = document.getElementById("challenge-feedback");
  elements.challengeActions = document.querySelector(".challenge-actions");
  elements.challengeHintButton = document.getElementById("challenge-hint-button");
  elements.challengeHintText = document.getElementById("challenge-hint-text");
  elements.rewardView = document.getElementById("reward-view");
  elements.rewardMessage = document.getElementById("reward-message");
}

function setupModeSwitch() {
  const buttons = document.querySelectorAll(".mode-switch button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      document.querySelectorAll(".panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === target);
      });
    });
  });
}

function bindCreatorEvents() {
  elements.projectSelector.addEventListener("change", () => {
    activeProjectId = elements.projectSelector.value || null;
    renderProjectForm();
    renderSelectors();
    applyTranslationsTo(elements.projectForm);
  });

  elements.newProjectBtn.addEventListener("click", () => {
    const project = createEmptyProject();
    projects.push(project);
    activeProjectId = project.id;
    persistProjects();
    renderSelectors();
    renderProjectForm();
    applyTranslations();
    showToast(t("toast.project.created"));
  });

  elements.duplicateProjectBtn.addEventListener("click", () => {
    const original = getActiveProject();
    if (!original) return;
    const copy = deepClone(original);
    const originalTitle = original.title || t("creator.challenge.untitled");
    copy.id = generateId();
    copy.title = t("creator.project.copySuffix", { title: originalTitle });
    copy.createdAt = new Date().toISOString();
    copy.updatedAt = copy.createdAt;
    projects.push(copy);
    activeProjectId = copy.id;
    persistProjects();
    renderSelectors();
    renderProjectForm();
    applyTranslations();
    showToast(t("toast.project.duplicated"));
  });

  elements.exportProjectBtn.addEventListener("click", async () => {
    const project = getActiveProject();
    if (!project) {
      showToast(t("toast.project.none"), { error: true });
      return;
    }
    const payload = JSON.stringify(prepareProjectForExport(project), null, 2);
    try {
      await navigator.clipboard.writeText(payload);
      showToast(t("toast.project.jsonCopied"));
    } catch {
      elements.importArea.value = payload;
      elements.importArea.select();
      showToast(t("toast.project.jsonFallback"), { error: true });
    }
  });

  if (elements.exportHtmlBtn) {
    elements.exportHtmlBtn.addEventListener("click", () => {
      const project = getActiveProject();
      if (!project) {
        showToast(t("toast.project.none"), { error: true });
        return;
      }
      if (!project.challenges.length) {
        showToast(t("toast.project.requireChallenge"), { error: true });
        return;
      }
      const filename = `${slugify(project.title || "gincana")}.html`;
      const html = buildStandaloneHtml(prepareProjectForExport(project));
      downloadFile(filename, html, "text/html");
      showToast(t("toast.project.exportHtml"));
    });
  }

  elements.importBtn.addEventListener("click", () => {
    const raw = elements.importArea.value.trim();
    if (!raw) {
      showToast(t("toast.project.import.empty"), { error: true });
      return;
    }
    try {
      const data = JSON.parse(raw);
      validateProject(data);
      const normalized = normalizeProject(data);
      const existing = projects.find((p) => p.id === normalized.id);
      const project = existing ? { ...normalized, id: generateId() } : normalized;
      project.createdAt = project.createdAt ?? new Date().toISOString();
      project.updatedAt = new Date().toISOString();
      projects.push(project);
      activeProjectId = project.id;
      elements.importArea.value = "";
      persistProjects();
      renderSelectors();
      renderProjectForm();
      applyTranslations();
      showToast(t("toast.project.import.success"));
    } catch (error) {
      console.error(error);
      showToast(t("toast.project.import.error"), { error: true });
    }
  });

  elements.projectTitle.addEventListener("input", handleProjectField("title"));
  elements.projectAuthor.addEventListener("input", handleProjectField("author"));
  elements.projectStory.addEventListener("input", handleProjectField("story"));
  elements.projectReward.addEventListener("input", handleProjectField("rewardMessage"));

  elements.addChallengeBtn.addEventListener("click", () => {
    const project = getActiveProject();
    if (!project) return;
    const title = elements.newChallengeTitle.value.trim();
    const description = elements.newChallengeDescription.value.trim();
    const answer = elements.newChallengeAnswer.value.trim();
    const successMessage = elements.newChallengeSuccess.value.trim();
    const hint = elements.newChallengeHint.value.trim();
    if (!title || !answer) {
      showToast(t("toast.challenge.requireFields"), { error: true });
      return;
    }
    project.challenges.push({
      id: generateId(),
      title,
      description,
      answer,
      successMessage,
      hint,
    });
    project.updatedAt = new Date().toISOString();
    persistProjects();
    renderProjectForm();
    elements.newChallengeTitle.value = "";
    elements.newChallengeDescription.value = "";
    elements.newChallengeAnswer.value = "";
    elements.newChallengeSuccess.value = "";
    elements.newChallengeHint.value = "";
    const displayTitle = title || t("creator.challenge.untitled");
    showToast(t("toast.challenge.added", { title: displayTitle }));
  });
}

function bindPlayerEvents() {
  elements.playerProjectSelector.addEventListener("change", () => {
    hidePlayerView();
  });

  elements.startRunBtn.addEventListener("click", () => {
    const project = getPlayerProject();
    if (!project) {
      showToast(t("toast.player.select"), { error: true });
      return;
    }
    if (!project.challenges.length) {
      showToast(t("toast.player.noChallenges"), { error: true });
      return;
    }
    const progress = loadProgress(project.id);
    showPlayerView(project, progress);
  });

  elements.resetProgressBtn.addEventListener("click", () => {
    const project = getPlayerProject();
    if (!project) return;
    localStorage.removeItem(progressKey(project.id));
    hidePlayerView();
    showToast(t("toast.player.progressReset"));
  });

  if (elements.challengeHintButton) {
    elements.challengeHintButton.addEventListener("click", () => {
      const hint = elements.challengeHintButton.dataset.hint;
      if (!hint) {
        showFeedback(t("player.feedback.noHint"), true);
        return;
      }
      elements.challengeHintText.textContent = hint;
      elements.challengeHintButton.disabled = true;
    });
  }

  elements.challengeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const project = getPlayerProject();
    if (!project) return;
    const progress = loadProgress(project.id);
    const currentIndex = progress.currentIndex ?? 0;
    const challenge = project.challenges[currentIndex];
    if (!challenge) return;
    const userInput = normalizeAnswer(elements.challengeAnswer.value);
    const expected = normalizeAnswer(challenge.answer);
    if (!userInput) {
      showFeedback(t("player.feedback.noAnswer"), true);
      return;
    }
    if (userInput !== expected) {
      showFeedback(t("player.feedback.incorrect"), true);
      return;
    }

    const nextIndex = currentIndex + 1;
    if (challenge.successMessage) {
      showFeedback(challenge.successMessage, false);
    } else {
      showFeedback(t("player.feedback.correct"), false);
    }
    const updatedProgress = { currentIndex: nextIndex };
    saveProgress(project.id, updatedProgress);
    elements.challengeAnswer.value = "";
    if (nextIndex >= project.challenges.length) {
      renderReward(project);
    } else {
      renderCurrentChallenge(project, updatedProgress);
    }
  });
}

function bindAutofocus() {
  const observer = new MutationObserver(() => {
    if (!elements.challengeView.classList.contains("hidden")) {
      elements.challengeAnswer.focus();
    }
  });
  observer.observe(elements.challengeView, { attributes: true, attributeFilter: ["class"] });
}

function ensureActiveProject() {
  if (!projects.length) {
    const project = createEmptyProject();
    projects.push(project);
    activeProjectId = project.id;
    persistProjects();
  } else if (!activeProjectId) {
    activeProjectId = projects[0].id;
  }
}

function renderSelectors() {
  if (elements.projectSelector) {
    const previous = elements.projectSelector.value;
    elements.projectSelector.innerHTML = "";
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.id;
      option.textContent = project.title || t("creator.challenge.untitled");
      if (project.id === activeProjectId || project.id === previous) {
        option.selected = true;
      }
      elements.projectSelector.append(option);
    });
  }

  if (elements.playerProjectSelector) {
    const previous = elements.playerProjectSelector.value;
    elements.playerProjectSelector.innerHTML = "";
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = t("player.select.placeholder");
    elements.playerProjectSelector.append(placeholderOption);
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.id;
      option.textContent = project.title || t("creator.challenge.untitled");
      if (project.id === previous) {
        option.selected = true;
      }
      elements.playerProjectSelector.append(option);
    });
  }
}

function renderProjectForm() {
  const project = getActiveProject();
  if (!project) {
    elements.projectTitle.value = "";
    elements.projectAuthor.value = "";
    elements.projectStory.value = "";
    elements.projectReward.value = "";
    elements.challengeList.innerHTML = "";
    if (elements.projectForm) {
      applyTranslationsTo(elements.projectForm);
    }
    return;
  }
  elements.projectTitle.value = project.title || "";
  elements.projectAuthor.value = project.author || "";
  elements.projectStory.value = project.story || "";
  elements.projectReward.value = project.rewardMessage || "";
  renderChallenges(project);
  if (elements.projectForm) {
    applyTranslationsTo(elements.projectForm);
  }
}

function renderChallenges(project) {
  elements.challengeList.innerHTML = "";
  project.challenges.forEach((challenge, index) => {
    const node = elements.challengeTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.index = index;
    const summaryLabel = node.querySelector(".challenge-name");
    const displayTitle = challenge.title || t("creator.challenge.untitled");
    summaryLabel.textContent = t("creator.challenge.summary", {
      index: index + 1,
      title: displayTitle,
    });

    const controlButtons = node.querySelectorAll(".challenge-controls button");
    controlButtons.forEach((button) => {
      button.addEventListener("click", () => handleChallengeAction(project, index, button.dataset.action));
    });

    const titleInput = node.querySelector('input[data-field="title"]');
    const descriptionInput = node.querySelector('textarea[data-field="description"]');
    const answerInput = node.querySelector('input[data-field="answer"]');
    const successInput = node.querySelector('input[data-field="successMessage"]');
    const hintInput = node.querySelector('textarea[data-field="hint"]');

    titleInput.value = challenge.title || "";
    descriptionInput.value = challenge.description || "";
    answerInput.value = challenge.answer || "";
    successInput.value = challenge.successMessage || "";
    hintInput.value = challenge.hint || "";

    titleInput.addEventListener("input", handleChallengeField(project, index, "title"));
    descriptionInput.addEventListener("input", handleChallengeField(project, index, "description"));
    answerInput.addEventListener("input", handleChallengeField(project, index, "answer"));
    successInput.addEventListener("input", handleChallengeField(project, index, "successMessage"));
    hintInput.addEventListener("input", handleChallengeField(project, index, "hint"));

    elements.challengeList.appendChild(node);
  });
  applyTranslationsTo(elements.challengeList);
}

function handleProjectField(field) {
  return (event) => {
    const project = getActiveProject();
    if (!project) return;
    project[field] = event.target.value;
    project.updatedAt = new Date().toISOString();
    persistProjects();
    if (field === "title") {
      renderSelectors();
      updateChallengeHeaders(project);
    }
  };
}

function handleChallengeField(project, index, field) {
  return (event) => {
    project.challenges[index][field] = event.target.value;
    project.updatedAt = new Date().toISOString();
    persistProjects();
    if (field === "title") {
      updateChallengeHeaders(project);
    }
  };
}

function handleChallengeAction(project, index, action) {
  if (action === "delete") {
    const [removed] = project.challenges.splice(index, 1);
    project.updatedAt = new Date().toISOString();
    persistProjects();
    renderChallenges(project);
    const displayTitle = removed?.title || t("creator.challenge.untitled");
    showToast(t("toast.challenge.removed", { title: displayTitle }));
    return;
  }
  if (action === "move-up" && index > 0) {
    swap(project.challenges, index, index - 1);
  }
  if (action === "move-down" && index < project.challenges.length - 1) {
    swap(project.challenges, index, index + 1);
  }
  project.updatedAt = new Date().toISOString();
  persistProjects();
  renderChallenges(project);
}

function updateChallengeHeaders(project) {
  const items = elements.challengeList.querySelectorAll(".challenge-item");
  items.forEach((item, idx) => {
    const challenge = project.challenges[idx];
    const title = challenge?.title || t("creator.challenge.untitled");
    item.querySelector(".challenge-name").textContent = t("creator.challenge.summary", {
      index: idx + 1,
      title,
    });
  });
}

function showPlayerView(project, progress) {
  elements.playerView.classList.remove("hidden");
  elements.playerTitle.textContent = project.title || t("creator.challenge.untitled");
  const total = project.challenges.length;
  const metaParts = [];
  if (project.author && project.author.trim()) {
    metaParts.push(t("player.meta.author", { author: project.author }));
  }
  metaParts.push(t("player.meta.challenges", { count: total }));
  elements.playerMeta.textContent = metaParts.filter(Boolean).join(" · ");
  elements.playerStory.textContent = project.story || "";
  if (!project.story) {
    elements.playerStory.classList.add("hidden");
  } else {
    elements.playerStory.classList.remove("hidden");
  }

  const currentIndex = Math.min(progress.currentIndex ?? 0, total);
  if (currentIndex >= total) {
    renderReward(project);
  } else {
    renderCurrentChallenge(project, progress);
  }
}

function hidePlayerView() {
  elements.playerView.classList.add("hidden");
  elements.challengeView.classList.add("hidden");
  elements.rewardView.classList.add("hidden");
  elements.challengeFeedback.textContent = "";
  if (
    elements.challengeActions &&
    elements.challengeHintButton &&
    elements.challengeHintText
  ) {
    elements.challengeActions.classList.add("hidden");
    elements.challengeHintText.textContent = "";
    elements.challengeHintButton.disabled = false;
    elements.challengeHintButton.dataset.hint = "";
    elements.challengeHintButton.dataset.index = "";
  }
}

function renderCurrentChallenge(project, progress) {
  const index = progress.currentIndex ?? 0;
  const challenge = project.challenges[index];
  if (!challenge) return;
  elements.challengeView.classList.remove("hidden");
  elements.rewardView.classList.add("hidden");
  const total = project.challenges.length;
  const title = challenge.title || t("player.challenge.untitled");
  elements.challengeTitle.textContent = t("player.challenge.title", {
    index: index + 1,
    total,
    title,
  });
  elements.challengeDescription.textContent =
    challenge.description || t("player.challenge.defaultDescription");
  elements.challengeFeedback.textContent = "";
  elements.challengeFeedback.classList.remove("error");
  elements.challengeAnswer.value = "";
  elements.challengeAnswer.placeholder = t("player.challenge.answer.placeholder");
  elements.challengeAnswer.focus();
  if (elements.challengeActions && elements.challengeHintButton && elements.challengeHintText) {
    const hintValue = (challenge.hint || "").trim();
    if (hintValue) {
      elements.challengeActions.classList.remove("hidden");
      elements.challengeHintText.textContent = "";
      elements.challengeHintButton.disabled = false;
      elements.challengeHintButton.dataset.hint = hintValue;
      elements.challengeHintButton.dataset.index = index;
      elements.challengeHintButton.textContent = t("player.challenge.hintButton");
    } else {
      elements.challengeActions.classList.add("hidden");
      elements.challengeHintText.textContent = "";
      elements.challengeHintButton.dataset.hint = "";
      elements.challengeHintButton.dataset.index = "";
    }
  }
}

function renderReward(project) {
  elements.challengeView.classList.add("hidden");
  elements.rewardView.classList.remove("hidden");
  elements.rewardMessage.textContent =
    project.rewardMessage ||
    t("player.reward.default");
  if (elements.challengeActions) {
    elements.challengeActions.classList.add("hidden");
  }
  if (elements.challengeHintText) {
    elements.challengeHintText.textContent = "";
  }
  if (elements.challengeHintButton) {
    elements.challengeHintButton.disabled = false;
    elements.challengeHintButton.dataset.hint = "";
    elements.challengeHintButton.dataset.index = "";
  }
}

function showFeedback(message, isError) {
  elements.challengeFeedback.textContent = message;
  elements.challengeFeedback.classList.toggle("error", Boolean(isError));
}

function showToast(message, options = {}) {
  const { error } = options;
  elements.toast.textContent = message;
  elements.toast.classList.toggle("error", Boolean(error));
  elements.toast.classList.remove("hidden");
  clearTimeout(elements.toast?.timeoutId);
  elements.toast.timeoutId = setTimeout(() => {
    elements.toast.classList.add("hidden");
  }, 2800);
}

function handleStorageEvent(event) {
  if (event.key === STORAGE_KEY) {
    projects = loadProjects();
    ensureActiveProject();
    renderSelectors();
    renderProjectForm();
  }
}

window.addEventListener("storage", handleStorageEvent);

function loadProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map(normalizeProject);
    }
  } catch (error) {
    console.error("No s'han pogut carregar les gimcanes guardades", error);
  }
  return [];
}

function persistProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  renderSelectors();
}

function getActiveProject() {
  return projects.find((project) => project.id === activeProjectId) ?? null;
}

function getPlayerProject() {
  const projectId = elements.playerProjectSelector.value;
  return projects.find((project) => project.id === projectId) ?? null;
}

function createEmptyProject() {
  const timestamp = new Date().toISOString();
  return {
    id: generateId(),
    title: t("creator.project.defaultTitle"),
    author: "",
    story: "",
    rewardMessage: t("player.reward.default"),
    challenges: [],
    createdAt: timestamp,
    updatedAt: timestamp,
    language: currentLanguage,
  };
}

function validateProject(candidate) {
  if (typeof candidate !== "object" || candidate === null) {
    throw new Error("Proyecto inválido.");
  }
  if (!Array.isArray(candidate.challenges)) {
    throw new Error("Faltan los retos.");
  }
  candidate.challenges.forEach((challenge) => {
    if (typeof challenge.title !== "string" || typeof challenge.answer !== "string") {
      throw new Error("Reptes invàlids.");
    }
    if (typeof challenge.successMessage !== "string") {
      challenge.successMessage =
        challenge.successMessage === undefined || challenge.successMessage === null
          ? ""
          : String(challenge.successMessage);
    }
    if (typeof challenge.hint !== "string") {
      challenge.hint =
        challenge.hint === undefined || challenge.hint === null ? "" : String(challenge.hint);
    }
  });
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase();
}

function progressKey(projectId) {
  return `${PROGRESS_KEY_PREFIX}${projectId}`;
}

function loadProgress(projectId) {
  try {
    const raw = localStorage.getItem(progressKey(projectId));
    if (!raw) {
      return { currentIndex: 0 };
    }
    const parsed = JSON.parse(raw);
    if (typeof parsed.currentIndex === "number") {
      return parsed;
    }
  } catch (error) {
    console.error("No s'ha pogut carregar el progrés", error);
  }
  return { currentIndex: 0 };
}

function saveProgress(projectId, progress) {
  localStorage.setItem(progressKey(projectId), JSON.stringify(progress));
}

function generateId() {
  if (crypto?.randomUUID) {
    return crypto.randomUUID();
  }
  return `proj_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function deepClone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function normalizeProject(project) {
  if (!project || typeof project !== "object") {
    return createEmptyProject();
  }
  const languageCandidate =
    typeof project.language === "string" && translations[project.language]
      ? project.language
      : DEFAULT_LANGUAGE;
  project.language = languageCandidate;
  project.title = typeof project.title === "string" ? project.title : "";
  project.author = typeof project.author === "string" ? project.author : "";
  project.story = typeof project.story === "string" ? project.story : "";
  project.rewardMessage =
    typeof project.rewardMessage === "string"
      ? project.rewardMessage
      : project.rewardMessage == null
      ? ""
      : String(project.rewardMessage);
  if (!Array.isArray(project.challenges)) {
    project.challenges = [];
  }
  project.challenges = project.challenges.map((challenge) => {
    const normalizedChallenge = {
      id: challenge.id || generateId(),
      title: typeof challenge.title === "string" ? challenge.title : "",
      description: typeof challenge.description === "string" ? challenge.description : "",
      answer: typeof challenge.answer === "string" ? challenge.answer : "",
      successMessage:
        typeof challenge.successMessage === "string"
          ? challenge.successMessage
          : challenge.successMessage == null
          ? ""
          : String(challenge.successMessage),
      hint:
        typeof challenge.hint === "string"
          ? challenge.hint
          : challenge.hint == null
          ? ""
          : String(challenge.hint),
    };
    return normalizedChallenge;
  });
  return project;
}

function prepareProjectForExport(project) {
  const clone = deepClone(project);
  clone.language = currentLanguage;
  return normalizeProject(clone);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((error) => console.error("SW registration failed", error));
  });
}

function buildStandaloneHtml(project) {
  const normalized = normalizeProject(project);
  const language =
    typeof normalized.language === "string" && translations[normalized.language]
      ? normalized.language
      : DEFAULT_LANGUAGE;
  const safeTitle = escapeHtml(
    normalized.title || translateForLang("player.challenge.untitled", language)
  );
  const metaParts = [];
  if (normalized.author && normalized.author.trim()) {
    metaParts.push(
      translateForLang("player.meta.author", language, {
        author: escapeHtml(normalized.author),
      })
    );
  }
  metaParts.push(
    translateForLang("player.meta.challenges", language, {
      count: normalized.challenges.length,
    })
  );
  const metaText = metaParts.length ? `<p class="meta">${metaParts.join(" · ")}</p>` : "";
  const introSection =
    normalized.story && normalized.story.trim()
      ? `<section class="intro"><h2>${escapeHtml(
          translateForLang("player.intro.title", language)
        )}</h2><p>${newlineToBr(escapeHtml(normalized.story))}</p></section>`
      : "";
  const defaultReward = escapeHtml(translateForLang("player.reward.default", language));
  const rewardMessage =
    normalized.rewardMessage && normalized.rewardMessage.trim()
      ? newlineToBr(escapeHtml(normalized.rewardMessage))
      : defaultReward;
  const sanitizedData = sanitizeForInlineScript(
    JSON.stringify({ ...normalized, language }, null, 2)
  );
  const textBundle = {
    progress: translateForLang("player.progress", language),
    challengeTitle: translateForLang("player.challenge.title", language),
    challengeUntitled: translateForLang("player.challenge.untitled", language),
    challengeDefaultDescription: translateForLang(
      "player.challenge.defaultDescription",
      language
    ),
    hintButton: translateForLang("player.challenge.hintButton", language),
    feedbackNoHint: translateForLang("player.feedback.noHint", language),
    feedbackNoAnswer: translateForLang("player.feedback.noAnswer", language),
    feedbackIncorrect: translateForLang("player.feedback.incorrect", language),
    feedbackCorrect: translateForLang("player.feedback.correct", language),
    progressReset: translateForLang("toast.player.progressReset", language),
    rewardDefault: translateForLang("player.reward.default", language),
    rewardTitle: translateForLang("player.reward.title", language),
    answerPlaceholder: translateForLang("player.challenge.answer.placeholder", language)
  };
  const sanitizedTextBundle = sanitizeForInlineScript(JSON.stringify(textBundle, null, 2));
  const subtitle = escapeHtml(translateForLang("app.subtitle", language));
  const heroTagGamification = escapeHtml(translateForLang("app.hero.gamification", language));
  const heroTagActiveLearning = escapeHtml(translateForLang("app.hero.activeLearning", language));
  const heroTagTeamwork = escapeHtml(translateForLang("app.hero.teamwork", language));
  const startButton = escapeHtml(translateForLang("player.actions.start", language));
  const resetButton = escapeHtml(translateForLang("player.actions.reset", language));
  const answerLabel = escapeHtml(translateForLang("player.challenge.answer.label", language));
  const answerPlaceholder = escapeHtml(
    translateForLang("player.challenge.answer.placeholder", language)
  );
  const submitLabel = escapeHtml(translateForLang("player.challenge.submit", language));
  const hintButtonText = escapeHtml(translateForLang("player.challenge.hintButton", language));
  const rewardTitle = escapeHtml(translateForLang("player.reward.title", language));

  return `<!DOCTYPE html>
<html lang="${language}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${safeTitle}</title>
<link rel="icon" href="data:," />
<style>
:root {
  font-family: "Inter", "Rubik", "Segoe UI", system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #0f172a;
  background: radial-gradient(circle at 10% 20%, #eef2ff 0%, #e9f5fb 40%, #f8f4ff 100%);
}
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.5rem 4rem;
  background: radial-gradient(circle at 10% 20%, #eef2ff 0%, #e9f5fb 40%, #f8f4ff 100%);
  position: relative;
  overflow-x: hidden;
}
body::before,
body::after {
  content: "";
  position: fixed;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.55;
  pointer-events: none;
  z-index: 0;
}
body::before {
  top: -140px;
  right: -120px;
  background: rgba(99, 102, 241, 0.2);
  animation: float 16s ease-in-out infinite;
}
body::after {
  bottom: -160px;
  left: -100px;
  background: rgba(59, 130, 246, 0.16);
  animation: float 18s ease-in-out infinite reverse;
}
main,
header,
section,
article {
  position: relative;
  z-index: 1;
}
main {
  width: min(780px, 100%);
  display: grid;
  gap: 1.75rem;
}
header.top {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.75rem;
  padding: 1.8rem 2rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12);
  backdrop-filter: blur(12px);
}
header.top h1 {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
header.top .subtitle {
  margin-top: 0.45rem;
  color: #4b5563;
  font-weight: 500;
}
header.top .meta,
#progress-label {
  margin: 0.5rem 0 0;
  color: #4b5563;
  font-weight: 500;
}
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}
.hero-tag {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.12);
  color: #7c3aed;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.01em;
  box-shadow: inset 0 0 0 1px rgba(124, 58, 237, 0.25);
}
.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1.5rem;
  padding: 1.9rem;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.12);
  backdrop-filter: blur(10px);
  display: grid;
  gap: 1.35rem;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.02));
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.card:hover::before {
  opacity: 1;
}
.section {
  display: grid;
  gap: 0.9rem;
}
.intro {
  background: rgba(37, 99, 235, 0.08);
  border-radius: 0.95rem;
  padding: 1.1rem 1.25rem;
  line-height: 1.6;
}
label {
  font-weight: 600;
  color: #0f172a;
}
input[type="text"] {
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.95rem;
  border: 1px solid rgba(148, 163, 184, 0.4);
  font: inherit;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  transition: border 0.2s ease, box-shadow 0.2s ease;
}
input[type="text"]:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.18), 0 0 0 3px rgba(37, 99, 235, 0.22);
}
button {
  font: inherit;
  border-radius: 0.95rem;
  padding: 0.75rem 1.45rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.2s ease, filter 0.2s ease;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.18);
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
button.primary {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #ffffff;
}
button.primary:hover {
  filter: brightness(1.05);
}
button.secondary {
  background: rgba(37, 99, 235, 0.16);
  color: #2563eb;
  border-color: rgba(37, 99, 235, 0.25);
  box-shadow: none;
}
button.secondary:hover {
  background: rgba(37, 99, 235, 0.22);
}
button:active {
  transform: translateY(1px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.16);
}
.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}
.hint-actions {
  display: grid;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.08);
  border-radius: 0.9rem;
  padding: 0.85rem 0.95rem;
}
.hint-actions button {
  justify-self: start;
}
.hint-text {
  margin: 0;
  font-style: italic;
  color: #4b5563;
  white-space: pre-wrap;
}
#feedback {
  min-height: 1.25rem;
}
#feedback.error {
  color: #dc2626;
}
#feedback.success {
  color: #16a34a;
}
.hidden {
  display: none !important;
}
@keyframes float {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(28px, 20px, 0);
  }
  75% {
    transform: translate3d(-20px, -24px, 0);
  }
}
@media (max-width: 720px) {
  body {
    padding: 2rem 1.25rem 3.5rem;
  }
  header.top,
  .card {
    padding: 1.5rem 1.35rem;
  }
  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
</head>
<body>
<main>
  <header class="top">
    <h1>${safeTitle}</h1>
    <p class="subtitle">${subtitle}</p>
    ${metaText}
    <p id="progress-label" class="meta"></p>
    <div class="hero-tags">
      <span class="hero-tag">${heroTagGamification}</span>
      <span class="hero-tag">${heroTagActiveLearning}</span>
      <span class="hero-tag">${heroTagTeamwork}</span>
    </div>
  </header>
  <article class="card">
    ${introSection}
    <section id="challenge-section" class="section">
      <h2 id="challenge-title"></h2>
      <p id="challenge-description"></p>
      <form id="challenge-form" autocomplete="off">
        <label for="challenge-answer">${answerLabel}</label>
        <input
          id="challenge-answer"
          type="text"
          placeholder="${answerPlaceholder}"
          autocomplete="one-time-code"
          required
        />
        <div class="form-actions">
          <button type="submit" class="primary">${submitLabel}</button>
          <button type="button" id="reset-progress" class="secondary">${resetButton}</button>
        </div>
      </form>
      <div id="hint-actions" class="hint-actions">
        <button type="button" id="hint-button" class="secondary">${hintButtonText}</button>
        <p id="hint-text" class="hint-text" role="status"></p>
      </div>
      <p id="feedback" role="status"></p>
    </section>
    <section id="reward-section" class="section hidden">
      <h2>${rewardTitle}</h2>
      <p>${rewardMessage}</p>
      <button type="button" id="restart" class="primary">${startButton}</button>
    </section>
  </article>
</main>
<script>
const PROJECT_DATA = ${sanitizedData};
</script>
<script>
const TEXT = ${sanitizedTextBundle};
(() => {
  const project = PROJECT_DATA;
  const total = project.challenges.length;
  const storageKey = "edugincanaStandalone:" + project.id;
  const challengeSection = document.getElementById("challenge-section");
  const rewardSection = document.getElementById("reward-section");
  const challengeTitle = document.getElementById("challenge-title");
  const challengeDescription = document.getElementById("challenge-description");
  const progressLabel = document.getElementById("progress-label");
  const form = document.getElementById("challenge-form");
  const answerInput = document.getElementById("challenge-answer");
  const feedback = document.getElementById("feedback");
  const resetBtn = document.getElementById("reset-progress");
  const restartBtn = document.getElementById("restart");
  const hintActions = document.getElementById("hint-actions");
  const hintButton = document.getElementById("hint-button");
  const hintText = document.getElementById("hint-text");
  hintButton.textContent = TEXT.hintButton;
  answerInput.placeholder = TEXT.answerPlaceholder;
  let index = loadProgress();
  render();

  hintButton.dataset.hint = "";

  hintButton.addEventListener("click", () => {
    const hint = hintButton.dataset.hint;
    if (!hint) {
      showFeedback(TEXT.feedbackNoHint, true);
      return;
    }
    hintText.textContent = hint;
    hintButton.disabled = true;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const challenge = project.challenges[index];
    if (!challenge) return;
    const userAnswer = normalize(answerInput.value);
    if (!userAnswer) {
      showFeedback(TEXT.feedbackNoAnswer, true);
      return;
    }
    if (userAnswer !== normalize(challenge.answer)) {
      showFeedback(TEXT.feedbackIncorrect, true);
      return;
    }
    index += 1;
    saveProgress(index);
    const message =
      challenge.successMessage && challenge.successMessage.trim()
        ? challenge.successMessage
        : TEXT.feedbackCorrect;
    showFeedback(message, false);
    render();
  });

  resetBtn.addEventListener("click", () => {
    index = 0;
    saveProgress(index);
    showFeedback(TEXT.progressReset, false);
    render();
  });

  restartBtn.addEventListener("click", () => {
    index = 0;
    saveProgress(index);
    showFeedback("", false);
    render();
  });

  function render() {
    progressLabel.textContent = format(TEXT.progress, {
      current: Math.min(index, total),
      total,
    });
    if (index >= total) {
      challengeSection.classList.add("hidden");
      rewardSection.classList.remove("hidden");
      answerInput.value = "";
      hintActions.classList.add("hidden");
      hintText.textContent = "";
      hintButton.dataset.hint = "";
      hintButton.disabled = false;
      return;
    }
    challengeSection.classList.remove("hidden");
    rewardSection.classList.add("hidden");
    const current = project.challenges[index];
    const title = current.title || TEXT.challengeUntitled;
    challengeTitle.textContent = format(TEXT.challengeTitle, {
      index: index + 1,
      total,
      title,
    });
    challengeDescription.textContent =
      current.description || TEXT.challengeDefaultDescription;
    answerInput.value = "";
    answerInput.focus();
    hintText.textContent = "";
    const hintValue = current.hint && current.hint.trim();
    if (hintValue) {
      hintActions.classList.remove("hidden");
      hintButton.dataset.hint = hintValue;
      hintButton.disabled = false;
      hintButton.textContent = TEXT.hintButton;
    } else {
      hintActions.classList.add("hidden");
      hintButton.dataset.hint = "";
      hintButton.disabled = false;
    }
  }

  function showFeedback(message, isError) {
    feedback.textContent = message;
    feedback.classList.toggle("error", Boolean(isError));
    feedback.classList.toggle("success", !isError && Boolean(message));
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) {
        return 0;
      }
      const parsed = JSON.parse(raw);
      if (typeof parsed.index === "number") {
        return Math.min(parsed.index, total);
      }
    } catch (error) {
      console.warn("No s'ha pogut carregar el progrés emmagatzemat.", error);
    }
    return 0;
  }

  function saveProgress(value) {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ index: value }));
    } catch (error) {
      console.warn("No s'ha pogut guardar el progrés.", error);
    }
  }

  function normalize(value) {
    return value.trim().toLowerCase();
  }

  function format(template, params) {
    return template.replace(/\{\{(\w+)\}\}/g, (match, token) => {
      return Object.prototype.hasOwnProperty.call(params, token) ? params[token] : match;
    });
  }
})();
</script>
</body>
</html>`;
}

function downloadFile(filename, content, mimeType = "text/plain") {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function slugify(value) {
  return (
    value
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "gincana"
  );
}

function sanitizeForInlineScript(json) {
  return json.replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

function escapeHtml(value) {
  return value
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function newlineToBr(value) {
  return value.replace(/\r?\n/g, "<br>");
}
