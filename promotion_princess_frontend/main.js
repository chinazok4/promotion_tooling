// ── All data (annex1, annex3, annex4, roleProfiles) loaded via data.js ──

// -- state --
// currentUser and currentRole are set when loadprofile() is called
// they are referenced when using the pdf/csv export functions
let currentUser = '', currentRole = '';

//role definitions
//roles with revenue, annex3 only shows up for these roles
const ROLES_WITH_REVENUE = ['senior consultant', 'manager', 'senior manager', 'associate director', 'director'];
//dual path roles, roles that have leadership + management paths
const DUAL_PATH_ROLES = ['manager', 'senior manager', 'associate director'];

//used to look up IoR from the next role's data
const NEXT_ROLE_KEY = {
  'associate': 'senior associate',
  'senior associate': 'consultant',
  'consultant': 'senior consultant',
  'senior consultant': 'manager',
  'manager': 'senior manager',
  'senior manager': 'associate director',
  'associate director': 'director'
};

//maps each role to a display name.
//the above is for key matching, this is for IoR visual in the form
const NEXT_ROLE = {
  'associate': 'Senior Associate',
  'senior associate': 'Consultant',
  'consultant': 'Senior Consultant',
  'senior consultant': 'Manager',
  'manager': 'Senior Manager',
  'senior manager': 'Associate Director',
  'associate director': 'Director'
};

//maps raw data keys to human-readable displays
//and handles inconsistencies between how keys appear in annex1 vs role profiles
const COMPETENCY_DISPLAY_NAMES = {
  consulting_behaviours: 'Consulting Behaviours',
  core_consulting_skills: 'Core Consulting Skills',
  delivery: 'Delivery',
  content_and_innovation: 'Content & Innovation',
  people_development: 'People Development',
  client_development: 'Client Development',
  business_development: 'Business Development',
  'consulting behaviours': 'Consulting Behaviours',
  'core consulting skills': 'Core Consulting Skills',
  'content & innovation': 'Content & Innovation',
  'people development': 'People Development',
  'client development': 'Client Development',
  'business development': 'Business Development'
};

// ── NAV ──
function goBack() {
  document.getElementById('page-profile').classList.remove('active');
  document.getElementById('page-landing').classList.add('active');
}

//reads name and role from landing form, builds the profile page, goes to it
function loadProfile() {
  const name = document.getElementById('input-name').value.trim();
  const selection = document.getElementById('input-role').value;
  if (!name) { alert('Please enter your name.'); return; }
  if (!selection) { alert('Please select your role.'); return; }

  const [role, pathKey] = selection.split('::');
  currentUser = name;
  currentRole = role;

  //build the hero banner text - appending path label for the dual path roles
  const pathLabel = (pathKey && pathKey !== 'all') ? ' — ' + toTitleCase(pathKey) + ' Path' : '';
  document.getElementById('hero-role').textContent = toTitleCase(role) + pathLabel;
  document.getElementById('hero-name').textContent = name;

  // show path batch in the hero for dual-path roles
  const badgesEl = document.getElementById('hero-badges');
  badgesEl.innerHTML = '';
  if (pathKey && pathKey !== 'all') {
    const b = document.createElement('div');
    b.className = 'path-badge';
    b.textContent = toTitleCase(pathKey) + ' Path';
    badgesEl.appendChild(b);
  }

  //this is for role data, falling back to all if a pathKey is not present
  const roleData = roleProfiles[role];
  const pathData = roleData[pathKey] || roleData['all'] || roleData[Object.keys(roleData)[0]];

  const body = document.getElementById('profile-body');
  body.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'single-path-wrapper';
  wrapper.appendChild(buildPathColumn(role, pathKey, pathData));
  body.appendChild(wrapper);

  document.getElementById('page-landing').classList.remove('active');
  document.getElementById('page-profile').classList.add('active');
  window.scrollTo(0, 0);
}

// ── BUILDERS ──
//assembles sections for a single role/path into a single column. showHeader controls the path header bar. 
function buildPathColumn(role, pathKey, pathData) {
  const col = document.createElement('div');
  col.className = 'path-column';

  const body = document.createElement('div');
  body.className = 'path-column-body';

  //sections render in order
  body.appendChild(buildKPISection(role, pathData['kpi'] || {}, pathKey));
  const annexSec = buildAnnexSection(pathData['kpi'] || {});
  if (annexSec) body.appendChild(annexSec);
  body.appendChild(buildObjectivesSection(pathData['core objectives'] || {}));
  body.appendChild(buildCompetencySection(pathData['competency dimensions'] || {}));
  body.appendChild(buildFocusSection(pathData['focus'] || {}));

  //with the IoR pulled from the next role's data
  const nextRoleKey = NEXT_ROLE_KEY[role];
  const nextRoleData = nextRoleKey ? roleProfiles[nextRoleKey] : null;
  const nextPathData = nextRoleData ? (nextRoleData[pathKey] || nextRoleData['all'] || nextRoleData[Object.keys(nextRoleData)[0]]) : null;
  const ior = nextPathData ? (nextPathData['indicators of readiness'] || []) : [];
  body.appendChild(buildIndicatorsSection(ior, role));

  col.appendChild(body);
  return col;
}

