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
    "editor.markdownHint": "Pots emprar Markdown (negreta, llistes, enllaços...).",
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
    "editor.markdownHint": "Puedes usar Markdown (negritas, listas, enlaces...).",
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
    "editor.markdownHint": "You can use Markdown (bold, lists, links...).",
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
      renderMarkdown(elements.challengeHintText, hint);
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
  const observer = new MutationObserverfunction downloadFile(filename, content, mimeType = "text/plain") {
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

const MARKDOWN_SAFE_PROTOCOLS = /^(https?:|mailto:|tel:|sms:)/i;

function renderMarkdown(target, markdown) {
  if (!target) return "";
  const html = markdownToHtml(typeof markdown === "string" ? markdown : "");
  if (html) {
    target.innerHTML = html;
  } else {
    target.textContent = "";
  }
  return html;
}

function markdownToHtml(markdown) {
  if (!markdown) {
    return "";
  }
  const normalized = markdown.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n");
  const html = [];
  let inUnorderedList = false;
  let inOrderedList = false;
  let paragraphBuffer = [];

  const closeLists = () => {
    if (inUnorderedList) {
      html.push("</ul>");
      inUnorderedList = false;
    }
    if (inOrderedList) {
      html.push("</ol>");
      inOrderedList = false;
    }
  };

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    const content = paragraphBuffer.join("\n");
    html.push(`<p>${renderInlineMarkdown(content)}</p>`);
    paragraphBuffer = [];
  };

  lines.forEach((line) => {
    const unorderedMatch = line.match(/^\s*([-*])\s+(.+)/);
    const orderedMatch = line.match(/^\s*\d+\.\s+(.+)/);
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    const quoteMatch = line.match(/^\s*>\s+(.*)/);
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      closeLists();
      return;
    }

    if (unorderedMatch) {
      flushParagraph();
      if (!inUnorderedList) {
        closeLists();
        html.push("<ul>");
        inUnorderedList = true;
      }
      html.push(`<li>${renderInlineMarkdown(unorderedMatch[2])}</li>`);
      return;
    }

    if (orderedMatch) {
      flushParagraph();
      if (!inOrderedList) {
        closeLists();
        html.push("<ol>");
        inOrderedList = true;
      }
      html.push(`<li>${renderInlineMarkdown(orderedMatch[1])}</li>`);
      return;
    }

    closeLists();

    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      return;
    }

    if (quoteMatch) {
      flushParagraph();
      html.push(`<blockquote>${renderInlineMarkdown(quoteMatch[1])}</blockquote>`);
      return;
    }

    paragraphBuffer.push(line);
  });

  flushParagraph();
  closeLists();

  return html.join("");
}

function renderInlineMarkdown(text) {
  if (!text) return "";
  let escaped = escapeHtml(text);

  const codeReplacements = [];
  escaped = escaped.replace(/`([^`]+)`/g, (_, code) => {
    const placeholder = `__CODE_BLOCK_${codeReplacements.length}__`;
    codeReplacements.push(`<code>${code}</code>`);
    return placeholder;
  });

  escaped = escaped.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    const safeUrl = sanitizeUrl(url);
    if (!safeUrl) return alt;
    const safeAlt = escapeHtml(alt);
    return `<img src="${safeUrl}" alt="${safeAlt}" loading="lazy" />`;
  });

  escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
    const safeUrl = sanitizeUrl(url);
    const safeLabel = renderInlineMarkdown(label);
    if (!safeUrl) return safeLabel;
    return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeLabel}</a>`;
  });

  escaped = escaped.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/__([^_\n]+)__/g, "<strong>$1</strong>");

  escaped = escaped.replace(/(\s|^)\*(?!\s)([^*\n]+?)\*(?=\s|$)/g, "$1<em>$2</em>");
  escaped = escaped.replace(/(\s|^)_(?!\s)([^_\n]+?)_(?=\s|$)/g, "$1<em>$2</em>");

  escaped = escaped.replace(/~~([^~\n]+)~~/g, "<del>$1</del>");

  escaped = escaped.replace(/\r?\n/g, "<br>");

  codeReplacements.forEach((codeHtml, index) => {
    const placeholder = `__CODE_BLOCK_${index}__`;
    escaped = escaped.replace(placeholder, codeHtml);
  });

  return escaped;
}

function sanitizeUrl(rawUrl) {
  if (!rawUrl) return null;
  const url = rawUrl.trim();
  if (!url) return null;
  if (url.startsWith("#")) return url;
  if (url.startsWith("/") || url.startsWith("./") || url.startsWith("../")) return url;
  if (MARKDOWN_SAFE_PROTOCOLS.test(url)) return url;
  return null;
}

function showFeedback(message, isError = false) {
  if (!elements.challengeFeedback) return;
  const feedbackElement = elements.challengeFeedback;
  feedbackElement.classList.toggle("error", Boolean(isError));
  if (!message) {
    feedbackElement.textContent = "";
    return;
  }
  renderMarkdown(feedbackElement, message);
}
