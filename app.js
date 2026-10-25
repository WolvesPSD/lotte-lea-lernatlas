(() => {
  'use strict';
  const catalog = window.LOTTE_CATALOG;
  const lotteKey = 'lotte-progress-v1';
  const legacyLotteKey = 'lotte-lea-local-v1'; // Existing untagged state belonged only to Lotte.
  const params = new URLSearchParams(window.location.search);
  const preview = params.get('preview') === '1';
  let activeProfile = params.get('profile') === 'lea' ? 'lea' : 'lotte';
  const availableTopics = catalog.topics.filter(topic => topic.released || preview);
  const topicById = new Map(availableTopics.map(topic => [topic.id, topic]));
  const subjectById = new Map(catalog.subjects.map(subject => [subject.id, subject]));
  const levelLabels = {
    'grade7': 'Klasse 7 · Unterrichtsstand offen',
    'grade78-flex': 'Klasse 7/8 · Unterrichtsfolge offen',
    'grade8-outlook': 'Ausblick Klasse 8 · freiwillig',
    'grade6-bridge': 'MNT-Ende 6 · freiwillige Klasse-7-Brücke',
    'additional-unclear': 'Freiwillig · Lehrplan 2026/27 ungeklärt'
  };
  const isGrade6Review = topic => topic.releaseEvidence?.gradeBand === '6-Grundlage, 7-Wiederholung' || topic.levelStatus === 'grade6-bridge';
  const levelLabel = topic => topic.levelStatus === 'grade6-bridge'
    ? levelLabels['grade6-bridge']
    : isGrade6Review(topic)
    ? 'Wiederholung Klasse 6 · freiwillig'
    : levelLabels[topic.levelStatus] || 'Jahrgangsbezug offen';
  const mbiYearNote = topic => topic.subjectId === 'mbi' && topic.levelStatus === 'grade78-flex'
    ? 'MBI ist in Klasse 7 eingeführt. Dieses Teilziel hat den Zielstand Ende Klasse 8; welche Teile jetzt im Unterricht vorkommen, ist unbekannt.'
    : '';
  const matchesStage = (topic, stage) => stage === 'all'
    || (stage === 'grade7-and-flex' ? topic.levelStatus === 'grade7' || (topic.levelStatus === 'grade78-flex' && !isGrade6Review(topic))
    : stage === 'grade6-review' ? isGrade6Review(topic)
      : topic.levelStatus === stage && (stage !== 'grade78-flex' || !isGrade6Review(topic)));
  const $ = selector => document.querySelector(selector);
  const create = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value != null) el.textContent = String(value);
    return el;
  };
  const appendText = (parent, tag, className, value) => {
    const el = create(tag, className, value);
    parent.append(el);
    return el;
  };
  function appendSourceCards(parent, cards, forPrint = false) {
    const group = create('section', forPrint ? 'print-source-cards' : 'learning-source-cards');
    appendText(group, 'h3', '', 'Quellenkarten');
    for (const card of cards) {
      const item = create('article', 'learning-source-card');
      appendText(item, 'h4', '', card.title);
      appendText(item, 'p', '', card.text);
      const link = create('a', 'source-link', `${card.sourceLabel} ↗`);
      link.href = card.sourceUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      item.append(link);
      if (card.additionalSourceUrl) {
        const extra = create('a', 'source-link', `${card.additionalSourceLabel} ↗`);
        extra.href = card.additionalSourceUrl;
        extra.target = '_blank';
        extra.rel = 'noopener noreferrer';
        item.append(extra);
      }
      appendText(item, 'p', 'muted', card.sourceNote);
      if (forPrint) appendText(item, 'p', 'print-source-url', card.sourceUrl);
      if (forPrint && card.additionalSourceUrl) appendText(item, 'p', 'print-source-url', card.additionalSourceUrl);
      group.append(item);
    }
    parent.append(group);
  }
  const initial = { selected: [], active: null, answers: {} };
  let state = load();
  $('#release-status').textContent = preview
    ? 'Interner Prüfmodus · diese Ansicht kann ungeprüfte Aufgaben enthalten.'
    : availableTopics.length
      ? `${availableTopics.length} intern geprüfte Übungsthemen verfügbar · Die Jahresabdeckung ist noch im Aufbau.`
      : 'Noch keine intern geprüften Übungsmodule. Interne Prüfaufgaben sind in dieser Ansicht gesperrt.';
  $('#choose-description').textContent = preview
    ? 'Interner Prüfmodus: Zusätzlich sind gesperrte Entwürfe zur Technik- und Fachprüfung sichtbar.'
    : availableTopics.length
      ? 'Wähle, was ihr gerade macht oder was du zusätzlich üben möchtest. Jahrgangs- und Quellenstand stehen bei jedem Thema.'
      : 'Intern geprüfte Übungsmodule werden hier nach Prüfung auswählbar.';
  if (!preview && availableTopics.length === 0) $('#home-lead').textContent = 'Die Übungsmodule werden intern geprüft. Bis zur Freigabe sind hier keine Lernaufgaben verfügbar.';
  const lotteReleaseStatus = $('#release-status').textContent;

  function load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(lotteKey) ?? localStorage.getItem(legacyLotteKey));
      if (!parsed || parsed.version !== 1) return structuredClone(initial);
      if (parsed.profile !== undefined && parsed.profile !== 'lotte') return structuredClone(initial);
      const selected = Array.isArray(parsed.selected) ? [...new Set(parsed.selected.filter(id => topicById.has(id)))] : [];
      const active = selected.includes(parsed.active) ? parsed.active : selected[0] || null;
      const answers = parsed.answers && typeof parsed.answers === 'object' && !Array.isArray(parsed.answers) ? parsed.answers : {};
      return { selected, active, answers };
    } catch { return structuredClone(initial); }
  }
  function save() {
    try { localStorage.setItem(lotteKey, JSON.stringify({ version: 1, profile: 'lotte', ...state })); }
    catch { const status = $('#storage-status'); if (status) status.textContent = 'Speichern ist in diesem Browser gerade nicht möglich.'; }
    for (const section of document.querySelectorAll('.auto-check-card[data-topic-id]')) {
      const topic = topicById.get(section.dataset.topicId);
      if (topic) section.hidden = autoCheckLocked(topic);
    }
    for (const tab of document.querySelectorAll('.topic-tab[data-topic-id]')) {
      const topic = topicById.get(tab.dataset.topicId);
      if (!topic) continue;
      const answered = topic.tasks.filter(task => String(state.answers[task.id] || '').trim()).length;
      const progress = tab.querySelector('small');
      if (progress) progress.textContent = topic.practiceBeforeLastTask
        ? `${answered} von ${topic.tasks.length} Notizfeldern · Sprechen separat`
        : `${answered} von ${topic.tasks.length} beantwortet`;
    }
  }
  function button(label, callback, className = '') {
    const el = create('button', className, label);
    el.type = 'button';
    el.addEventListener('click', callback);
    return el;
  }
  const voiceGuideNames = { home: 'Start', choose: 'Themen', work: 'Lernen', adult: 'Erwachsenenbereich', feedback: 'Rückmeldung', backup: 'Sicherung' };
  const voiceGuideAudio = new Audio();
  voiceGuideAudio.preload = 'none';
  let activeVoiceGuide = null;
  const overviewGuideButton = $('#voice-guide-overview');
  const areaGuideButton = $('#voice-guide-area');
  const backupGuideButton = create('button', 'inline-voice-guide', 'Sicherung erklären');
  backupGuideButton.id = 'voice-guide-backup';
  backupGuideButton.type = 'button';
  backupGuideButton.dataset.voiceGuide = 'backup';
  backupGuideButton.setAttribute('aria-pressed', 'false');
  $('#backup-heading').after(backupGuideButton);
  const voiceGuideStatus = $('#voice-guide-status');
  function updateVoiceGuideButtons() {
    overviewGuideButton.textContent = activeVoiceGuide === 'overview' ? 'Einführung stoppen' : 'Einführung hören';
    overviewGuideButton.setAttribute('aria-pressed', String(activeVoiceGuide === 'overview'));
    const area = areaGuideButton.dataset.voiceGuide;
    areaGuideButton.textContent = activeVoiceGuide === area ? 'Erklärung stoppen' : `${voiceGuideNames[area]} erklären`;
    areaGuideButton.setAttribute('aria-pressed', String(activeVoiceGuide === area));
    backupGuideButton.textContent = activeVoiceGuide === 'backup' ? 'Erklärung stoppen' : 'Sicherung erklären';
    backupGuideButton.setAttribute('aria-pressed', String(activeVoiceGuide === 'backup'));
  }
  function stopVoiceGuide(clearStatus = true) {
    voiceGuideAudio.pause();
    voiceGuideAudio.removeAttribute('src');
    voiceGuideAudio.load();
    activeVoiceGuide = null;
    if (clearStatus) voiceGuideStatus.textContent = '';
    updateVoiceGuideButtons();
  }
  async function toggleVoiceGuide(key) {
    if (activeVoiceGuide === key) { stopVoiceGuide(); return; }
    stopVoiceGuide();
    if (key !== 'overview' && !Object.prototype.hasOwnProperty.call(voiceGuideNames, key)) return;
    activeVoiceGuide = key;
    voiceGuideAudio.src = `assets/de-guide-${key}.wav`;
    voiceGuideStatus.textContent = 'Hörhilfe wird abgespielt.';
    updateVoiceGuideButtons();
    try { await voiceGuideAudio.play(); }
    catch {
      if (activeVoiceGuide === key) {
        stopVoiceGuide(false);
        voiceGuideStatus.textContent = 'Hörhilfe konnte nicht gestartet werden.';
      }
    }
  }
  for (const control of [overviewGuideButton, areaGuideButton, backupGuideButton]) {
    control.addEventListener('click', () => toggleVoiceGuide(control.dataset.voiceGuide));
  }
  voiceGuideAudio.addEventListener('ended', () => stopVoiceGuide());
  window.addEventListener('pagehide', () => stopVoiceGuide());
  function show(view) {
    stopVoiceGuide();
    if (activeProfile === 'lea') view = 'lea';
    if (view === 'lea' && activeProfile !== 'lea') view = 'home';
    overviewGuideButton.hidden = view !== 'home';
    areaGuideButton.hidden = !['home', 'choose', 'work', 'adult', 'feedback'].includes(view);
    if (!areaGuideButton.hidden) areaGuideButton.dataset.voiceGuide = view;
    updateVoiceGuideButtons();
    document.body.dataset.view = view;
    for (const el of document.querySelectorAll('.view')) el.hidden = el.id !== `${view}-view`;
    for (const el of document.querySelectorAll('[data-nav]')) el.setAttribute('aria-current', el.dataset.nav === view ? 'page' : 'false');
    if (view === 'home') renderHome();
    if (view === 'choose') renderChoose();
    if (view === 'work') renderWork();
    if (view === 'adult') renderAdult();
    window.scrollTo({ top: 0, behavior: 'instant' });
    const heading = $(`#${view}-view h1`);
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
  }
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => show(el.dataset.nav)));
  function selectProfile(profile) {
    activeProfile = profile;
    document.body.dataset.profile = profile;
    $('#release-status').textContent = profile === 'lea' ? 'Leas eigener Bereich ist vorbereitet · noch keine Aufgaben freigegeben.' : lotteReleaseStatus;
    for (const control of document.querySelectorAll('[data-profile]')) {
      if (!control.classList.contains('profile-chip')) continue;
      control.classList.toggle('active', control.dataset.profile === profile);
      control.classList.toggle('later', control.dataset.profile !== profile);
      control.setAttribute('aria-pressed', String(control.dataset.profile === profile));
    }
    const url = new URL(window.location.href);
    if (profile === 'lea') url.searchParams.set('profile', 'lea');
    else url.searchParams.delete('profile');
    history.replaceState(null, '', url);
    $('#print-surface').replaceChildren();
    delete document.body.dataset.printMode;
    if (profile === 'lea') {
      $('#topic-list').replaceChildren();
      $('#subject-list').replaceChildren();
      $('#topic-tabs').replaceChildren();
      $('#work-content').replaceChildren();
      $('#adult-content').replaceChildren();
      $('#parent-source-list').replaceChildren();
    }
    show(profile === 'lea' ? 'lea' : 'home');
  }
  document.querySelectorAll('[data-profile]').forEach(el => el.addEventListener('click', () => selectProfile(el.dataset.profile)));
  $('.source-jump').addEventListener('click', () => { $('.source-panel').open = true; $('#sources-heading').scrollIntoView({ block: 'start' }); });
  const adultJumpTargets = { sources: '#sources-heading', print: '#print-children', backup: '#backup-heading' };
  document.querySelectorAll('[data-adult-jump]').forEach(control => control.addEventListener('click', () => {
    const target = $(adultJumpTargets[control.dataset.adultJump]);
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: 'start' });
  }));

  function renderHome() {
    const selectedTopics = state.selected.map(id => topicById.get(id)).filter(Boolean);
    $('#print-home-child span').textContent = state.active
      ? 'Aktuelles Thema ohne Lösungen drucken →'
      : 'Thema wählen, dann Arbeitsblatt drucken →';
    const host = $('#home-topic-cards'); host.replaceChildren();
    $('#home-lead').textContent = selectedTopics.length
      ? `${selectedTopics.length} ${selectedTopics.length === 1 ? 'Thema' : 'Themen'} aus ${new Set(selectedTopics.map(topic => topic.subjectId)).size} ${new Set(selectedTopics.map(topic => topic.subjectId)).size === 1 ? 'Fach' : 'Fächern'} ausgewählt. Du kannst die Auswahl jederzeit ändern.`
      : 'Wähle aus, was du heute üben möchtest. Themen aus mehreren Fächern passen in eine Lerneinheit.';
    if (selectedTopics.length === 0) {
      const empty = create('div', 'home-topic-empty');
      appendText(empty, 'h3', '', 'Noch keine Themen ausgewählt');
      appendText(empty, 'p', '', 'Öffne die Fachübersicht und stelle deine Lerneinheit selbst zusammen.');
      empty.append(button('Themen wählen →', () => show('choose'), 'secondary'));
      host.append(empty);
    }
    const heroAction = $('#home-view .hero [data-nav="choose"]');
    heroAction.classList.toggle('primary', selectedTopics.length === 0);
    heroAction.classList.toggle('secondary', selectedTopics.length > 0);
    heroAction.textContent = selectedTopics.length ? 'Auswahl anpassen →' : 'Themen auswählen →';
    for (const topic of selectedTopics) {
      const subject = subjectById.get(topic.subjectId);
      const answered = topic.tasks.filter(task => String(state.answers[task.id] || '').trim()).length;
      const card = create('article', 'home-topic-card'); card.dataset.subjectId = topic.subjectId;
      const top = create('div', 'home-topic-top');
      appendText(top, 'span', 'home-subject-mark', subject.name.slice(0, 1));
      appendText(top, 'strong', '', subject.name);
      appendText(top, 'span', 'home-topic-fraction', topic.practiceBeforeLastTask ? `${answered}/${topic.tasks.length} Notizen` : `${answered}/${topic.tasks.length}`);
      card.append(top);
      const bar = create('div', 'home-topic-bar');
      bar.setAttribute('role', 'progressbar'); bar.setAttribute('aria-label', `${subject.name}: ${topic.practiceBeforeLastTask ? 'ausgefüllte Notizfelder; mündliche Leistung separat beobachten' : 'beantwortete Aufgaben'}`);
      bar.setAttribute('aria-valuenow', String(answered)); bar.setAttribute('aria-valuemin', '0'); bar.setAttribute('aria-valuemax', String(topic.tasks.length));
      const fill = create('span'); fill.style.width = `${Math.round(answered / topic.tasks.length * 100)}%`; bar.append(fill); card.append(bar);
      appendText(card, 'h3', '', topic.title);
      appendText(card, 'p', 'home-topic-level', levelLabel(topic));
      appendText(card, 'p', 'home-topic-teaser', `${topic.practiceBeforeLastTask ? `${topic.tasks.length} Notizfelder und getrennte Sprechpraxis` : `${topic.tasks.length} Aufgabe${topic.tasks.length === 1 ? '' : 'n'}`} · ${topic.scope}`);
      card.append(button(answered ? 'Weiterlernen →' : 'Thema öffnen →', () => { state.active = topic.id; save(); show('work'); }, 'home-topic-open'));
      host.append(card);
    }
    const total = selectedTopics.reduce((sum, topic) => sum + topic.tasks.length, 0);
    const answeredTotal = selectedTopics.reduce((sum, topic) => sum + topic.tasks.filter(task => String(state.answers[task.id] || '').trim()).length, 0);
    $('#home-progress-count').textContent = total ? `${answeredTotal}/${total}` : '–';
    $('#home-progress-ring').querySelector('span').textContent = total ? 'Aufgaben beantwortet' : 'Thema wählen';
    $('#home-progress-ring').style.setProperty('--progress', total ? `${Math.round(answeredTotal / total * 100)}%` : '0%');
    $('#home-progress-text').textContent = total
      ? `${total - answeredTotal} Aufgabe${total - answeredTotal === 1 ? '' : 'n'} in deiner Auswahl noch offen. Die Zahl zählt nur Textfelder; offene Texte prüfst du mit den Kriterien.${selectedTopics.some(topic => topic.practiceBeforeLastTask) ? ' Mündliches Sprechen wird hier nicht als erledigt gezählt oder automatisch bewertet.' : ''}`
      : 'Wähle zuerst ein Thema. Danach siehst du hier deine beantworteten Aufgaben.';
    const nextTopic = selectedTopics.find(topic => topic.tasks.some(task => !String(state.answers[task.id] || '').trim())) || selectedTopics[0];
    const nextTask = nextTopic?.tasks.find(task => !String(state.answers[task.id] || '').trim());
    $('#home-next-text').textContent = !nextTopic
      ? 'Nach deiner Themenwahl erscheint hier eine Aufgabe aus deiner eigenen Auswahl.'
      : nextTask
        ? `${subjectById.get(nextTopic.subjectId).name} · ${nextTopic.title}: ${nextTask.prompt}`
        : `Alle gewählten Textfelder haben eine Antwort. Vergleiche offene Antworten mit den Kriterien oder wähle weitere Themen.${selectedTopics.some(topic => topic.practiceBeforeLastTask) ? ' Eine mündliche Übung ist dadurch noch nicht nachgewiesen.' : ''}`;
    $('#home-next-button').textContent = selectedTopics.length ? 'Zum Lernen →' : 'Themen wählen →';
    $('#home-next-button').hidden = selectedTopics.length === 0;
    $('#home-next-button').classList.toggle('primary', false);
    $('#home-next-button').classList.toggle('secondary', true);
    $('#home-progress-button').hidden = selectedTopics.length === 0;
    $('#home-next-button').onclick = () => {
      if (!nextTopic) { show('choose'); return; }
      state.active = nextTopic.id; save(); show('work');
    };
  }
  $('#home-progress-button').addEventListener('click', () => show('work'));

  let openGroupsBeforeFilter = null;
  function applyTopicSearch() {
    const query = $('#topic-search-input').value.trim().toLocaleLowerCase('de');
    const stage = $('#topic-stage-filter').value;
    const filtering = !!query || stage !== 'all';
    const groups = [...document.querySelectorAll('#topic-list .subject-group')];
    if (filtering && openGroupsBeforeFilter === null) openGroupsBeforeFilter = new Map(groups.map(group => [group.dataset.subjectId, group.open]));
    let matches = 0;
    for (const group of groups) {
      const subject = subjectById.get(group.dataset.subjectId);
      let groupMatches = 0;
      for (const card of group.querySelectorAll('.topic-card')) {
        const topic = topicById.get(card.querySelector('input').value);
        const haystack = [subject.name, topic.title, topic.scope, levelLabel(topic)].join(' ').toLocaleLowerCase('de');
        card.hidden = (!!query && !haystack.includes(query)) || !matchesStage(topic, stage);
        if (!card.hidden) groupMatches++;
      }
      group.hidden = filtering && groupMatches === 0;
      if (filtering && groupMatches && (query || stage !== 'grade7-and-flex')) group.open = true;
      matches += groupMatches;
    }
    if (!filtering && openGroupsBeforeFilter !== null) {
      for (const group of groups) group.open = openGroupsBeforeFilter.get(group.dataset.subjectId) || false;
      openGroupsBeforeFilter = null;
    }
    $('#topic-search-clear').disabled = !query;
    $('#topic-search-status').textContent = filtering
      ? `${matches} von ${availableTopics.length} Themen gefunden. Deine Auswahl bleibt erhalten.`
      : `${availableTopics.length} Themen in ${groups.filter(group => group.querySelector('.topic-card')).length} Fächern verfügbar.`;
    const stageNote = $('#topic-stage-note');
    stageNote.hidden = stage !== 'grade7-and-flex';
    if (!stageNote.hidden) stageNote.textContent = 'Startauswahl: Themen für Klasse 7 und freiwillige Themen mit Zielstand 7/8. Welche 7/8-Themen Lotte gerade in der Schule behandelt, ist offen. Für weitere Themen „Alle Angebote“ wählen.';
  }
  $('#topic-search-input').addEventListener('input', applyTopicSearch);
  $('#topic-stage-filter').addEventListener('change', applyTopicSearch);
  $('#topic-search-clear').addEventListener('click', () => { $('#topic-search-input').value = ''; applyTopicSearch(); $('#topic-search-input').focus(); });
  function renderChoose() {
    const host = $('#topic-list'); host.replaceChildren();
    if (availableTopics.length === 0) appendText(host, 'p', 'empty-state', 'Noch keine intern geprüften Themen. Der Jahreskatalog wird geprüft.');
    const orderedSubjects = [...catalog.subjects].sort((a, b) => {
      const countA = availableTopics.filter(topic => topic.subjectId === a.id).length;
      const countB = availableTopics.filter(topic => topic.subjectId === b.id).length;
      return Number(countB > 0) - Number(countA > 0) || a.name.localeCompare(b.name, 'de');
    });
    for (const subject of orderedSubjects) {
      const topics = availableTopics.filter(topic => topic.subjectId === subject.id);
      const group = create('details', 'subject-group'); group.dataset.subjectId = subject.id;
      group.open = topics.some(topic => state.selected.includes(topic.id));
      const summary = create('summary', 'subject-group-heading');
      appendText(summary, 'strong', '', subject.name);
      appendText(summary, 'span', 'subject-group-count', '');
      group.append(summary);
      if (topics.length === 0) appendText(group, 'p', 'subject-group-empty', subject.availabilityReason || 'Noch keine geprüften Aufgaben für dieses Fach.');
      else {
        const grid = create('div', 'topic-grid');
        for (const topic of topics) {
          const card = create('div', 'topic-card');
          const choice = create('label', 'topic-card-choice');
          const checkbox = create('input'); checkbox.type = 'checkbox'; checkbox.value = topic.id; checkbox.checked = state.selected.includes(topic.id);
          checkbox.addEventListener('change', () => {
            state.selected = checkbox.checked ? [...state.selected, topic.id] : state.selected.filter(id => id !== topic.id);
            if (!state.selected.includes(state.active)) state.active = state.selected[0] || null;
            save(); updateSelection();
          });
          choice.append(checkbox);
          const body = create('span', 'topic-card-body');
          appendText(body, 'strong', '', topic.title);
          appendText(body, 'span', 'level-tag', levelLabel(topic));
          appendText(body, 'span', 'topic-review-status', topic.released ? 'Intern geprüft' : 'Nur Prüfmodus · noch nicht freigegeben');
          appendText(body, 'span', 'muted topic-short-reason', topic.scope);
          choice.append(body); card.append(choice);
          const detail = create('details', 'topic-card-details');
          appendText(detail, 'summary', '', 'Begründung und Voraussetzung');
          appendText(detail, 'p', '', topic.scope);
          if (topic.prerequisite) appendText(detail, 'p', '', topic.prerequisite);
          card.append(detail); grid.append(card);
        }
        group.append(grid);
      }
      host.append(group);
    }
    const list = $('#subject-list'); list.replaceChildren();
    for (const subject of catalog.subjects) {
      const row = create('div', 'subject-row');
      appendText(row, 'strong', '', subject.name);
      appendText(row, 'span', '', `Lehrplanstand ${subject.plan} · Bezug ${subject.scope}`);
      appendText(row, 'span', '', `${availableTopics.filter(topic => topic.subjectId === subject.id).length} auswählbare Module · ${catalog.topics.filter(topic => topic.subjectId === subject.id && topic.released).length} intern geprüft`);
      list.append(row);
    }
    updateSelection();
    applyTopicSearch();
  }
  function updateSelection() {
    $('#selection-summary').textContent = state.selected.length === 0 ? 'Noch kein Thema ausgewählt.' : `${state.selected.length} ${state.selected.length === 1 ? 'Thema' : 'Themen'} ausgewählt`;
    const parts = [];
    for (const subject of [...catalog.subjects].sort((a, b) => a.name.localeCompare(b.name, 'de'))) {
      const count = state.selected.filter(id => topicById.get(id)?.subjectId === subject.id).length;
      if (count) parts.push(`${subject.name}: ${count}`);
    }
    $('#selection-by-subject').textContent = parts.join(' · ');
    const route = $('#selected-route-list'); route.replaceChildren();
    for (const id of state.selected) {
      const topic = topicById.get(id);
      if (!topic) continue;
      const item = create('li', 'selected-route-item');
      appendText(item, 'strong', '', subjectById.get(topic.subjectId)?.name || topic.subjectId);
      appendText(item, 'span', '', topic.title);
      route.append(item);
    }
    for (const group of document.querySelectorAll('.subject-group')) {
      const subject = subjectById.get(group.dataset.subjectId);
      const total = availableTopics.filter(topic => topic.subjectId === subject.id).length;
      const chosen = state.selected.filter(id => topicById.get(id)?.subjectId === subject.id).length;
      group.querySelector('.subject-group-count').textContent = total
        ? `${total} ${total === 1 ? 'Thema' : 'Themen'} · ${chosen} gewählt`
        : subject.availabilityLabel || 'Noch keine geprüften Aufgaben';
    }
    $('#start-learning').disabled = state.selected.length === 0;
    $('#choose-view').classList.toggle('has-selection', state.selected.length > 0);
  }
  $('#start-learning').addEventListener('click', () => { state.active ||= state.selected[0]; save(); show('work'); });
  $('#switch-topic').addEventListener('click', () => {
    const expanded = $('#switch-topic').getAttribute('aria-expanded') === 'true';
    $('#switch-topic').setAttribute('aria-expanded', String(!expanded));
    $('#switch-topic').textContent = `Thema wechseln · ${state.selected.length} Themen ausgewählt ${expanded ? '▾' : '▴'}`;
    $('#topic-tabs').classList.toggle('open', !expanded);
  });

  function taskResult(task, value) {
    if (!value || !String(value).trim()) return { status: 'empty', label: 'Noch nicht beantwortet.' };
    if (task.kind === 'reflection') return { status: 'manual', label: task.manualBookReview ? 'Offene Buchantwort: Die App kennt deine Ausgabe nicht und kann den Inhalt nicht bewerten. Prüfe die Stellen im Buch mit einer erwachsenen Person.' : task.adultOnlySolution ? 'Offene Antwort: Besprecht die Sachlösung nach deiner eigenen Bearbeitung im Erwachsenenbereich. Keine automatische Bewertung.' : 'Offene Antwort: Vergleiche mit Musterlösung und Kriterien. Keine automatische Bewertung.' };
    if (task.kind === 'decimal') {
      const normalized = String(value).trim().replace(/\u2212/g, '-').replace(',', '.');
      if (!/^[+-]?\d+(?:\.\d{1,2})?$/.test(normalized)) return { status: 'invalid', label: 'Bitte einen Eurobetrag mit höchstens zwei Nachkommastellen eingeben.' };
      return Math.abs(Number(normalized) - task.correct) < 1e-9
        ? { status: 'correct', label: 'Richtig.' }
        : { status: 'wrong', label: `Noch nicht richtig. Richtige Lösung: ${task.correctLabel}.` };
    }
    if (task.kind === 'integer') {
      const normalized = String(value).trim().replace(/\u2212/g, '-');
      if (!/^[+-]?\d+$/.test(normalized)) return { status: 'invalid', label: 'Bitte eine ganze Zahl eingeben; diese Eingabe kann nicht sicher geprüft werden.' };
      return Number(normalized) === task.correct
        ? { status: 'correct', label: 'Richtig.' }
        : { status: 'wrong', label: `Noch nicht richtig. Richtige Lösung: ${task.correct}.` };
    }
    return value === task.correct
      ? { status: 'correct', label: 'Richtig.' }
      : { status: 'wrong', label: `Noch nicht richtig. Richtige Lösung: ${task.correct}.` };
  }

  function renderWork() {
    const empty = state.selected.length === 0;
    $('#work-empty').hidden = !empty; $('#work-layout').hidden = empty;
    if (empty) return;
    state.active ||= state.selected[0];
    const tabs = $('#topic-tabs'); tabs.replaceChildren();
    const route = $('.work-route');
    route.querySelector('.route-heading')?.remove();
    route.prepend(create('p', 'route-heading', 'Deine Lernroute'));
    for (const id of state.selected) {
      const topic = topicById.get(id);
      const tab = button('', () => { state.active = id; save(); renderWork(); });
      const answered = topic.tasks.filter(task => String(state.answers[task.id] || '').trim()).length;
      appendText(tab, 'strong', '', subjectById.get(topic.subjectId).name);
      appendText(tab, 'span', '', topic.title);
      appendText(tab, 'small', '', topic.practiceBeforeLastTask
        ? `${answered} von ${topic.tasks.length} Notizfeldern · Sprechen separat`
        : `${answered} von ${topic.tasks.length} beantwortet`);
      tab.dataset.topicId = id;
      tab.className = 'topic-tab'; tab.setAttribute('aria-current', id === state.active ? 'true' : 'false'); tabs.append(tab);
    }
    $('#switch-topic').hidden = state.selected.length < 2;
    $('#switch-topic').setAttribute('aria-expanded', 'false');
    $('#switch-topic').textContent = `Thema wechseln · ${state.selected.length} Themen ausgewählt ▾`;
    tabs.classList.remove('open');
    const topic = topicById.get(state.active); const host = $('#work-content'); host.replaceChildren();
    const intro = create('div', 'work-intro');
    appendText(intro, 'p', 'eyebrow', subjectById.get(topic.subjectId).name);
    appendText(intro, 'h2', '', topic.title);
    appendText(intro, 'p', 'level-tag', levelLabel(topic));
    if (mbiYearNote(topic)) appendText(intro, 'p', 'muted', mbiYearNote(topic));
    if (topic.introduction.length + (topic.passage?.length || 0) > 550) {
      intro.append(button('Zu Aufgabe 1 ↓', () => {
        const heading = host.querySelector('.task-card h3');
        if (!heading) return;
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
        heading.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'work-jump-task'));
    }
    if (topic.prerequisite) appendText(intro, 'p', 'muted', topic.prerequisite);
    appendText(intro, 'p', '', topic.introduction);
    if (topic.passage) appendText(intro, 'blockquote', 'reading-passage', topic.passage);
    if (topic.sourceCards) appendSourceCards(intro, topic.sourceCards);
    if (topic.tasks.some(task => task.helpAfterAttempt)) appendText(intro, 'p', 'learning-step-note', 'Erst selbst antworten und „Antwort prüfen“ wählen. Danach kannst du die freiwillige Formenhilfe öffnen.');
    if (topic.stagedReading) appendText(intro, 'p', 'muted', `Zuerst nur der Titel: ${topic.stagedReading.title}. Der Lesetext erscheint nach deiner ersten Vermutung.`);
    if (topic.stagedPrompt) appendText(intro, 'p', 'muted', 'Schreibe zuerst deine eigene Vermutung auf. Der kurze Kontext erscheint erst, wenn du sie festgehalten hast.');
    if (topic.diagram && !topic.diagram.afterFirstTask) {
      const figure = create('figure', 'learning-diagram');
      const img = create('img'); img.src = topic.diagram.path; img.alt = topic.diagram.alt;
      figure.append(img); appendText(figure, 'figcaption', '', topic.diagram.caption);
      intro.append(figure);
    }
    if (topic.lab) {
      const lab = create('section', 'lab-card');
      appendText(lab, 'h3', '', topic.lab.title);
      appendText(lab, 'p', '', topic.lab.description);
      const link = create('a', 'lab-open', `${topic.lab.title} in neuem Tab öffnen ↗`);
      link.href = topic.lab.path; link.target = '_blank'; link.rel = 'noopener noreferrer';
      lab.append(link); intro.append(lab);
    }
    if (topic.audio) {
      const audioCard = create('section', 'audio-card');
      appendText(audioCard, 'h3', '', topic.audio.title);
      appendText(audioCard, 'p', '', topic.audio.childNote);
      const player = create('audio');
      player.controls = true; player.preload = 'metadata'; player.src = topic.audio.path;
      player.setAttribute('aria-label', topic.audio.title);
      audioCard.append(player);
      appendText(audioCard, 'p', 'muted', 'Falls der Ton nicht startet, ist die Aufgabe als Hörverstehen nicht beurteilbar.');
      intro.append(audioCard);
    }
    if (topic.liveReading) {
      const listeningCard = create('section', 'live-reading-card');
      appendText(listeningCard, 'h3', '', topic.liveReading.title);
      appendText(listeningCard, 'p', '', topic.liveReading.childNote);
      intro.append(listeningCard);
    }
    if (topic.reading) {
      const readingCard = create('section', 'reading-card');
      appendText(readingCard, 'h3', '', topic.reading.title);
      appendText(readingCard, 'p', '', topic.reading.childNote);
      const link = create('a', 'reading-open', `${topic.reading.linkLabel} ↗`);
      link.href = topic.reading.publicUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
      readingCard.append(link); intro.append(readingCard);
    }
    host.append(intro);
    if (topic.firstTaskGate) {
      const first = topic.tasks[0];
      const firstMarker = `${first.id}-erste-stufe-gezeigt`;
      const transferMarker = `${first.id}-update-gezeigt`;
      const firstShown = state.answers[firstMarker] === 'ja';
      const transferShown = state.answers[transferMarker] === 'ja';
      const firstCard = renderTask(topic, first, 0);
      const firstInput = firstCard.querySelector('textarea');
      if (firstShown && firstInput) firstInput.readOnly = true;
      host.append(firstCard);
      const remaining = create('div'); remaining.hidden = !firstShown;
      if (topic.diagram?.afterFirstTask) {
        const figure = create('figure', 'learning-diagram');
        const img = create('img'); img.src = topic.diagram.path; img.alt = topic.diagram.alt;
        figure.append(img); appendText(figure, 'figcaption', '', topic.diagram.caption);
        remaining.append(figure);
      }
      for (let index = 1; index < topic.tasks.length - 1; index++) remaining.append(renderTask(topic, topic.tasks[index], index));
      const mainInputs = [...remaining.querySelectorAll('textarea')];
      if (transferShown) mainInputs.forEach(input => { input.readOnly = true; });
      const transferText = appendText(remaining, 'blockquote', 'reading-passage', topic.stagedUpdate.text);
      transferText.hidden = !transferShown;
      const transferTask = renderTask(topic, topic.tasks.at(-1), topic.tasks.length - 1);
      transferTask.hidden = !transferShown;
      remaining.append(transferTask);
      const mainComplete = () => topic.tasks.slice(0, -1).every(task => String(state.answers[task.id] || '').trim());
      const transferButton = button('Hauptantworten festhalten und Transfer zeigen', () => {
        if (!mainComplete()) return;
        state.answers[transferMarker] = 'ja'; save();
        mainInputs.forEach(input => { input.readOnly = true; });
        transferButton.hidden = true; transferText.hidden = false; transferTask.hidden = false;
        transferText.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'check-button');
      transferButton.disabled = !mainComplete(); transferButton.hidden = transferShown;
      mainInputs.forEach(input => input.addEventListener('input', () => { transferButton.disabled = !mainComplete(); }));
      remaining.insertBefore(transferButton, transferText);
      const firstButton = button(topic.firstTaskGate.unlockLabel, () => {
        if (!String(state.answers[first.id] || '').trim()) return;
        state.answers[firstMarker] = 'ja'; save();
        if (firstInput) firstInput.readOnly = true;
        firstButton.hidden = true; remaining.hidden = false;
        remaining.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'check-button');
      firstButton.disabled = !String(state.answers[first.id] || '').trim(); firstButton.hidden = firstShown;
      firstInput?.addEventListener('input', () => { firstButton.disabled = !firstInput.value.trim(); });
      host.append(firstButton, remaining);
    } else if (topic.stagedPrompt) {
      const first = topic.tasks[0];
      const marker = `${first.id}-kontext-gezeigt`;
      const shown = state.answers[marker] === 'ja';
      const firstCard = renderTask(topic, first, 0);
      const firstInput = firstCard.querySelector('textarea');
      if (shown && firstInput) firstInput.readOnly = true;
      host.append(firstCard);
      const showButton = button('Erste Vermutung festhalten und Kontext zeigen', () => {
        if (!String(state.answers[first.id] || '').trim()) return;
        state.answers[marker] = 'ja'; save();
        if (firstInput) firstInput.readOnly = true;
        showButton.hidden = true; contextText.hidden = false; remaining.hidden = false;
        contextText.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'check-button');
      showButton.disabled = !String(state.answers[first.id] || '').trim();
      showButton.hidden = shown;
      firstInput?.addEventListener('input', () => { showButton.disabled = !firstInput.value.trim(); });
      host.append(showButton);
      const contextText = appendText(host, 'blockquote', 'reading-passage', topic.stagedPrompt.text);
      contextText.hidden = !shown;
      const remaining = create('div'); remaining.hidden = !shown;
      for (let index = 1; index < topic.tasks.length; index++) remaining.append(renderTask(topic, topic.tasks[index], index));
      host.append(remaining);
    } else if (topic.stagedReading) {
      const reading = topic.stagedReading;
      const first = topic.tasks[0];
      const sourceMarker = `${first.id}-text-gezeigt`;
      const updateMarker = `${first.id}-update-gezeigt`;
      const sourceShown = state.answers[sourceMarker] === 'ja';
      const updateShown = state.answers[updateMarker] === 'ja';
      const predictionCard = renderTask(topic, first, 0);
      const predictionInput = predictionCard.querySelector('textarea');
      if (predictionInput && sourceShown) predictionInput.readOnly = true;
      host.append(predictionCard);
      const sourceButton = button('Lesetext nach meiner Vermutung zeigen', () => {
        if (!String(state.answers[first.id] || '').trim()) return;
        state.answers[sourceMarker] = 'ja'; save();
        if (predictionInput) predictionInput.readOnly = true;
        sourceButton.hidden = true; sourceText.hidden = false; if (sourcePlan) sourcePlan.hidden = false; mainTasks.hidden = false; updateButton.hidden = false;
        sourceText.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'check-button');
      sourceButton.disabled = !String(state.answers[first.id] || '').trim();
      sourceButton.hidden = sourceShown;
      predictionInput?.addEventListener('input', () => { sourceButton.disabled = !predictionInput.value.trim(); });
      host.append(sourceButton);
      const sourceText = appendText(host, 'blockquote', 'reading-passage', reading.text);
      sourceText.hidden = !sourceShown;
      let sourcePlan = null;
      if (reading.plan) {
        sourcePlan = create('figure', 'learning-diagram');
        const img = create('img'); img.src = reading.plan.path; img.alt = reading.plan.alt;
        sourcePlan.append(img); appendText(sourcePlan, 'figcaption', '', reading.plan.caption);
        sourcePlan.hidden = !sourceShown;
        host.append(sourcePlan);
      }
      const mainTasks = create('div'); mainTasks.hidden = !sourceShown;
      for (let index = 1; index < topic.tasks.length - 1; index++) mainTasks.append(renderTask(topic, topic.tasks[index], index));
      const mainInputs = [...mainTasks.querySelectorAll('textarea')];
      if (updateShown) mainInputs.forEach(input => { input.readOnly = true; });
      host.append(mainTasks);
      const mainComplete = () => topic.tasks.slice(1, -1).every(task => reading.optionalMainTaskIds?.includes(task.id) || String(state.answers[task.id] || '').trim());
      const updateButton = button('Hauptantworten festhalten und Änderung zeigen', () => {
        if (!mainComplete()) return;
        state.answers[updateMarker] = 'ja'; save();
        mainInputs.forEach(input => { input.readOnly = true; });
        updateButton.hidden = true; updateText.hidden = false; transferTask.hidden = false;
        updateText.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'check-button');
      updateButton.disabled = !mainComplete();
      updateButton.hidden = !sourceShown || updateShown;
      mainInputs.forEach(input => input.addEventListener('input', () => { updateButton.disabled = !mainComplete(); }));
      mainTasks.append(updateButton);
      const updateText = appendText(host, 'blockquote', 'reading-passage', reading.updateText);
      updateText.hidden = !updateShown;
      const transferTask = renderTask(topic, topic.tasks.at(-1), topic.tasks.length - 1);
      transferTask.hidden = !updateShown;
      host.append(transferTask);
    } else if (topic.stagedUpdate) {
      const mainTasks = create('div');
      for (let index = 0; index < topic.tasks.length - 1; index++) mainTasks.append(renderTask(topic, topic.tasks[index], index));
      const mainInputs = [...mainTasks.querySelectorAll('textarea')];
      const marker = `${topic.tasks[0].id}-update-gezeigt`;
      const updateShown = state.answers[marker] === 'ja';
      if (updateShown) mainInputs.forEach(input => { input.readOnly = true; });
      host.append(mainTasks);
      if (topic.practiceBeforeLastTask && topic.practice) host.append(renderPractice(topic.practice, false));
      const mainComplete = () => topic.tasks.slice(0, -1).every(task => String(state.answers[task.id] || '').trim());
      const updateButton = button(topic.stagedUpdate.buttonLabel || `Hauptantworten festhalten und ${topic.stagedUpdate.kind === 'variant' ? 'Variante' : 'Korrektur'} zeigen`, () => {
        if (!mainComplete()) return;
        state.answers[marker] = 'ja'; save();
        mainInputs.forEach(input => { input.readOnly = true; });
        updateButton.hidden = true; updateText.hidden = false; transferTask.hidden = false;
        const autoCheck = host.querySelector('.auto-check-card');
        if (autoCheck) autoCheck.hidden = false;
        updateText.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 'check-button');
      updateButton.disabled = !mainComplete();
      updateButton.hidden = updateShown;
      mainInputs.forEach(input => input.addEventListener('input', () => { updateButton.disabled = !mainComplete(); }));
      host.append(updateButton);
      const updateText = appendText(host, 'blockquote', 'reading-passage', topic.stagedUpdate.text);
      updateText.hidden = !updateShown;
      const transferTask = renderTask(topic, topic.tasks.at(-1), topic.tasks.length - 1);
      transferTask.hidden = !updateShown;
      host.append(transferTask);
    } else {
      for (const [index, task] of topic.tasks.entries()) {
        if (topic.practiceBeforeLastTask && index === topic.tasks.length - 1) host.append(renderPractice(topic.practice, false));
        host.append(renderTask(topic, task, index));
      }
    }
    if (topic.practice && !topic.practiceBeforeLastTask) host.append(renderPractice(topic.practice, false));
    if (topic.autoCheck) host.append(renderAutoCheck(topic));
    const storage = appendText(host, 'p', 'privacy-note', 'Deine Antworten werden nur in diesem Browser gespeichert.'); storage.id = 'storage-status';
  }
  function renderAutoCheck(topic) {
    const check = topic.autoCheck;
    const section = create('section', 'work-intro auto-check-card');
    section.dataset.topicId = topic.id;
    section.hidden = autoCheckLocked(topic);
    appendText(section, 'p', 'eyebrow', 'Freiwilliger Mini-Check');
    appendText(section, 'h3', '', 'Eindeutige Antworten selbst prüfen');
    appendText(section, 'p', 'muted', 'Diese Auswahlfragen kann die App auf deinem Gerät prüfen. Das Ergebnis ist ein Übungsstand, keine Schulnote. Deine offenen Begründungen und die Kriterienpunkte beurteilt der Mini-Check nicht.');
    check.questions.forEach((question, index) => section.append(renderTask(topic, question, index, check.questions.length)));
    const result = create('p', 'task-result'); result.setAttribute('aria-live', 'polite');
    section.append(button('Mini-Check auswerten', () => {
      const outcomes = check.questions.map(question => taskResult(question, state.answers[question.id] || ''));
      const correct = outcomes.filter(outcome => outcome.status === 'correct').length;
      const open = outcomes.filter(outcome => outcome.status === 'empty').length;
      result.textContent = `${correct} von ${check.questions.length} Auswahlfragen richtig${open ? `; ${open} noch offen` : ''}. Du kannst Antworten ändern und erneut prüfen. Die offenen Schreibaufgaben werden hier nicht bewertet.`;
    }, 'check-button'));
    section.append(result);
    return section;
  }
  function autoCheckLocked(topic) {
    if (!topic.autoCheck?.afterMain) return false;
    if (topic.stagedUpdate) return state.answers[`${topic.tasks[0].id}-update-gezeigt`] !== 'ja';
    return topic.tasks.some(task => !String(state.answers[task.id] || '').trim());
  }
  function renderTask(topic, task, index, autoCheckTotal = 0) {
    const card = create('article', 'task-card'); card.dataset.taskId = task.id;
    appendText(card, 'span', 'task-count', autoCheckTotal ? `Mini-Check ${index + 1} von ${autoCheckTotal}` : topic.practiceBeforeLastTask
      ? `Notizfeld ${index + 1} von ${topic.tasks.length} · mündliche Praxis separat`
      : `Aufgabe ${index + 1} von ${topic.tasks.length}`);
    appendText(card, 'h3', '', task.prompt);
    if (task.draftReferenceTaskId) {
      card.dataset.referenceTaskId = task.draftReferenceTaskId;
      appendText(card, 'p', 'muted', 'Dein Entwurf aus B zum Vergleichen:');
      appendText(card, 'blockquote', 'draft-reference', state.answers[task.draftReferenceTaskId] || 'Schreibe zuerst deinen eigenen Entwurf in B.');
    }
    let input;
    if (task.kind === 'choice') {
      const group = create('div', 'choices');
      for (const option of task.options) {
        const label = create('label', 'choice');
        const radio = create('input'); radio.type = 'radio'; radio.name = task.id; radio.value = option;
        radio.checked = state.answers[task.id] === option;
        radio.addEventListener('change', () => { state.answers[task.id] = option; save(); result.replaceChildren(); });
        label.append(radio, create('span', '', option)); group.append(label);
      }
      input = group;
    } else if (task.kind === 'integer' || task.kind === 'decimal') {
      input = create('input', 'answer-input'); input.type = 'text'; input.inputMode = task.kind === 'decimal' ? 'decimal' : 'numeric'; input.autocomplete = 'off';
      input.setAttribute('aria-label', `Antwort auf Aufgabe ${index + 1}`);
      input.value = state.answers[task.id] || '';
      input.addEventListener('input', () => { state.answers[task.id] = input.value; save(); result.replaceChildren(); });
    } else {
      input = create('textarea', 'answer-input'); input.rows = Number.isInteger(task.inputRows) && task.inputRows >= 4 && task.inputRows <= 18 ? task.inputRows : 4; input.setAttribute('aria-label', /^en-form-b\d{2}$/.test(task.id) ? task.prompt : `Antwort auf Aufgabe ${index + 1}`);
      input.value = state.answers[task.id] || '';
      input.addEventListener('input', () => {
        state.answers[task.id] = input.value; save(); result.replaceChildren();
        document.querySelectorAll('.task-card[data-reference-task-id]').forEach(reference => {
          if (reference.dataset.referenceTaskId === task.id) {
            reference.querySelector('.draft-reference').textContent = input.value || 'Schreibe zuerst deinen eigenen Entwurf in B.';
          }
        });
      });
    }
    card.append(input);
    const result = create('div', 'task-result'); result.setAttribute('aria-live', 'polite');
    const helpAttemptKey = `${task.id}-hilfe-erstversuch`;
    const helpUsedKey = `${task.id}-hilfe-genutzt`;
    let helpButton = null;
    if (task.helpAfterAttempt) {
      const helpText = appendText(card, 'p', 'task-help', task.helpAfterAttempt);
      helpText.hidden = state.answers[helpUsedKey] !== 'ja';
      helpButton = button('Formenhilfe nach Erstversuch öffnen', () => {
        if (state.answers[helpAttemptKey] !== 'ja') return;
        state.answers[helpUsedKey] = 'ja'; save();
        helpButton.hidden = true; helpText.hidden = false;
      }, 'check-button');
      helpButton.hidden = state.answers[helpAttemptKey] !== 'ja' || state.answers[helpUsedKey] === 'ja';
      card.append(helpButton);
    }
    card.append(button(task.manualBookReview ? 'Prüfweg ansehen' : 'Antwort prüfen', () => {
      const value = state.answers[task.id] || '';
      const outcome = taskResult(task, value);
      result.replaceChildren(); result.dataset.status = outcome.status;
      appendText(result, 'p', '', outcome.label);
      if (outcome.status !== 'empty' && outcome.status !== 'invalid') {
        if (task.helpAfterAttempt && state.answers[helpAttemptKey] !== 'ja') {
          state.answers[helpAttemptKey] = 'ja'; save();
          if (helpButton) helpButton.hidden = false;
        }
        const showSolution = () => {
          if (task.sample) appendText(result, 'p', 'sample-answer', `${task.manualBookReview ? 'Methodenbeispiel zu Heidi (kein Lösungsschlüssel für dein Buch)' : 'Musterlösung'}: ${task.sample}`);
          const steps = task.explanation || task.criteria || [];
          const ol = create('ol'); steps.forEach(step => appendText(ol, 'li', '', step)); result.append(ol);
        };
        if (topic.reading || task.manualBookReview) {
          appendText(result, 'p', 'muted', task.manualBookReview ? 'Prüfe erst deine eigenen Fundstellen. Das folgende Heidi-Beispiel bewertet dein Buch nicht und beweist keine Ganzlektüre.' : 'Prüfe zuerst, ob du eigene Kapitelbelege aus der vollständigen Lektüre notiert hast. Die App kann das Lesen nicht feststellen.');
          const reveal = button(task.manualBookReview ? 'Methodenbeispiel bewusst öffnen' : 'Musterlösung bewusst öffnen', () => { reveal.remove(); showSolution(); }, 'reveal-sample');
          result.append(reveal);
        } else if (task.adultOnlySolution || topic.stagedReading) {
          appendText(result, 'p', 'muted', topic.stagedReading ? 'Die Musterlösung steht im Erwachsenenbereich. Vergleiche erst deine eigene Lektüre und schliesse die Hauptaufgaben ab.' : 'Die Sachlösung steht nur im Erwachsenenbereich. Besprecht sie nach deiner eigenen Bearbeitung; die App kann offene Antworten nicht selbst bewerten.');
        } else showSolution();
      }
    }, 'check-button'));
    card.append(result); return card;
  }

  function renderPractice(practice, adult) {
    const section = create('section', adult ? 'adult-practice' : 'practice-card');
    appendText(section, 'p', 'eyebrow', adult ? 'Nur bei echter Beobachtung' : 'Praxis ausserhalb des Textfelds');
    appendText(section, 'h3', '', practice.title);
    appendText(section, 'p', '', adult ? practice.adultNote : practice.childNote);
    if (adult) for (const paragraph of practice.adultGuide || []) appendText(section, 'p', '', paragraph);
    const list = create('ol');
    (adult ? practice.adultCriteria : practice.childSteps).forEach(step => appendText(list, 'li', '', step));
    section.append(list);
    if (!adult && practice.externalLinks) {
      appendText(section, 'p', 'muted', 'Externe Seiten öffnen erst nach deinem Klick. Der Lernatlas überträgt dabei keine Antworten.');
      for (const external of practice.externalLinks) {
        const link = create('a', 'lab-open');
        link.href = external.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = external.label;
        section.append(link);
      }
    }
    if (!adult && practice.childHandouts) {
      appendText(section, 'p', 'muted', 'Freiwillige Zusatzkarten enthalten keine Lösungen. Eine Sprechleistung zählt nur, wenn sie wirklich gehört wurde.');
      for (const handout of practice.childHandouts) {
        const link = create('a', 'lab-open');
        link.href = handout.path;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = handout.label;
        section.append(link);
      }
    }
    if (adult && practice.handouts) {
      appendText(section, 'p', 'muted', 'Getrennte Karten nur zur passenden Phase ausgeben; die Links enthalten keine Erwachsenenlösung.');
      for (const handout of practice.handouts) {
        const link = create('a', 'lab-open');
        link.href = handout.path;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = handout.label;
        section.append(link);
      }
    }
    if (adult) appendText(section, 'p', 'muted', practice.unscored === true
      ? 'Nur tatsächlich Beobachtetes eintragen. Keine Gelegenheit und nicht beobachtet unterscheiden; keine Punkte, Summe oder Schulnote ableiten.'
      : practice.noTotal === true
      ? 'Nur nach fairer Gelegenheit je Kriterium beobachten. Ohne Gelegenheit: nicht erhoben statt 0. Keine Gesamtpunktzahl oder Schulnote ableiten.'
      : 'Pro Kriterium die tatsächlich beobachteten Punkte und Hilfen auf dem Lösungsblatt notieren. Ohne durchgeführte Beobachtung: nicht erhoben. Keine automatische Punktzahl.');
    return section;
  }

  function renderAdult() {
    renderSources();
    const host = $('#adult-content'); host.replaceChildren();
    if (state.selected.length === 0) { appendText(host, 'p', 'empty-state', 'Noch keine Themen gewählt.'); return; }
    for (const id of state.selected) {
      const topic = topicById.get(id); const section = create('section', 'adult-topic');
      appendText(section, 'p', 'eyebrow', subjectById.get(topic.subjectId).name);
      appendText(section, 'h2', '', topic.title);
      appendText(section, 'p', 'level-tag', levelLabel(topic));
      if (topic.diagram) {
        const figure = create('figure', 'learning-diagram');
        const img = create('img'); img.src = topic.diagram.path; img.alt = topic.diagram.alt;
        figure.append(img); appendText(figure, 'figcaption', '', topic.diagram.caption);
        section.append(figure);
      }
      if (topic.lab) appendText(section, 'p', 'muted', topic.lab.scoredInteraction === false ? `${topic.lab.title}: ${topic.lab.printNote}` : `${topic.lab.title}: Praktische Bedienung im neuen Tab nur nach tatsächlich beobachteten Schritten beurteilen. Geschriebene Antworten belegen die Klicks nicht automatisch.`);
      if (topic.audio) {
        appendText(section, 'p', 'muted', topic.audio.adultNote);
        appendText(section, 'h3', '', 'Transkript – erst nach der Hörbearbeitung zeigen');
        appendText(section, 'p', 'audio-transcript', topic.audio.transcript);
      }
      if (topic.liveReading) {
        appendText(section, 'p', 'muted', topic.liveReading.adultNote);
        appendText(section, 'h3', '', 'Vorlesetext – vor der Hörbearbeitung verdecken');
        appendText(section, 'p', 'live-reading-script', topic.liveReading.script);
      }
      if (topic.reading) appendText(section, 'p', 'muted', topic.reading.adultNote);
      for (const [index, task] of topic.tasks.entries()) {
        if (topic.practiceBeforeLastTask && index === topic.tasks.length - 1) section.append(renderPractice(topic.practice, true));
        const item = create('article', 'adult-task'); item.dataset.taskId = task.id;
        appendText(item, 'h3', '', topic.practiceBeforeLastTask ? task.prompt : `${index + 1}. ${task.prompt}`);
        const answer = state.answers[task.id];
        appendText(item, 'p', 'muted', `Eingabe im Kinderbereich: ${answer ? String(answer) : 'noch keine'}`);
        if (task.helpAfterAttempt) appendText(item, 'p', 'muted', `Formenhilfe nach Erstversuch: ${state.answers[`${task.id}-hilfe-genutzt`] === 'ja' ? 'genutzt' : 'nicht als genutzt vermerkt'}. Dieser Status ist keine automatische Leistungsbewertung.`);
        appendText(item, 'p', 'sample-answer', `${task.manualBookReview ? 'Methodenbeispiel zu Heidi, kein Inhaltsschlüssel für dieses Buch' : 'Lösung'}: ${task.sample || task.correctLabel || task.correct}`);
        const steps = task.explanation || task.criteria || [];
        const ol = create('ol'); steps.forEach(step => appendText(ol, 'li', '', step)); item.append(ol);
        if (task.kind === 'reflection') appendText(item, 'p', 'muted', 'Offene Antwort: Kriterien gemeinsam prüfen; keine sichere automatische Note.');
        section.append(item);
      }
      if (topic.practice && !topic.practiceBeforeLastTask) section.append(renderPractice(topic.practice, true));
      host.append(section);
    }
  }

  function renderSources() {
    const host = $('#parent-source-list'); host.replaceChildren();
    const overview = 'https://www.schulportal-thueringen.de/web/guest/lehrplaene/gymnasium';
    const currentIds = new Set(['de', 'en', 'fr', 'ma', 'mbi', 'bi', 'ch', 'ph']);
    for (const subject of catalog.subjects) {
      const card = create('article', 'source-card');
      appendText(card, 'h3', '', subject.name);
      appendText(card, 'p', '', `Fassung und Jahrgang: ${subject.plan}. ${subject.scope}.`);
      const sourceStatus = subject.id === 'mnt'
        ? 'Lehrplanquelle: Ministerielle Erprobungsfassung 2026 intern geprüft; sie setzt MNT 2026/27 für Klasse 5 in Kraft. Ein passender Klasse-7-Bezug ist nicht belegt.'
        : currentIds.has(subject.id)
          ? 'Lehrplanquelle: Ministerielles Original 2026 intern geprüft; öffentlicher Datei-Abgleich steht aus.'
          : 'Lehrplanquelle: Fachstand aus der amtlichen Übersicht 2025/26; Gültigkeit 2026/27 noch offen.';
      appendText(card, 'p', 'source-status', sourceStatus);
      const link = create('a', 'source-link', 'Amtliche Gymnasialübersicht öffnen ↗');
      link.href = overview; link.target = '_blank'; link.rel = 'noopener noreferrer';
      card.append(link);
      appendText(card, 'p', 'source-small', 'Ein öffentlicher Direktlink zur hier beschriebenen Fachfassung wurde nicht sicher geprüft. Der Link führt zur amtlichen Fachübersicht; die erreichbare Datei kann davon abweichen.');
      if (subject.id === 'fr') {
        appendText(card, 'p', 'source-status', 'Schulischer Sprachweg: Ein Elternbrief für Klasse 5 im Schuljahr 2024/25 nennt Französisch als zweite Fremdsprache ab Klasse 6. Bei regulärem Jahrgangsverlauf passt das zu Lottes aktuellem Fach. Ihr persönlicher Beginn und Lernstand sind nicht belegt.');
        const schoolLink = create('a', 'source-link school-source-link', 'Suhler Elternbrief zur zweiten Fremdsprache öffnen ↗');
        schoolLink.href = 'https://www.eulegym.de/_files/ugd/e0a47f_542a0be4579b47a8b3b706cafe2fff68.pdf';
        schoolLink.target = '_blank'; schoolLink.rel = 'noopener noreferrer';
        card.append(schoolLink);
      }
      const topics = catalog.topics.filter(topic => topic.subjectId === subject.id && topic.released);
      appendText(card, 'p', 'source-status', `Themenableitung: ${topics.length ? topics.map(topic => topic.title).join('; ') : 'Noch kein nutzbares Themenpaket aus diesem Fach.'}`);
      appendText(card, 'p', 'source-status', `Aufgabenprüfung: ${topics.length ? `${topics.length} intern geprüft${topics.length === 1 ? 'es Paket' : 'e Pakete'} mit Musterlösung` : 'Keine Aufgabe freigegeben'}. Keine Aussage über den aktuellen Schulstoff.`);
      if (topics.length) {
        const detail = create('details', 'source-detail');
        appendText(detail, 'summary', '', 'Belegstellen der geprüften Aufgaben');
        const list = create('ul');
        for (const topic of topics) appendText(list, 'li', '', `${topic.title} · ${levelLabel(topic)}. Eigene Aufgabenableitung: ${topic.releaseEvidence.competencyRef} Intern geprüft am ${topic.releaseEvidence.checkedAt}.`);
        detail.append(list); card.append(detail);
      }
      host.append(card);
    }
  }

  function preparePrint(mode, ids = state.selected) {
    if (activeProfile !== 'lotte') return;
    if (ids.length === 0) { show('choose'); return; }
    const page = $('#print-surface'); page.replaceChildren();
    const manualBookOnly = ids.every(id => topicById.get(id)?.tasks.every(task => task.manualBookReview));
    appendText(page, 'p', 'print-kicker', preview ? 'Lotte & Lea · Prüfmodus: kann ungeprüfte Aufgaben enthalten' : 'Lotte & Lea · Lernmaterial mit Quellenstand im Themenkatalog');
    appendText(page, 'h1', '', mode === 'child' ? 'Arbeitsblatt' : manualBookOnly ? 'Prüfblatt für Erwachsene' : 'Lösungsblatt für Erwachsene');
    appendText(page, 'p', '', mode === 'child' ? 'Name: ____________________   Datum: __________' : manualBookOnly ? 'Die Heidi-Beispiele zeigen die Methode. Inhaltliche Antworten nur mit dem tatsächlich gewählten Buch und derselben Ausgabe prüfen.' : 'Diese Musterlösungen erklären die Schritte. Offene Antworten brauchen eine persönliche Prüfung.');
    for (const id of ids) {
      const topic = topicById.get(id); const section = create('section', 'print-topic');
      const hideChildUpdate = mode === 'child' && topic.stagedUpdate?.childPrintAfterUnlock === true
        && state.answers[`${topic.tasks[0].id}-update-gezeigt`] !== 'ja';
      const hideChildFirstGate = mode === 'child' && topic.firstTaskGate
        && state.answers[`${topic.tasks[0].id}-erste-stufe-gezeigt`] !== 'ja';
      const hideChildReadingSource = mode === 'child' && topic.stagedReading
        && state.answers[`${topic.tasks[0].id}-text-gezeigt`] !== 'ja';
      const hideChildPromptContext = mode === 'child' && topic.stagedPrompt
        && state.answers[`${topic.tasks[0].id}-kontext-gezeigt`] !== 'ja';
      const hideChildReadingUpdate = mode === 'child' && topic.stagedReading
        && state.answers[`${topic.tasks[0].id}-update-gezeigt`] !== 'ja';
      appendText(section, 'h2', '', `${subjectById.get(topic.subjectId).name} · ${topic.title}`);
      appendText(section, 'p', 'print-level', levelLabel(topic));
      if (mbiYearNote(topic)) appendText(section, 'p', 'print-context', mbiYearNote(topic));
      if (topic.prerequisite) appendText(section, 'p', 'print-context', topic.prerequisite);
      appendText(section, 'p', 'print-context', topic.introduction);
      if (topic.passage) appendText(section, 'p', 'print-passage', topic.passage);
      if (topic.printPassage) appendText(section, 'p', 'print-passage', topic.printPassage);
      if (topic.sourceCards) appendSourceCards(section, topic.sourceCards, true);
      if (topic.stagedReading && mode === 'adult') {
        appendText(section, 'p', 'print-passage', topic.stagedReading.text);
        if (topic.stagedReading.plan) {
          const figure = create('figure', 'print-diagram');
          const img = create('img'); img.src = topic.stagedReading.plan.path; img.alt = topic.stagedReading.plan.alt;
          figure.append(img); appendText(figure, 'figcaption', '', topic.stagedReading.plan.caption);
          section.append(figure);
        }
      }
      if (topic.stagedPrompt && mode === 'adult') appendText(section, 'p', 'print-passage', topic.stagedPrompt.text);
      if (topic.stagedPrompt && mode === 'child') appendText(section, 'p', 'print-context', hideChildPromptContext
        ? 'Druckfolge: Erst die eigene Vermutung notieren. Der Kontext und die weiteren Aufgaben werden danach im Übungsraum zum Kinderdruck freigegeben.'
        : 'Druckfolge: Die erste Seite mit der Vermutung zuerst bearbeiten. Die Kontextseite erst danach ansehen. Eine bedruckte Seite allein beweist diese Reihenfolge nicht.');
      if (topic.stagedReading && mode === 'child') appendText(section, 'p', 'print-context', hideChildReadingSource
        ? 'Druckfolge: Hier ist zuerst nur die Titelvermutung. Aushang und Plan werden nach ihrem Festhalten im Übungsraum zum Druck freigegeben.'
        : hideChildReadingUpdate
          ? 'Druckfolge: Zuerst die Titelvermutung, danach Aushang, Plan und Hauptaufgaben bearbeiten. Die Änderung wird erst nach dem Festhalten der Hauptantworten zum Druck freigegeben.'
          : 'Druckfolge: Seite mit Titel und Vermutung zuerst bearbeiten. Die folgende Textseite erst danach ansehen; den Änderungstext erst nach den Hauptaufgaben ansehen. Eine bedruckte Seite allein beweist diese Reihenfolge nicht.');
      if (topic.firstTaskGate && mode === 'child') appendText(section, 'p', 'print-context', hideChildFirstGate
        ? `Druckfolge: Zuerst nur A aus dem Gedächtnis bearbeiten. ${topic.firstTaskGate.afterLabel || 'B–D'} werden nach dem Festhalten von A im Übungsraum zum Kinderdruck freigegeben. Papier allein beweist keinen Hilfsmittelverzicht.`
        : hideChildUpdate
          ? `Druckfolge: A ist festgehalten. Jetzt ${topic.firstTaskGate.afterLabel || 'B–D'} bearbeiten. Der freiwillige Transfer wird erst danach zum Kinderdruck freigegeben.`
          : `Druckfolge: A zuerst, dann ${topic.firstTaskGate.afterLabel || 'B–D'}, zuletzt der freiwillige Transfer. Papier allein beweist keinen Hilfsmittelverzicht.`);
      if (topic.stagedUpdate && !topic.firstTaskGate && mode === 'child') appendText(section, 'p', 'print-context', hideChildUpdate
        ? `Druckfolge: Zuerst die Hauptaufgaben ${topic.stagedUpdate.mainLabel || 'A–C'} bearbeiten. Die Zusatzseite wird nach dem Festhalten dieser Antworten im Übungsraum freigegeben.`
        : `Druckfolge: Zuerst die Hauptaufgaben ${topic.stagedUpdate.mainLabel || 'A–C'} auf den ersten Seiten bearbeiten. ${topic.stagedUpdate.printNote || `Die spätere ${topic.stagedUpdate.kind === 'variant' ? 'Variante' : 'Korrektur'} auf der Zusatzseite erst danach ansehen.`} Papier allein beweist diese Reihenfolge nicht.`);
      if (topic.diagram && !topic.diagram.afterFirstTask && (mode === 'child' || topic.diagram.adultPrint !== false)) {
        const figure = create('figure', 'print-diagram');
        const img = create('img'); img.src = topic.diagram.path; img.alt = topic.diagram.alt;
        figure.append(img); appendText(figure, 'figcaption', '', topic.diagram.caption);
        section.append(figure);
      }
      if (topic.lab) {
        appendText(section, 'p', 'print-context', `${topic.lab.title}: im Lernatlas beim Thema öffnen. ${topic.lab.printNote}${topic.released && topic.lab.published !== false ? ` Direktadresse: ${topic.lab.publicUrl}` : ''}`);
        if (mode === 'adult' && topic.lab.scoredInteraction !== false) {
          const observationNote = topic.id === 'mbi-farbkarten-tabellenlabor'
            ? 'Geschriebene Antworten beweisen Formeleingabe und Neuberechnung nach B6-Änderung nicht.'
            : topic.id === 'ma-vierkarten-simulation'
              ? 'Geschriebene Antworten beweisen weder die drei Simulationsstufen noch ein eigenständig gezeichnetes Papierdiagramm.'
              : topic.id === 'de-leseraeume-diagramm'
              ? 'Geschriebene Antworten beweisen den Wechsel von Tag und Messgrösse nicht.'
              : topic.id === 'mbi-lesepause-medienwerkstatt'
                ? 'Geschriebene Antworten beweisen Herunterladen, Wiederöffnen und Überarbeiten zweier eigener HTML-Fassungen nicht.'
              : 'Geschriebene Antworten beweisen Filter-, Änderungs- und Rückstellklicks nicht.';
          appendText(section, 'p', 'print-context', `Praktische Bedienpunkte nur nach tatsächlich beobachteten Schritten vergeben. Ohne beobachtete Durchführung: „nicht erhoben“ statt 0 Punkte oder einer scheinbar vollständigen Gesamtsumme. ${observationNote}`);
        }
      }
      if (topic.audio) {
        appendText(section, 'p', 'print-context', `${topic.audio.title}: ${topic.audio.childPrintNote}${topic.released ? ` Audio im Online-Lernatlas: ${topic.audio.publicUrl}` : ''}`);
        if (mode === 'adult') {
          appendText(section, 'p', 'print-context', topic.audio.adultNote);
          appendText(section, 'p', 'print-audio-transcript', `Transkript – erst nach der Hörbearbeitung zeigen:\n${topic.audio.transcript}`);
        }
      }
      if (topic.liveReading) {
        appendText(section, 'p', 'print-context', `${topic.liveReading.title}: ${topic.liveReading.childPrintNote}`);
        if (mode === 'adult') {
          appendText(section, 'p', 'print-context', topic.liveReading.adultNote);
          appendText(section, 'p', 'print-live-reading-script', `Vorlesetext – vor der Hörbearbeitung verdecken:\n${topic.liveReading.script}`);
        }
      }
      if (topic.reading) {
        appendText(section, 'p', 'print-context', `${topic.reading.title}: ${topic.reading.printNote} Leseadresse: ${topic.reading.publicUrl}`);
        if (mode === 'adult') appendText(section, 'p', 'print-context', topic.reading.adultNote);
      }
      let finalPrintedTask = null;
      let stagedUpdatePrint = null;
      for (const [index, task] of topic.tasks.entries()) {
        if (hideChildFirstGate && index > 0) continue;
        if (hideChildUpdate && index === topic.tasks.length - 1) continue;
        if (hideChildReadingSource && index > 0) continue;
        if (hideChildPromptContext && index > 0) continue;
        if (hideChildReadingUpdate && index === topic.tasks.length - 1) continue;
        if (index === 1 && topic.diagram?.afterFirstTask && (mode === 'child' || topic.diagram.adultPrint !== false)) {
          const figure = create('figure', 'print-diagram');
          figure.classList.add('print-gated-diagram');
          const img = create('img'); img.src = topic.diagram.path; img.alt = topic.diagram.alt;
          figure.append(img); appendText(figure, 'figcaption', '', topic.diagram.caption);
          section.append(figure);
        }
        const item = create('div', 'print-task'); item.dataset.taskId = task.id;
        if (topic.stagedUpdate && mode === 'adult' && index === topic.tasks.length - 2) item.classList.add('print-keep-together');
        appendText(item, 'h3', '', topic.practiceBeforeLastTask ? task.prompt : `${index + 1}. ${task.prompt}`);
        if (mode === 'adult' && task.helpAfterAttempt) appendText(item, 'p', 'muted', `Formenhilfe nach Erstversuch: ${state.answers[`${task.id}-hilfe-genutzt`] === 'ja' ? 'genutzt' : 'nicht als genutzt vermerkt'}. Dieser Status ist keine automatische Leistungsbewertung.`);
        if (mode === 'child') {
          if (task.options) task.options.forEach(option => appendText(item, 'p', '', `☐ ${option}`));
          else {
            const lines = create('div', 'writing-lines');
            for (let line = 0; line < (task.writingLines || (task.kind === 'reflection' ? 6 : 4)); line++) lines.append(create('div', 'writing-line'));
            item.append(lines);
          }
        } else {
          appendText(item, 'p', 'sample-answer', `${task.manualBookReview ? 'Methodenbeispiel zu Heidi, kein Inhaltsschlüssel für dieses Buch' : 'Lösung'}: ${task.sample || task.correctLabel || task.correct}`);
          const ol = create('ol'); (task.explanation || task.criteria || []).forEach(step => appendText(ol, 'li', '', step)); item.append(ol);
        }
        section.append(item);
        if (index === topic.tasks.length - 1) finalPrintedTask = item;
        if (topic.stagedPrompt && mode === 'child' && index === 0 && !hideChildPromptContext) appendText(section, 'p', 'print-staged-source print-passage', topic.stagedPrompt.text);
        if (topic.stagedReading && mode === 'child' && index === 0 && !hideChildReadingSource) {
          appendText(section, 'p', 'print-staged-source print-passage', topic.stagedReading.text);
          if (topic.stagedReading.plan) {
            const figure = create('figure', 'print-diagram');
            const img = create('img'); img.src = topic.stagedReading.plan.path; img.alt = topic.stagedReading.plan.alt;
            figure.append(img); appendText(figure, 'figcaption', '', topic.stagedReading.plan.caption);
            section.append(figure);
          }
        }
        if (topic.stagedReading && index === topic.tasks.length - 2 && !hideChildReadingUpdate) {
          appendText(section, 'p', mode === 'child' ? 'print-staged-update print-passage' : 'print-passage', topic.stagedReading.updateText);
        }
        if (topic.stagedUpdate && index === topic.tasks.length - 2 && !hideChildUpdate) {
          stagedUpdatePrint = appendText(section, 'p', mode === 'child' ? 'print-staged-update print-passage' : 'print-passage', topic.stagedUpdate.text);
        }
      }
      if (topic.practice) {
        const practiceSection = create('section', 'print-practice');
        appendText(practiceSection, 'h3', '', topic.practice.title);
        appendText(practiceSection, 'p', '', mode === 'child' ? topic.practice.childNote : topic.practice.adultNote);
        if (mode === 'adult') for (const paragraph of topic.practice.adultGuide || []) appendText(practiceSection, 'p', '', paragraph);
        const list = create('ol');
        (mode === 'child' ? topic.practice.childSteps : topic.practice.adultCriteria).forEach(step => appendText(list, 'li', '', mode === 'child' ? step : topic.practice.unscored === true
          ? `${step}  ${topic.practice.printObservationLabels || '☐ beobachtet  ☐ nicht beobachtet  ☐ keine Gelegenheit  ☐ nicht anwendbar'}. Namenlose Kurznotiz: ____________________`
          : `${step}  Punkte: ____`));
        practiceSection.append(list);
        if (mode === 'child') for (const external of topic.practice.externalLinks || []) appendText(practiceSection, 'p', 'print-context', `${external.label}: ${external.url}. ${external.printNote || 'Nur freiwillig öffnen; keine Antworten oder persönlichen Angaben veröffentlichen.'}`);
        if (mode === 'child' && Number.isInteger(topic.practice.childWritingLines) && topic.practice.childWritingLines > 0) {
          const lines = create('div', 'writing-lines');
          for (let line = 0; line < topic.practice.childWritingLines; line++) lines.append(create('div', 'writing-line'));
          practiceSection.append(lines);
        }
        if (mode === 'child') for (const handout of topic.practice.childHandouts || []) appendText(practiceSection, 'p', 'print-context', `Freiwillige Zusatzkarte separat im Lernatlas öffnen und drucken: ${handout.publicUrl}. Ohne echte Sprech- und Feedbackrunde ist sie nur eine Anleitung.`);
        if (mode === 'adult') {
          for (const handout of topic.practice.handouts || []) appendText(practiceSection, 'p', 'print-context', `${handout.label}: ${handout.publicUrl}. Nur zur passenden Phase und ohne Erwachsenenlösung ausgeben.`);
          if (topic.practice.unscored === true) {
            appendText(practiceSection, 'p', '', topic.practice.printObservationFooter || 'Je Zeile nur nach zulässiger Beobachtung markieren; „keine Gelegenheit“ ist keine Fehlleistung.');
            if (topic.subjectId === 'sp') {
              appendText(practiceSection, 'p', '', 'Schulspiel und geltende Schulregel/Quelle: ______________________________________________');
              appendText(practiceSection, 'p', '', 'Ohne Unterrichtsbeobachtung: nicht erhoben; das Raster bleibt leer. Selbstbericht ist kein Bewegungsnachweis. Keine Punkte, Summe oder Sportnote.');
            } else {
              appendText(practiceSection, 'p', '', 'Übung und verwendete Grundlage: ______________________________________________________________');
              appendText(practiceSection, 'p', '', 'Ohne tatsächliche Beobachtung: nicht erhoben; das Raster bleibt leer. Ein Selbstbericht belegt die Handlung nicht. Dieser Bogen vergibt keine zusätzlichen Punkte oder Schulnote.');
            }
          } else if (topic.practice.noTotal === true) {
            appendText(practiceSection, 'p', '', topic.practice.printObservationFooter || 'Je Kriterium nur nach fairer Gelegenheit werten; sonst nicht erhoben. Keine Gesamtsumme bilden.');
            appendText(practiceSection, 'p', '', 'Tatsächlich gehörte Äusserung und verwendete Hilfe: ________________________________________________________');
          } else {
            const observationMax = Number.isInteger(topic.practice.observationMax) ? topic.practice.observationMax : 16;
            const observationLabel = topic.practice.observationLabel || 'Vortrag';
            if (topic.practice.observationKind === 'school-measurement') {
              appendText(practiceSection, 'p', '', `Beobachtung: ☐ durchgeführt  ☐ mit Hilfe  ☐ abgebrochen  ☐ nicht erhoben. Ohne ${observationLabel} keine Punktzahl eintragen.`);
              appendText(practiceSection, 'p', '', 'Freigegebene Geräte, Messbereiche und schulische Sicherheitsregel: __________________________________________');
              appendText(practiceSection, 'p', '', 'Tatsächlich beobachtete Handlung, Messgrenze oder Abbruchgrund: ___________________________________________');
              appendText(practiceSection, 'p', '', `Nur bei Durchführung und fairer Gelegenheit für alle Kriterien: Summe Schul-Praxisbeobachtung ____ / ${observationMax}. Bei „—“ keine vergleichbare Gesamtsumme. Kein automatisches Urteil und keine Schulnote.`);
            } else if (topic.practice.observationKind === 'collaborative-product') {
              appendText(practiceSection, 'p', '', `Beobachtung: ☐ zu zweit durchgeführt  ☐ teilweise  ☐ keine zweite Person  ☐ nicht erhoben. Ohne ${observationLabel} keine Punktzahl eintragen.`);
              appendText(practiceSection, 'p', '', 'Person B: ☐ Kind/Jugendliche  ☐ erwachsen. Beobachtete Beiträge beider Personen: __________________________');
              appendText(practiceSection, 'p', '', 'V1/V2, Wiederöffnen und gemeinsamer Beschluss tatsächlich gesehen: _____________________________________');
              appendText(practiceSection, 'p', '', `Nur bei tatsächlicher Zusammenarbeit und Gelegenheit für alle Kriterien: Summe Praxisbeobachtung ____ / ${observationMax}. Bei „—“ keine vergleichbare Gesamtsumme. Kein automatisches Urteil und keine Schulnote.`);
            } else {
              appendText(practiceSection, 'p', '', `Beobachtung: ☐ gehört  ☐ mit Hilfe  ☐ offen  ☐ nicht erhoben. Ohne ${observationLabel} keine Punktzahl eintragen.`);
              appendText(practiceSection, 'p', '', 'Vorher vereinbarte Hilfen / verwendete Stichwortstützen: ____________________________________________________');
              appendText(practiceSection, 'p', '', 'Nachgereichte Hinweise und tatsächlich Gehörtes: _______________________________________________________');
              appendText(practiceSection, 'p', '', `Nur bei Durchführung und fairer Gelegenheit für alle Kriterien: Summe mündliche Übung ____ / ${observationMax}. Bei „—“ keine vergleichbare Gesamtsumme. Kein automatisches Urteil und keine Schulnote.`);
            }
          }
        }
        if (topic.practiceBeforeLastTask && stagedUpdatePrint) section.insertBefore(practiceSection, stagedUpdatePrint);
        else if (topic.practiceBeforeLastTask && finalPrintedTask) section.insertBefore(practiceSection, finalPrintedTask);
        else section.append(practiceSection);
      }
      page.append(section);
    }
    document.body.dataset.printMode = `${mode}-${preview ? 'preview' : 'release'}`;
    window.print();
  }
  $('#print-children').addEventListener('click', () => preparePrint('child'));
  $('#print-adult').addEventListener('click', () => preparePrint('adult'));
  $('#print-current-child').addEventListener('click', () => preparePrint('child', state.active ? [state.active] : []));
  $('#print-home-child').addEventListener('click', () => preparePrint('child', state.active ? [state.active] : []));

  $('#export-progress').addEventListener('click', () => {
    if (activeProfile !== 'lotte') return;
    const content = JSON.stringify({ format: 'lotte-lea-local-backup', version: 1, profile: 'lotte', exportedAt: new Date().toISOString(), selected: state.selected, active: state.active, answers: state.answers }, null, 2);
    const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
    const link = create('a'); link.href = url; link.download = `lotte-sicherung-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    $('#backup-status').textContent = 'Private Sicherung heruntergeladen. Bitte geschützt aufbewahren; sie enthält Antworten.';
  });
  $('#import-progress').addEventListener('change', async event => {
    if (activeProfile !== 'lotte') { event.target.value = ''; return; }
    const file = event.target.files?.[0];
    if (!file) return;
    const status = $('#backup-status');
    try {
      if (file.size > 1024 * 1024) throw new Error('Datei ist zu groß (maximal 1 MB).');
      const imported = JSON.parse(await file.text());
      if (imported.format !== 'lotte-lea-local-backup' || imported.version !== 1 || (imported.profile !== undefined && imported.profile !== 'lotte') || !Array.isArray(imported.selected) || !imported.answers || typeof imported.answers !== 'object' || Array.isArray(imported.answers)) throw new Error('Dateiformat, Version oder Lernbereich passt nicht.');
      const validTaskIds = new Set(availableTopics.flatMap(topic => topic.tasks.map(task => task.id)));
      for (const topic of availableTopics) for (const question of topic.autoCheck?.questions || []) validTaskIds.add(question.id);
      const validMarkerIds = new Set();
      for (const topic of availableTopics) {
        const firstId = topic.tasks[0]?.id;
        if (firstId && topic.stagedReading) {
          validMarkerIds.add(`${firstId}-text-gezeigt`);
          validMarkerIds.add(`${firstId}-update-gezeigt`);
        } else if (firstId && topic.stagedPrompt) {
          validMarkerIds.add(`${firstId}-kontext-gezeigt`);
        } else if (firstId && topic.firstTaskGate) {
          validMarkerIds.add(`${firstId}-erste-stufe-gezeigt`);
          validMarkerIds.add(`${firstId}-update-gezeigt`);
        } else if (firstId && topic.stagedUpdate) validMarkerIds.add(`${firstId}-update-gezeigt`);
        for (const task of topic.tasks) if (task.helpAfterAttempt) {
          validMarkerIds.add(`${task.id}-hilfe-erstversuch`);
          validMarkerIds.add(`${task.id}-hilfe-genutzt`);
        }
      }
      if (imported.selected.some(id => !topicById.has(id)) || Object.entries(imported.answers).some(([id, value]) =>
        typeof value !== 'string' || (validMarkerIds.has(id) ? value !== 'ja' : !validTaskIds.has(id) || value.length > 5000))) throw new Error('Sicherung enthält unbekannte Themen oder ungültige Antworten.');
      if (!window.confirm('Diese Sicherung ersetzt den gesamten bisherigen Lernstand in diesem Browser. Fortfahren?')) { status.textContent = 'Import abgebrochen; bisheriger Stand bleibt erhalten.'; return; }
      state = { selected: [...new Set(imported.selected)], active: imported.selected.includes(imported.active) ? imported.active : imported.selected[0] || null, answers: imported.answers };
      save(); renderAdult();
      status.textContent = 'Sicherung importiert. Der bisherige Stand wurde ersetzt.';
    } catch (error) { status.textContent = `Import nicht möglich: ${error.message}`; }
    finally { event.target.value = ''; }
  });

  const recipient = window.LOTTE_CONTACT_EMAIL || '';
  $('#contact-setup-status').textContent = recipient ? 'Der Entwurf ist an Robert adressiert. Prüfe ihn vor dem Senden im E-Mail-Programm.' : 'Der E-Mail-Kontakt ist noch nicht eingerichtet.';
  const feedbackTopic = $('#feedback-topic');
  for (const topic of availableTopics) {
    const option = create('option', '', `${subjectById.get(topic.subjectId).name} · ${topic.title} (${levelLabel(topic)})`);
    option.value = topic.id;
    feedbackTopic.append(option);
  }
  for (const id of ['feedback-profile', 'material-profile']) {
    const optional = create('option', '', 'Nicht angegeben'); optional.value = '';
    $(`#${id}`).prepend(optional); $(`#${id}`).value = '';
  }
  feedbackTopic.disabled = true;
  for (const kind of ['feedback', 'material']) $(`#${kind}-form`).hidden = true;
  document.querySelectorAll('[data-contact-choice]').forEach(choice => choice.addEventListener('click', () => {
    for (const button of document.querySelectorAll('[data-contact-choice]')) {
      const selected = button === choice;
      button.setAttribute('aria-expanded', String(selected));
      button.classList.toggle('selected', selected);
      $(`#${button.dataset.contactChoice}-form`).hidden = !selected;
    }
    const heading = $(`#${choice.dataset.contactChoice}-form h2`);
    heading.tabIndex = -1; heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }));
  function openLotteFeedback() {
    if (activeProfile !== 'lotte') return;
    show('feedback');
    $('[data-contact-choice="feedback"]').click();
    $('#feedback-profile').value = 'Lotte';
    $('#feedback-profile').dispatchEvent(new Event('change'));
    $('#feedback-topic').value = state.active || '';
    $('#feedback-area').value = 'Lernen und Antwortprüfung';
  }
  $('#feedback-from-work').addEventListener('click', openLotteFeedback);
  $('#feedback-from-home').addEventListener('click', openLotteFeedback);
  function prepareDraft(kind, subject, body) {
    const previewBox = $(`#${kind}-preview`);
    const status = $(`#${kind}-status`);
    if (!recipient) { status.textContent = 'Es ist noch keine Empfängeradresse eingerichtet.'; return; }
    previewBox.querySelector('pre').textContent = `An: ${recipient}\nBetreff: ${subject}\n\n${body}`;
    previewBox.querySelector('.mail-open-link').href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    previewBox.hidden = false;
    status.textContent = 'Prüfe den Inhalt. Erst der nächste Klick öffnet einen Entwurf im E-Mail-Programm; gesendet wird hier nichts.';
  }
  for (const kind of ['feedback', 'material']) {
    $(`#${kind}-form`).addEventListener('input', () => { $(`#${kind}-preview`).hidden = true; });
    $(`#${kind}-open-mail`).addEventListener('click', () => {
      $(`#${kind}-status`).textContent = 'Ein E-Mail-Entwurf sollte sich öffnen. Prüfe Empfänger und Inhalt im Mailprogramm und sende selbst. Anhänge dort bei Bedarf manuell hinzufügen.';
    });
  }
  $('#feedback-profile').addEventListener('change', () => {
    const lotte = $('#feedback-profile').value === 'Lotte';
    feedbackTopic.disabled = !lotte;
    if (!lotte) feedbackTopic.value = '';
  });
  $('#feedback-form').addEventListener('submit', event => {
    event.preventDefault();
    const conclusion = $('#feedback-conclusion').value.trim();
    const error = $('#feedback-error').value.trim();
    const wish = $('#feedback-wish').value.trim();
    const selectedTopic = $('#feedback-profile').value === 'Lotte' ? topicById.get(feedbackTopic.value) : null;
    const reference = selectedTopic ? `${subjectById.get(selectedTopic.subjectId).name} · ${selectedTopic.title} (${levelLabel(selectedTopic)})` : 'Kein Thema gewählt';
    if (![conclusion, error, wish].some(Boolean)) { $('#feedback-status').textContent = 'Bitte mindestens ein Textfeld ausfüllen.'; return; }
    const subject = `Lotte & Lea: ${$('#feedback-type').value}`;
    const body = `Feedback zur Lotte-&-Lea-App\n\nBereich: ${$('#feedback-profile').value || 'nicht angegeben'}\nArt: ${$('#feedback-type').value}\nApp-Bereich: ${$('#feedback-area').value || 'nicht angegeben'}\nFach/Thema: ${reference}\nAufgabe/Stelle: ${$('#feedback-task').value.trim() || 'nicht angegeben'}\nGerät/Browser: ${$('#feedback-device').value.trim() || 'nicht angegeben'}\n\nFazit:\n${conclusion || '—'}\n\nBeschreibung:\n${error || '—'}\n\nErwartetes Verhalten oder Vorschlag:\n${wish || '—'}\n\nLernantworten und Anhänge werden nicht automatisch übernommen.`;
    prepareDraft('feedback', subject, body);
  });
  $('#material-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!$('#material-form').reportValidity()) return;
    const body = `Fehlende Unterrichtsinformation für Lotte & Lea\n\nBereich: ${$('#material-profile').value || 'nicht angegeben'}\nFach: ${$('#material-subject').value.trim()}\nThema: ${$('#material-topic').value.trim()}\nWelche Information fehlt:\n${$('#material-missing').value.trim()}\n\nBereits bekannt:\n${$('#material-known').value.trim() || '—'}\n\nHilfreiche Ergänzung:\n${$('#material-use').value.trim() || '—'}\n\nFreiwilliger Hinweis:\n${$('#material-note').value.trim() || '—'}\n\nFotos oder Arbeitsblätter nur bei Bedarf im E-Mail-Programm selbst anhängen.`;
    prepareDraft('material', 'Lotte & Lea: Unterrichtsinformation fehlt', body);
  });

  selectProfile(activeProfile);
})();