//shows the annexes for the roles/paths that necessitate them. ai adoption for all, and revenue managed for roles_with_revenue
function buildAnnexSection(kpis) {
  const hasRevenue = Object.keys(kpis).some(k => k.toLowerCase().includes('revenue managed'));
  const hasAI = Object.keys(kpis).some(k => k.toLowerCase().includes('ai adoption'));
  if (!hasRevenue && !hasAI) return null;

  const wrapper = document.createElement('div');

  if (hasRevenue && hasAI) {
    wrapper.className = 'dual-path-wrapper';

    const rev = document.createElement('div');
    rev.className = 'path-column';
    const revHeader = document.createElement('div');
    revHeader.className = 'path-column-header';
    revHeader.textContent = 'Annex 3 — Managed Revenue';
    rev.appendChild(revHeader);
    const revBody = document.createElement('div');
    revBody.className = 'path-column-body';
    revBody.innerHTML = buildAnnex3HTML();
    rev.appendChild(revBody);
    wrapper.appendChild(rev);

    const ai = document.createElement('div');
    ai.className = 'path-column';
    const aiHeader = document.createElement('div');
    aiHeader.className = 'path-column-header';
    aiHeader.textContent = 'Annex 4 — AI Adoption KPI';
    ai.appendChild(aiHeader);
    const aiBody = document.createElement('div');
    aiBody.className = 'path-column-body';
    aiBody.innerHTML = buildAnnex4HTML();
    ai.appendChild(aiBody);
    wrapper.appendChild(ai);
  } else {
    wrapper.className = 'single-path-wrapper';
    const col = document.createElement('div');
    col.className = 'path-column';
    const header = document.createElement('div');
    header.className = 'path-column-header';
    header.textContent = hasRevenue ? 'Annex 3 — Managed Revenue' : 'Annex 4 — AI Adoption KPI';
    col.appendChild(header);
    const body = document.createElement('div');
    body.className = 'path-column-body';
    body.innerHTML = hasRevenue ? buildAnnex3HTML() : buildAnnex4HTML();
    col.appendChild(body);
    wrapper.appendChild(col);
  }

  return wrapper;
}

