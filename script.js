"use strict";
const KEYS = { tasks: "scc_tasks", profile: "scc_profile", recs: "scc_recs", theme: "scc_theme" };

const SAMPLE_TASKS = [
  { id: "t1", title: "Finish calculus problem set 4", due: offsetDate(2), priority: "high", category: "Assignment", completed: false, createdAt: Date.now() },
  { id: "t2", title: "Read chapter 7 of Algorithms", due: offsetDate(4), priority: "medium", category: "Study", completed: false, createdAt: Date.now() },
  { id: "t3", title: "Register for spring career fair", due: offsetDate(6), priority: "low", category: "Admin", completed: true, createdAt: Date.now() },
  { id: "t4", title: "Gym session", due: offsetDate(1), priority: "low", category: "Personal", completed: false, createdAt: Date.now() }
];

function offsetDate(days) {
  const d = new Date(); d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const DIRECTORY = [
  { id: "d1", name: "Dr. Elena Vasquez", type: "Faculty", role: "Professor of Computer Science", email: "e.vasquez@campus.edu", phone: "+1 555-0142", location: "Tech Block, Room 304", tags: ["AI", "Machine Learning", "Research"] },
  { id: "d2", name: "Prof. Marcus Lee", type: "Faculty", role: "Associate Professor, Engineering", email: "m.lee@campus.edu", phone: "+1 555-0188", location: "Engineering Hall, 2F", tags: ["Robotics", "IoT"] },
  { id: "d3", name: "Dr. Aisha Khan", type: "Faculty", role: "Lecturer, Business School", email: "a.khan@campus.edu", phone: "+1 555-0210", location: "Business Centre, 101", tags: ["Entrepreneurship", "Finance"] },
  { id: "d4", name: "Ms. Priya Sharma", type: "Staff", role: "Student Services Officer", email: "p.sharma@campus.edu", phone: "+1 555-0301", location: "Student Hub, Ground Floor", tags: ["Admin", "Support"] },
  { id: "d5", name: "Mr. Tom Riley", type: "Staff", role: "IT Helpdesk Lead", email: "t.riley@campus.edu", phone: "+1 555-0334", location: "Library, Level 1", tags: ["Tech", "Support"] },
  { id: "d6", name: "Campus Health Centre", type: "Service", role: "Medical & Wellness Services", email: "health@campus.edu", phone: "+1 555-0400", location: "Wellness Building", hours: "Mon-Fri 8am-6pm", tags: ["Wellness", "Health"] },
  { id: "d7", name: "Career Development Office", type: "Service", role: "Career counselling & placements", email: "careers@campus.edu", phone: "+1 555-0420", location: "Student Hub, 2F", hours: "Mon-Fri 9am-5pm", tags: ["Career", "Jobs"] },
  { id: "d8", name: "Coding Club", type: "Club", role: "Student-run tech community", email: "codingclub@campus.edu", phone: "-", location: "Tech Block, Lab 4", tags: ["Coding", "Tech", "Hackathons"] },
  { id: "d9", name: "Design Society", type: "Club", role: "UI/UX and creative design", email: "design@campus.edu", phone: "-", location: "Arts Centre, 3F", tags: ["Design", "Creative"] },
  { id: "d10", name: "Main Library", type: "Building", role: "Central library & study spaces", email: "library@campus.edu", phone: "+1 555-0500", location: "Campus Centre", hours: "24/7 during exams", tags: ["Study", "Resources"] },
  { id: "d11", name: "Innovation Hub", type: "Building", role: "Startup incubator & makerspace", email: "innovation@campus.edu", phone: "+1 555-0512", location: "East Campus", hours: "Mon-Sat 9am-9pm", tags: ["Entrepreneurship", "Tech"] },
  { id: "d12", name: "Sports Complex", type: "Building", role: "Gym, courts & fields", email: "sports@campus.edu", phone: "+1 555-0520", location: "South Campus", hours: "6am-10pm", tags: ["Sports", "Wellness"] }
];

const RECOMMENDATIONS = [
  { id: "r1", title: "Intro to Machine Learning Workshop", category: "Academic", description: "Hands-on workshop covering supervised learning basics. Open to all years.", tags: ["AI", "Coding", "Research"], relevance: ["AI", "Coding", "Research"], date: "2026-11-02", saved: false, dismissed: false },
  { id: "r2", title: "Campus Career Fair 2026", category: "Career", description: "Meet 60+ employers across tech, finance and healthcare sectors.", tags: ["Career", "Jobs"], relevance: ["Entrepreneurship"], date: "2026-11-12", saved: false, dismissed: false },
  { id: "r3", title: "Mindfulness & Stress Management", category: "Wellness", description: "Weekly guided sessions to support student wellbeing.", tags: ["Wellness"], relevance: ["Wellness"], date: "2026-10-30", saved: false, dismissed: false },
  { id: "r4", title: "HackCampus 48hr Hackathon", category: "Tech", description: "Build solutions for real campus problems. Prizes and mentorship included.", tags: ["Coding", "AI", "Tech"], relevance: ["Coding", "AI"], date: "2026-11-20", saved: false, dismissed: false },
  { id: "r5", title: "Design Thinking Bootcamp", category: "Academic", description: "Learn human-centred design methods from industry practitioners.", tags: ["Design", "Research"], relevance: ["Design", "Research"], date: "2026-11-08", saved: false, dismissed: false },
  { id: "r6", title: "Startup Pitch Night", category: "Social", description: "Student founders pitch ideas to a panel of investors.", tags: ["Entrepreneurship", "Social"], relevance: ["Entrepreneurship"], date: "2026-11-15", saved: false, dismissed: false },
  { id: "r7", title: "Research Symposium: Undergraduate Projects", category: "Academic", description: "Present or attend research from across disciplines.", tags: ["Research", "Academic"], relevance: ["Research"], date: "2026-11-25", saved: false, dismissed: false },
  { id: "r8", title: "Campus Music Festival", category: "Social", description: "Live performances, food stalls and student bands.", tags: ["Music", "Social"], relevance: ["Music"], date: "2026-11-30", saved: false, dismissed: false },
  { id: "r9", title: "Sports Day & Inter-Faculty Tournament", category: "Wellness", description: "Compete or cheer across multiple sports events.", tags: ["Sports", "Wellness"], relevance: ["Sports"], date: "2026-11-18", saved: false, dismissed: false },
  { id: "r10", title: "Industry Mentorship Programme", category: "Career", description: "Get paired with an industry mentor for a semester.", tags: ["Career", "Research"], relevance: ["Research", "Entrepreneurship"], date: "2026-12-01", saved: false, dismissed: false }
];

const SCHEDULE = [
  { time: "09:00", title: "Data Structures Lecture", loc: "Tech Block, Room 201" },
  { time: "11:30", title: "Group Project Meeting", loc: "Library, Study Room 3" },
  { time: "14:00", title: "Career Fair Prep Workshop", loc: "Student Hub, 2F" },
  { time: "16:30", title: "Gym / Wellness", loc: "Sports Complex" }
];

let state = {
  tasks: [],
  profile: { name: "Student", major: "Undeclared", interests: [], year: "Year 1" },
  recs: RECOMMENDATIONS.map(r => ({ ...r })),
  theme: "light",
  taskFilter: "all",
  dirCategory: "all",
  dirQuery: "",
  recCategory: "all",
  recSort: "relevance"
};

function loadState() {
  try {
    const t = localStorage.getItem(KEYS.tasks);
    state.tasks = t ? JSON.parse(t) : SAMPLE_TASKS.map(x => ({ ...x }));
    const p = localStorage.getItem(KEYS.profile);
    if (p) { state.profile = JSON.parse(p); if (!Array.isArray(state.profile.interests)) state.profile.interests = []; }
    const r = localStorage.getItem(KEYS.recs);
    if (r) {
      const saved = JSON.parse(r);
      state.recs = RECOMMENDATIONS.map(base => {
        const found = saved.find(s => s.id === base.id);
        return found ? { ...base, saved: found.saved, dismissed: found.dismissed } : { ...base };
      });
    }
    const th = localStorage.getItem(KEYS.theme);
    if (th) state.theme = th;
  } catch (e) { console.warn(e); }
}
function saveTasks() { localStorage.setItem(KEYS.tasks, JSON.stringify(state.tasks)); }
function saveProfile() { localStorage.setItem(KEYS.profile, JSON.stringify(state.profile)); }
function saveRecs() { localStorage.setItem(KEYS.recs, JSON.stringify(state.recs.map(r => ({ id: r.id, saved: r.saved, dismissed: r.dismissed })))); }
function saveTheme() { localStorage.setItem(KEYS.theme, state.theme); }

function $(sel, root = document) { return root.querySelector(sel); }
function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add("is-visible"));
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.classList.remove("is-visible"); setTimeout(() => el.hidden = true, 200); }, 2200);
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const label = state.theme === "dark" ? "Light" : "Dark";
  ["#themeToggle", "#themeToggle2"].forEach(sel => {
    const el = $(sel);
    if (el) el.textContent = label;
  });
}

