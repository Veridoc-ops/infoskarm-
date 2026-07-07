// =====================================
// Svenshögens Dashboard
// app.js v1.0
// =====================================

// ---------- KLOCKA ----------

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("sv-SE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = time;
    }

}

updateClock();
setInterval(updateClock, 1000);

// ---------- SIFFROR ----------

function animateValue(id, end, suffix = "") {

    const el = document.getElementById(id);

    if (!el) return;

    let start = 0;

    const duration = 1200;
    const fps = 60;
    const totalFrames = Math.round(duration / (1000 / fps));
    const increment = end / totalFrames;

    let frame = 0;

    const timer = setInterval(() => {

        frame++;

        start += increment;

        if (frame >= totalFrames) {

            start = end;

            clearInterval(timer);

        }

        el.innerHTML = Math.round(start) + suffix;

    }, 1000 / fps);

}

animateValue("occupancy", 81, "%");
animateValue("checkin", 8);
animateValue("checkout", 6);
animateValue("rooms", 11);

// ---------- AI PANEL ----------

const aiMessages = [

    {
        color: "#22c55e",
        status: "Allt ser bra ut",
        message: "🟢 Gör ingenting idag."
    },

    {
        color: "#f59e0b",
        status: "Observera",
        message: "🟠 Beläggningen börjar bli hög på fredag."
    },

    {
        color: "#ef4444",
        status: "Åtgärd krävs",
        message: "🔴 Höj dubbelrummen med 100 kr."
    },

    {
        color: "#3b82f6",
        status: "Information",
        message: "🔵 Följ upp konferensofferten."
    }

];

let currentMessage = 0;

function updateAI() {

    const ai = document.getElementById("aiMessage");
    const statusText = document.getElementById("statusText");
    const statusBox = document.getElementById("statusBox");

    if (!ai || !statusText || !statusBox) return;

    const item = aiMessages[currentMessage];

    ai.innerHTML = item.message;

    ai.style.color = item.color;

    statusText.innerHTML = item.status;

    statusBox.style.background = item.color + "22";
    statusBox.style.color = item.color;

    currentMessage++;

    if (currentMessage >= aiMessages.length) {

        currentMessage = 0;

    }

}

updateAI();

setInterval(updateAI, 12000);

// ---------- LIVE ----------

console.log("Dashboard startad");

// ---------- PLATS FÖR BEDS24 API ----------

// async function loadBeds24() {
//
// }
//
// setInterval(loadBeds24,30000);
//
// loadBeds24();