function buildKPISection(role, kpis, pathKey) {
  const block = document.createElement('div');
  block.className = 'section-block';

  const title = document.createElement('div');
  title.className = 'section-title';
  title.innerHTML = '<span class="section-icon">📊</span> Key Performance Indicators';
  block.appendChild(title);

  const table = document.createElement('table');
  table.className = 'kpi-table';
  table.innerHTML = `<thead><tr><th>KPI</th><th>Target</th><th>Self-Assessment</th></tr></thead>`;
  const tbody = document.createElement('tbody');

  //text area ID is slugified so it can be reliably looked up with downloadCSV()
  Object.entries(kpis).forEach(([kpiName, kpiValue]) => {
    const row = document.createElement('tr');
    const safeId = slugify(pathKey + '-kpi-' + kpiName);

    row.innerHTML = `
      <td class="kpi-name">${toTitleCase(kpiName)}</td>
      <td class="kpi-target">${kpiValue}</td>
      <td>
        <div class="self-assess-block">
          <div class="self-assess-label">Your notes</div>
          <textarea class="self-assess-textarea kpi-textarea" id="${safeId}" placeholder="How have you met this KPI? Provide examples…"></textarea>
        </div>
      </td>`;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  block.appendChild(table);

  return block;
}

//returns annex3 panel, reads from annex3 in data.js
function buildAnnex3HTML() {
  const a = annex3.annex3;
  if (!a) return '';
  const caveats = a.caveats.map(c => `<li>${c}</li>`).join('');
  return `
  <div class="annex-panel">
    <div class="annex-label">Annex 3 — Managed Revenue Definition</div>
    <p style="font-size:0.83rem;color:#444;margin-bottom:6px;">${a.definition}</p>
    <div class="annex-label" style="margin-top:8px;">Formula</div>
    <div class="formula-box">${a.formula}</div>
    <div class="annex-label" style="margin-top:8px;">Illustration</div>
    <div class="illustration-box">${a.illustration}</div>
    <div class="annex-label" style="margin-top:8px;">Standard Day Rates (Check your team's specific day rates)</div>
    <div style="text-align:center;">
      <img src="day_rates.png" alt="Role day rates table" style="width:100%;max-width:420px;border-radius:6px;margin:6px 0 12px;">
    </div>
    <div class="annex-label" style="margin-top:8px;">Caveats</div>
    <ul>${caveats}</ul>
  </div>`;
}

//returns annex4 panel, reads from annex4 in data.js
function buildAnnex4HTML() {
  const a = annex4.annex4;
  if (!a) return '';

  const rolesHTML = Object.entries(a.role_labels).map(([k, v]) =>
    `<div class="score-role-chip"><div class="chip-label">${k}</div><div>${v}</div></div>`
  ).join('');

  const criteriaHTML = a.criteria.map(c =>
    `<div class="criteria-item">
      <div class="criteria-id">ID ${c.id}</div>
      <div class="criteria-text">${c.assessed_criteria}</div>
      <div class="criteria-scoring">${c.scoring.join(' · ')}</div>
    </div>`
  ).join('');

  return `
  <div class="annex-panel">
    <div class="annex-label">Annex 4 — AI Adoption KPI</div>
    <p style="font-size:0.83rem;color:#444;margin-bottom:8px;"><strong>Score Calculation:</strong> ${a.score_calculation}</p>
    <div class="annex-label" style="margin-top:8px;">Role Labels</div>
    <div class="annex4-scoring-grid">${rolesHTML}</div>
    <div class="annex-label" style="margin-top:8px;">Criteria</div>
    ${criteriaHTML}
  </div>`;
}

//builds core objectives, with each objective getting a labelled text item and selfassessment textarea under it
function buildObjectivesSection(objectives) {
  const block = document.createElement('div');
  block.className = 'section-block';
  const title = document.createElement('div');
  title.className = 'section-title';
  title.innerHTML = '<span class="section-icon">🎯</span> Core Objectives';
  block.appendChild(title);

  Object.entries(objectives).forEach(([objName, objDesc]) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `<strong>${toTitleCase(objName)}:</strong> ${objDesc}`;
    block.appendChild(item);

    const safeId = slugify('obj-' + objName);
    const sa = document.createElement('div');
    sa.className = 'self-assess-block';
    sa.innerHTML = `
      <div class="self-assess-label">Your notes</div>
      <textarea class="self-assess-textarea" id="${safeId}" placeholder="How have you demonstrated this objective?"></textarea>`;
    block.appendChild(sa);
  });

  return block;
}

//builds competency dimensions with a level badge and definition, pulled from annex1. dimensions marked N/A do not get a self assessment textarea
function buildCompetencySection(dimensions) {
  const block = document.createElement('div');
  block.className = 'section-block';
  const title = document.createElement('div');
  title.className = 'section-title';
  title.innerHTML = '<span class="section-icon">⭐</span> Competency Dimensions';
  block.appendChild(title);

  Object.entries(dimensions).forEach(([dimKey, dimVal]) => {
    const [level, annexRef] = dimVal;
    const displayName = COMPETENCY_DISPLAY_NAMES[dimKey] || toTitleCase(dimKey);
    const levelClass = level === 'N/A' ? 'level-na' : 'level-' + level.toLowerCase();
    const annexKey = dimKey.toLowerCase().replace(/ & /g, '_and_').replace(/ /g, '_');
    const annexData = annex1.annex1 ? annex1.annex1[annexKey] : null;
    const levelDef = (annexData && level !== 'N/A') ? annexData[level.toLowerCase()] : null;

    const item = document.createElement('div');
    item.className = 'competency-item';

    let defHTML = '';
    if (levelDef) {
      defHTML = `<div class="competency-definition">
        <span class="def-label">${level} — ${annexRef}</span>
        ${levelDef}
      </div>`;
    }

    item.innerHTML = `
      <div class="competency-header">
        <span class="competency-name">${displayName}</span>
        <span class="level-badge ${levelClass}">${level}</span>
      </div>
      ${defHTML}`;

    block.appendChild(item);

    if (level !== 'N/A') {
      const safeId = slugify('comp-' + dimKey);
      const sa = document.createElement('div');
      sa.style.padding = '0 0 10px 0';
      sa.innerHTML = `
        <div class="self-assess-block">
          <div class="self-assess-label">Your notes for ${displayName}</div>
          <textarea class="self-assess-textarea" id="${safeId}" placeholder="How have you demonstrated ${level.toLowerCase()} level in ${displayName}?"></textarea>
        </div>`;
      block.appendChild(sa);
    }
  });

  return block;
}

//builds focus section
function buildFocusSection(focus) {
  const block = document.createElement('div');
  block.className = 'section-block';
  const title = document.createElement('div');
  title.className = 'section-title';
  title.innerHTML = '<span class="section-icon">🔍</span> Focus';
  block.appendChild(title);

  const items = Array.isArray(focus) ? focus : (focus.items || Object.values(focus));
  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'list-item';
    el.textContent = item;
    block.appendChild(el);

    const safeId = slugify('focus-' + i);
    const sa = document.createElement('div');
    sa.className = 'self-assess-block';
    sa.innerHTML = `
      <div class="self-assess-label">Your notes</div>
      <textarea class="self-assess-textarea" id="${safeId}" placeholder="How have you demonstrated this focus area?"></textarea>`;
    block.appendChild(sa);
  });

  return block;
}