const VIEWS = {
  dashboard: "Dashboard",
  tasks: "Task Manager",
  directory: "Campus Directory",
  recommendations: "Recommendations",
  profile: "Profile & Settings"
};

function switchView(name) {
  $$(".view").forEach(v => v.classList.remove("is-active"));
  const target = $("#view-" + name);
  if (target) { target.hidden = false; target.classList.add("is-active"); }
  $$(".view").forEach(v => { if (!v.classList.contains("is-active")) v.hidden = true; });
  $$(".nav-item").forEach(b => {
    const active = b.dataset.view === name;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-current", active ? "page" : "false");
  });
  $("#viewTitle").textContent = VIEWS[name] || name;
  closeSidebar();
  if (name === "dashboard") renderDashboard();
  if (name === "tasks") renderTasks();
  if (name === "directory") renderDirectory();
  if (name === "recommendations") renderRecs();
  if (name === "profile") renderProfile();
  const main = $("#main-content");
  if (main) main.focus({ preventScroll: true });
}

function openSidebar() {
  $("#sidebar").classList.add("is-open");
  $("#sidebarOverlay").classList.add("is-open");
  $("#sidebarOverlay").hidden = false;
  $("#menuBtn").setAttribute("aria-expanded", "true");
}
function closeSidebar() {
  $("#sidebar").classList.remove("is-open");
  $("#sidebarOverlay").classList.remove("is-open");
  $("#sidebarOverlay").hidden = true;
  $("#menuBtn").setAttribute("aria-expanded", "false");
}

