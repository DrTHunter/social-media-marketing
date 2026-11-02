// Contact: set an email (or form URL) here to point the "Contact Trent" button at it.
const CONTACT_URL = "";

// Example ad test: six versions go out, the weak ones get cut, winners get budget and fresh ads rotate in.
const STAGES = [
  {
    title: "Test six ads at once",
    copy: [
      "Six versions go out with an even split of the budget: different photos, headlines and offers.",
      "Real people in your area decide which ones they click and call from. We just watch."
    ],
    ads: [
      { name: "Before & after", state: "test", score: 62 },
      { name: "Owner story", state: "test", score: 48 },
      { name: "Seasonal offer", state: "test", score: 71 },
      { name: "Customer review", state: "test", score: 55 },
      { name: "Process video", state: "test", score: 30 },
      { name: "Tips post", state: "test", score: 22 }
    ]
  },
  {
    title: "Cut the losers",
    copy: [
      "The bottom half gets turned off. Their budget moves to the three ads bringing in the most calls and quote requests.",
      "Same $10 a day, spent on what's working."
    ],
    ads: [
      { name: "Before & after", state: "win", score: 78 },
      { name: "Owner story", state: "cut", score: 40 },
      { name: "Seasonal offer", state: "win", score: 88 },
      { name: "Customer review", state: "win", score: 66 },
      { name: "Process video", state: "cut", score: 24 },
      { name: "Tips post", state: "cut", score: 15 }
    ]
  },
  {
    title: "Scale the winners, rotate in fresh ones",
    copy: [
      "Winners keep running. New versions built from what worked (new photos, new jobs, new reviews) rotate in to challenge them before people get tired of seeing the same ad.",
      "This cycle repeats every month, so the campaign keeps getting sharper."
    ],
    ads: [
      { name: "Before & after", state: "win", score: 84 },
      { name: "New: another before & after", state: "new", score: 58 },
      { name: "Seasonal offer", state: "win", score: 92 },
      { name: "Customer review", state: "win", score: 70 },
      { name: "New: review video", state: "new", score: 46 },
      { name: "New: limited-time offer", state: "new", score: 52 }
    ]
  }
];

const BADGE = { test: "Testing", win: "Winner", cut: "Cut", new: "New" };

function renderStage(i) {
  const s = STAGES[i];
  document.getElementById("adGrid").innerHTML = s.ads.map(a => `
    <div class="ad ${a.state}">
      <span class="ad-badge">${BADGE[a.state]}</span>
      <div class="ad-thumb"></div>
      <div class="ad-name">${a.name}</div>
      <div class="ad-stat">Response score ${a.score}</div>
      <div class="ad-bar"><i style="width:${a.score}%"></i></div>
    </div>`).join("");
  document.getElementById("stageCopy").innerHTML =
    `<h3>${s.title}</h3>` + s.copy.map(p => `<p>${p}</p>`).join("");
  document.querySelectorAll(".stage-tabs button").forEach(b =>
    b.setAttribute("aria-selected", String(+b.dataset.stage === i)));
}

document.querySelectorAll(".stage-tabs button").forEach(b =>
  b.addEventListener("click", () => renderStage(+b.dataset.stage)));
renderStage(0);

// Client checklist, remembered in this browser only.
const boxes = [...document.querySelectorAll("#needList input")];
const KEY = "smm-checklist";
function updateCount() {
  document.getElementById("needCount").textContent = boxes.filter(b => b.checked).length;
}
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
  boxes.forEach((b, i) => { b.checked = !!saved[i]; });
} catch (e) {}
boxes.forEach(b => b.addEventListener("change", () => {
  updateCount();
  try { localStorage.setItem(KEY, JSON.stringify(boxes.map(x => x.checked))); } catch (e) {}
}));
updateCount();

if (CONTACT_URL) document.getElementById("contactBtn").href = CONTACT_URL;
document.getElementById("yr").textContent = new Date().getFullYear();