//builds IoR, coming from the next role, director has no next role so the section is supressed for that page. 
function buildIndicatorsSection(indicators, role) {
  const block = document.createElement('div');
  block.className = 'section-block';

  if (role === 'director') return block;

  const nextRole = NEXT_ROLE[role] || 'Next Role';
  const title = document.createElement('div');
  title.className = 'section-title';
  title.innerHTML = `<span class="section-icon">🚀</span> Indicators of Readiness for ${nextRole}`;
  block.appendChild(title);

  if (!indicators || indicators.length === 0) {
    const note = document.createElement('p');
    note.style.cssText = 'font-size:0.85rem;color:var(--text-muted);font-style:italic;';
    note.textContent = 'No indicators defined yet.';
    block.appendChild(note);
    return block;
  }

  indicators.forEach((ind, i) => {
    const el = document.createElement('div');
    el.className = 'indicator-item';
    el.textContent = ind;
    block.appendChild(el);

    const safeId = slugify('ind-' + i);
    const sa = document.createElement('div');
    sa.className = 'self-assess-block';
    sa.style.paddingLeft = '20px';
    sa.innerHTML = `
      <div class="self-assess-label">Your evidence</div>
      <textarea class="self-assess-textarea" id="${safeId}" placeholder="What evidence do you have for this indicator?"></textarea>`;
    block.appendChild(sa);
  });

  return block;
}