/* Tasks */
function renderTasks() {
  const list = $("#taskList");
  const empty = $("#taskEmpty");
  let items = state.tasks.slice();
  if (state.taskFilter === "active") items = items.filter(t => !t.completed);
  if (state.taskFilter === "completed") items = items.filter(t => t.completed);
  items.sort((a, b) => (a.completed - b.completed) || (a.due || "").localeCompare(b.due || ""));
  list.innerHTML = "";
  if (items.length === 0) { empty.hidden = false; return; }
  empty.hidden = true;
  items.forEach(t => {
    const li = document.createElement("li");
    li.className = "task-item" + (t.completed ? " completed" : "");
    li.innerHTML = `
      <input type="checkbox" class="task-check" ${t.completed ? "checked" : ""} aria-label="Mark ${escapeHtml(t.title)} complete" />
      <div class="task-body">
        <p class="task-title">${escapeHtml(t.title)}</p>
        <div class="task-meta">
          <span class="badge badge--priority-${t.priority}">${t.priority}</span>
          <span class="badge badge--cat">${escapeHtml(t.category)}</span>
          ${t.due ? `<span class="task-due">Due ${formatDate(t.due)}</span>` : ""}
        </div>
      </div>
      <div class="task-actions">
        <button class="icon-small" data-edit="${t.id}" aria-label="Edit task">Edit</button>
        <button class="icon-small icon-small--danger" data-del="${t.id}" aria-label="Delete task">Del</button>
      </div>`;
    li.querySelector(".task-check").addEventListener("change", e => {
      t.completed = e.target.checked;
      saveTasks();
      renderTasks();
      renderDashboard();
      toast(t.completed ? "Task completed" : "Task reopened");
    });
    li.querySelector("[data-edit]").addEventListener("click", () => editTask(t.id));
    li.querySelector("[data-del]").addEventListener("click", () => deleteTask(t.id));
    list.appendChild(li);
  });
}
function addTask(data) {
  const task = { id: "t" + Date.now(), title: data.title.trim(), due: data.due || "", priority: data.priority, category: data.category, completed: false, createdAt: Date.now() };
  state.tasks.unshift(task);
  saveTasks();
  renderTasks();
  renderDashboard();
  toast("Task added");
}
function deleteTask(id) {
  state.tasks = state.tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
  renderDashboard();
  toast("Task deleted");
}
function editTask(id) {
  const t = state.tasks.find(x => x.id === id);
  if (!t) return;
  const newTitle = prompt("Edit task title:", t.title);
  if (newTitle === null) return;
  const trimmed = newTitle.trim();
  if (!trimmed) { toast("Title cannot be empty"); return; }
  t.title = trimmed;
  saveTasks();
  renderTasks();
  renderDashboard();
  toast("Task updated");
}

/* Directory */
function renderDirectory() {
  const grid = $("#directoryGrid");
  const empty = $("#dirEmpty");
  const q = state.dirQuery.trim().toLowerCase();
  const items = DIRECTORY.filter(d => {
    if (state.dirCategory !== "all" && d.type !== state.dirCategory) return false;
    if (!q) return true;
    const hay = [d.name, d.role, d.type, ...(d.tags || []), d.location].join(" ").toLowerCase();
    return hay.includes(q);
  });
  grid.innerHTML = "";
  if (items.length === 0) { empty.hidden = false; return; }
  empty.hidden = true;
  items.forEach(d => {
    const card = document.createElement("article");
    card.className = "dir-card";
    const initials = d.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
    card.innerHTML = `
      <div class="dir-card__top">
        <div class="dir-avatar">${initials}</div>
        <div>
          <h3 class="dir-name">${escapeHtml(d.name)}</h3>
          <p class="dir-role">${escapeHtml(d.role)}</p>
        </div>
      </div>
      <span class="dir-tag">${escapeHtml(d.type)}</span>
      <div class="dir-meta">
        ${d.email ? `<span>${escapeHtml(d.email)}</span>` : ""}
        ${d.phone && d.phone !== "-" ? `<span>${escapeHtml(d.phone)}</span>` : ""}
        ${d.location ? `<span>${escapeHtml(d.location)}</span>` : ""}
        ${d.hours ? `<span>${escapeHtml(d.hours)}</span>` : ""}
      </div>
      <div class="dir-actions">
        <button class="dir-btn" data-email="${escapeAttr(d.email)}">Email</button>
        <button class="dir-btn" data-call="${escapeAttr(d.phone)}">Call</button>
      </div>`;
    card.querySelector("[data-email]").addEventListener("click", () => { window.location.href = "mailto:" + d.email; toast("Opening email client"); });
    card.querySelector("[data-call]").addEventListener("click", () => { if (d.phone && d.phone !== "-") { window.location.href = "tel:" + d.phone; toast("Opening dialer"); } else toast("No phone number available"); });
    grid.appendChild(card);
  });
}

/* Recommendations */
function scoreRec(rec) {
  const interests = state.profile.interests || [];
  const major = state.profile.major || "";
  let score = 0;
  rec.relevance.forEach(tag => { if (interests.includes(tag)) score += 3; });
  rec.tags.forEach(tag => { if (interests.includes(tag)) score += 1; });
  if (major !== "Undeclared" && rec.tags.some(t => t.toLowerCase().includes(major.split(" ")[0].toLowerCase()))) score += 2;
  return score;
}
function renderRecs() {
  const grid = $("#recsGrid");
  const empty = $("#recsEmpty");
  let items = state.recs.filter(r => !r.dismissed);
  if (state.recCategory !== "all") items = items.filter(r => r.category === state.recCategory);
  items = items.map(r => ({ ...r, _score: scoreRec(r) }));
  if (state.recSort === "relevance") items.sort((a, b) => b._score - a._score || a.title.localeCompare(b.title));
  else items.sort((a, b) => b.date.localeCompare(a.date));
  grid.innerHTML = "";
  if (items.length === 0) { empty.hidden = false; return; }
  empty.hidden = true;
  items.forEach(r => {
    const card = document.createElement("article");
    card.className = "rec-card" + (r.saved ? " saved" : "");
    card.innerHTML = `
      <div class="rec-card__head">
        <h3 class="rec-card__title">${escapeHtml(r.title)}</h3>
        <span class="rec-card__cat">${escapeHtml(r.category)}</span>
      </div>
      <p class="rec-card__desc">${escapeHtml(r.description)}</p>
      <div class="rec-card__tags">${r.tags.map(t => `<span class="rec-tag">${escapeHtml(t)}</span>`).join("")}</div>
      <div class="rec-card__actions">
        <button class="rec-btn rec-btn--save ${r.saved ? "is-saved" : ""}" data-save="${r.id}">${r.saved ? "Saved" : "Save"}</button>
        <button class="rec-btn rec-btn--dismiss" data-dismiss="${r.id}">Dismiss</button>
      </div>`;
    card.querySelector("[data-save]").addEventListener("click", () => toggleSaveRec(r.id));
    card.querySelector("[data-dismiss]").addEventListener("click", () => dismissRec(r.id));
    grid.appendChild(card);
  });
}
function toggleSaveRec(id) {
  const r = state.recs.find(x => x.id === id);
  if (!r) return;
  r.saved = !r.saved;
  saveRecs();
  renderRecs();
  renderDashboard();
  toast(r.saved ? "Recommendation saved" : "Removed from saved");
}
function dismissRec(id) {
  const r = state.recs.find(x => x.id === id);
  if (!r) return;
  r.dismissed = true;
  r.saved = false;
  saveRecs();
  renderRecs();
  renderDashboard();
  toast("Recommendation dismissed");
}