// ── CSV EXPORT ──
//exports kpi names and self assessment notes as a single header row and a data row, designed for easy comparison. 
//dual path roles includes the path column, single path roles it is omitted?
function downloadCSV() {
  const selection = document.getElementById('input-role').value;
  const [role, pathKey] = selection.split('::');
  const roleData = roleProfiles[role];
  const pathData = roleData[pathKey] || roleData['all'] || roleData[Object.keys(roleData)[0]];
  const kpis = pathData['kpi'] || {};

  const csvEscape = val => '"' + String(val).replace(/"/g, '""') + '"';

  const kpiEntries = Object.entries(kpis);

  const headers = [
    'Name',
    'Role',
    'Path',
    ...kpiEntries.map(([kpiName]) => toTitleCase(kpiName))
  ];

  const values = [
    currentUser,
    toTitleCase(role),
    pathKey !== 'all' ? toTitleCase(pathKey) : 'All',
    ...kpiEntries.map(([kpiName]) => {
      const safeId = slugify(pathKey + '-kpi-' + kpiName);
      const textarea = document.getElementById(safeId);
      return textarea ? textarea.value.trim() : '';
    })
  ];

  const csv = [headers, values].map(r => r.map(csvEscape).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${currentUser.replace(/\s+/g, '_')}_${role.replace(/\s+/g, '_')}_KPIs.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── PDF DOWNLOAD ──
// opens a new tab with print-formatted version of the full profile. all textarea captured and injected as styled divs. does remove the annexes though as well, not necessary for output
function downloadPDF() {
  const win = window.open('', '_blank');
  const allTextareas = document.querySelectorAll('.self-assess-textarea');
  const notes = {};
  allTextareas.forEach(ta => { if (ta.value.trim()) notes[ta.id] = ta.value.trim(); });

  const profileHTML = document.getElementById('profile-body').innerHTML;
  // Remove annex sections from print output
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = profileHTML;
  tempDiv.querySelectorAll('.path-column-header').forEach(el => {
    if (el.textContent.includes('Annex')) {
      el.closest('.path-column, .dual-path-wrapper, .single-path-wrapper').remove();
    }
  });
  const cleanHTML = tempDiv.innerHTML;

  win.document.write(`<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>Kubrick Competency Framework — ${currentUser}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  body { font-family: 'DM Sans', sans-serif; background: #fff; color: #1a1a1a; font-size: 11pt; margin: 0; padding: 0; }
  .print-header { background: #1a1a2e; color: #fff; padding: 24px 40px; margin-bottom: 24px; }
  .print-header h1 { font-family: 'Playfair Display', serif; font-size: 18pt; margin-bottom: 4px; }
  .print-header .sub { color: #52b788; font-size: 10pt; }
  .profile-body { padding: 0 40px 40px; max-width: 100%; }
  .dual-path-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .single-path-wrapper {}
  .path-column { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; page-break-inside: avoid; }
  .path-column-header { background: #2d6a4f; color: #fff; padding: 10px 16px; font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
  .path-column-body { padding: 16px; }
  .section-block { margin-bottom: 20px; }
  .section-title { font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #2d6a4f; padding-bottom: 6px; border-bottom: 2px solid #d8f3dc; margin-bottom: 12px; }
  .kpi-table { width: 100%; border-collapse: collapse; font-size: 9pt; }
  .kpi-table th { background: #f0f4f0; padding: 7px 10px; text-align: left; font-size: 8pt; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; border-bottom: 1px solid #ddd; }
  .kpi-table td { padding: 7px 10px; border-bottom: 1px solid #f0f0f0; vertical-align: top; }
  .kpi-name { font-weight: 600; }
  .annex-panel { display: none !important; }
  .kpi-note { display: none !important; }
  .list-item { padding: 7px 10px; border-left: 3px solid #2d6a4f; margin-bottom: 10px; font-size: 9pt; line-height: 1.5; background: #fafcfa; border-radius: 0 4px 4px 0; }
  .competency-item { border: 1px solid #ddd; border-radius: 6px; overflow: hidden; margin-bottom: 7px; }
  .competency-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #f0f4f0; }
  .competency-name { font-weight: 600; font-size: 9pt; }
  .level-badge { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 7pt; font-weight: 700; text-transform: uppercase; color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .level-exposure { background: #6c757d; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .level-developing { background: #fd7e14; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .level-proficient { background: #2d6a4f; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .level-mastered { background: #4a1a6b; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .level-na { background: #adb5bd; color: #555; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .competency-definition { padding: 7px 12px; font-size: 8pt; color: #555; background: #fafcfa; border-top: 1px solid #eee; font-style: italic; line-height: 1.5; }
  .def-label { font-size: 7pt; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #2d6a4f; font-style: normal; display: block; margin-bottom: 2px; }
  .indicator-item { display: flex; gap: 8px; padding: 6px 0; border-bottom: 1px solid #f0f0f0; font-size: 9pt; }
  .indicator-item::before { content: '◆'; color: #52b788; font-size: 7pt; margin-top: 3px; flex-shrink: 0; }
  .self-assess-block { margin-top: 6px; }
  .self-assess-label { font-size: 7pt; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #888; margin-bottom: 3px; }
  .self-assess-filled { background: #fffbf0; border: 1px solid #ffd; border-left: 3px solid #b5860d; border-radius: 4px; padding: 7px 10px; font-size: 8.5pt; line-height: 1.5; color: #333; white-space: pre-wrap; }
  .self-assess-empty { background: #f9f9f9; border: 1px dashed #ddd; border-radius: 4px; padding: 6px 10px; font-size: 8pt; color: #bbb; font-style: italic; }
  textarea.self-assess-textarea { display: none; }
  @media print { body { margin: 0; } .print-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style>
</head><body>
<div class="print-header">
  <h1>${toTitleCase(currentRole)} — Competency Framework</h1>
  <div class="sub">${currentUser} &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString('en-GB', {day:'numeric',month:'long',year:'numeric'})}</div>
</div>
<div class="profile-body">${cleanHTML}</div>
<script>
  document.querySelectorAll('textarea.self-assess-textarea').forEach(function(ta) {
    var val = ${JSON.stringify(notes)}[ta.id];
    var div = document.createElement('div');
    if (val) {
      div.className = 'self-assess-filled';
      div.textContent = val;
    } else {
      div.className = 'self-assess-empty';
      div.textContent = 'No notes provided.';
    }
    ta.parentNode.insertBefore(div, ta);
  });
  window.onload = function() { window.print(); };
\x3c/script>
</body></html>`);
  win.document.close();
}

// ── UTILS ──
function toTitleCase(str) {
  return str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