/* Dashboard */
function renderDashboard() {
  $("#greetName").textContent = state.profile.name || "Student";
  $("#statPending").textContent = state.tasks.filter(t => !t.completed).length;
  $("#statCompleted").textContent = state.tasks.filter(t => t.completed).length;
  $("#statDirectory").textContent = DIRECTORY.length;
  $("#statRecs").textContent = state.recs.filter(r => !r.dismissed && !r.saved).length;
  $("#todayDate").textContent = new Date().toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
  // schedule
  const sch = $("#scheduleList");
  sch.innerHTML = "";
  SCHEDULE.forEach(s => {
    const li = document.createElement("li");
    li.className = "schedule-item";
    li.innerHTML = `<span class="schedule-time">${escapeHtml(s.time)}</span><div><div class="schedule-title">${escapeHtml(s.title)}</div><div class="schedule-loc">${escapeHtml(s.loc)}</div></div>`;
    sch.appendChild(li);
  });
  // recent tasks
  const rt = $("#recentTasks");
  rt.innerHTML = "";
  const upcoming = state.tasks.filter(t => !t.completed).slice(0, 4);
  if (upcoming.length === 0) { rt.innerHTML = "<li class=\"task-mini task-mini--empty\"><span class=\"task-mini__icon\" aria-hidden=\"true\">🎉</span><span class=\"task-mini__title\">No pending tasks. Great job!</span></li>"; }
  upcoming.forEach(t => {
    const li = document.createElement("li");
    li.className = "task-mini";
    li.innerHTML = `<input type="checkbox" class="task-check" /><span class="task-mini__title">${escapeHtml(t.title)}</span><span class="task-mini__due">${t.due ? formatDate(t.due) : ""}</span>`;
    li.querySelector(".task-check").addEventListener("change", e => { t.completed = e.target.checked; saveTasks(); renderTasks(); renderDashboard(); });
    rt.appendChild(li);
  });
  // rec preview
  const rp = $("#recPreview");
  rp.innerHTML = "";
  const preview = state.recs.filter(r => !r.dismissed).map(r => ({ ...r, _score: scoreRec(r) })).sort((a, b) => b._score - a._score).slice(0, 3);
  preview.forEach(r => {
    const div = document.createElement("div");
    div.className = "rec-card-mini";
    div.innerHTML = `<p class="rec-card-mini__title">${escapeHtml(r.title)}</p><p class="rec-card-mini__desc">${escapeHtml(r.description)}</p>`;
    rp.appendChild(div);
  });
}

/* Profile */
function renderProfile() {
  $("#profileName").value = state.profile.name || "";
  $("#profileMajor").value = state.profile.major || "Undeclared";
  $("#profileYear").value = state.profile.year || "Year 1";
  $$(".interest-chip").forEach(c => {
    const selected = (state.profile.interests || []).includes(c.dataset.interest);
    c.classList.toggle("is-selected", selected);
    c.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  updateSidebarUser();
}
function updateSidebarUser() {
  const name = state.profile.name || "Student";
  const major = state.profile.major || "Undeclared";
  const initial = name.charAt(0).toUpperCase();
  $("#sidebarName").textContent = name;
  $("#sidebarMajor").textContent = major;
  $("#sidebarAvatar").textContent = initial;
  $("#topAvatar").textContent = initial;
  $("#greetName").textContent = name;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function escapeAttr(str) { return escapeHtml(str); }
function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/* Event wiring */
function bindEvents() {
  // nav
  $$(".nav-item").forEach(b => b.addEventListener("click", () => switchView(b.dataset.view)));
  $$("[data-view-jump]").forEach(b => b.addEventListener("click", () => switchView(b.dataset.viewJump)));
  $("#menuBtn").addEventListener("click", () => {
    if ($("#sidebar").classList.contains("is-open")) closeSidebar(); else openSidebar();
  });
  $("#sidebarOverlay").addEventListener("click", closeSidebar);
  // theme
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveTheme();
    applyTheme();
  }
  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#themeToggle2").addEventListener("click", toggleTheme);
  // new task shortcut
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-action='new-task']");
    if (btn) { switchView("tasks"); setTimeout(() => $("#taskTitle").focus(), 50); }
  });
  // task form
  $("#taskForm").addEventListener("submit", e => {
    e.preventDefault();
    const title = $("#taskTitle").value.trim();
    if (!title) return;
    addTask({
      title,
      due: $("#taskDue").value,
      priority: $("#taskPriority").value,
      category: $("#taskCategory").value
    });
    e.target.reset();
  });
  // task filters
  $$("[data-filter]").forEach(b => b.addEventListener("click", () => {
    state.taskFilter = b.dataset.filter;
    $$("[data-filter]").forEach(x => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
    renderTasks();
  }));
  // directory search/filter
  $("#dirSearch").addEventListener("input", e => { state.dirQuery = e.target.value; renderDirectory(); });
  $$("#dirFilters [data-cat]").forEach(b => b.addEventListener("click", () => {
    state.dirCategory = b.dataset.cat;
    $$("#dirFilters [data-cat]").forEach(x => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
    renderDirectory();
  }));
  // recs filters
  $("#recCategory").addEventListener("change", e => { state.recCategory = e.target.value; renderRecs(); });
  $("#recSort").addEventListener("change", e => { state.recSort = e.target.value; renderRecs(); });
  // profile form
  $("#profileForm").addEventListener("submit", e => {
    e.preventDefault();
    state.profile.name = $("#profileName").value.trim() || "Student";
    state.profile.major = $("#profileMajor").value;
    state.profile.year = $("#profileYear").value;
    saveProfile();
    updateSidebarUser();
    renderDashboard();
    renderRecs();
    toast("Profile saved");
  });
  // interest chips
  $$(".interest-chip").forEach(c => c.addEventListener("click", () => {
    const interest = c.dataset.interest;
    const arr = state.profile.interests || (state.profile.interests = []);
    const idx = arr.indexOf(interest);
    if (idx >= 0) arr.splice(idx, 1); else arr.push(interest);
    const selected = arr.includes(interest);
    c.classList.toggle("is-selected", selected);
    c.setAttribute("aria-pressed", selected ? "true" : "false");
  }));
  // settings buttons
  $("#clearTasksBtn").addEventListener("click", () => {
    if (!confirm("Delete all tasks?")) return;
    state.tasks = [];
    saveTasks();
    renderTasks();
    renderDashboard();
    toast("All tasks cleared");
  });
  $("#resetRecsBtn").addEventListener("click", () => {
    state.recs = RECOMMENDATIONS.map(r => ({ ...r }));
    saveRecs();
    renderRecs();
    renderDashboard();
    toast("Recommendations reset");
  });
  $("#resetAllBtn").addEventListener("click", () => {
    if (!confirm("Reset all data to defaults?")) return;
    localStorage.clear();
    state.tasks = SAMPLE_TASKS.map(x => ({ ...x }));
    state.profile = { name: "Student", major: "Undeclared", interests: [], year: "Year 1" };
    state.recs = RECOMMENDATIONS.map(r => ({ ...r }));
    state.theme = "light";
    saveTasks(); saveProfile(); saveRecs(); saveTheme();
    applyTheme();
    renderProfile();
    renderTasks();
    renderDirectory();
    renderRecs();
    renderDashboard();
    toast("All data reset");
  });
  // empty-state actions
  const clearDirBtn = $("#clearDirSearch");
  if (clearDirBtn) clearDirBtn.addEventListener("click", () => {
    state.dirQuery = "";
    state.dirCategory = "all";
    const input = $("#dirSearch");
    if (input) input.value = "";
    $$("#dirFilters [data-cat]").forEach(x => { const active = x.dataset.cat === "all"; x.classList.toggle("is-active", active); x.setAttribute("aria-selected", active); });
    renderDirectory();
    toast("Search cleared");
  });
  const resetRecBtn = $("#resetRecFilters");
  if (resetRecBtn) resetRecBtn.addEventListener("click", () => {
    state.recCategory = "all";
    state.recSort = "relevance";
    const cat = $("#recCategory"); if (cat) cat.value = "all";
    const sort = $("#recSort"); if (sort) sort.value = "relevance";
    renderRecs();
    toast("Filters reset");
  });
  // keyboard: escape closes sidebar
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeSidebar(); });
}

function init() {
  loadState();
  applyTheme();
  bindEvents();
  updateSidebarUser();
  renderDashboard();
  // initial view
  switchView("dashboard");
}

document.addEventListener("DOMContentLoaded", init);
