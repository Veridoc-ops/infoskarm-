// =============================
// Svenshögens Dashboard
// Version 1.0
// =============================

// Liveklocka
function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString("sv-SE",{
        hour:"2-digit",
        minute:"2-digit"
    });

    document.getElementById("clock").innerHTML = time;

}

setInterval(updateClock,1000);

updateClock();


// Simpel animation av siffror

function animateValue(id,end){

    const element=document.getElementById(id);

    let start=0;

    const duration=1200;

    const increment=end/(duration/20);

    const timer=setInterval(()=>{

        start+=increment;

        if(start>=end){

            start=end;

            clearInterval(timer);

        }

        if(id==="occupancy"){

            element.innerHTML=Math.round(start)+"%";

        }else{

            element.innerHTML=Math.round(start);

        }

    },20);

}

animateValue("occupancy",81);
animateValue("checkin",8);
animateValue("checkout",6);
animateValue("rooms",11);


// ==========================
// AI PANEL
// ==========================

const messages=[

"🟢 Inga åtgärder krävs idag.",

"🟡 Följ upp konferensofferten.",

"🟠 Beläggningen börjar bli hög på fredag.",

"🔴 Höj dubbelrummen med 100 kr."

];

let current=0;

setInterval(()=>{

    current++;

    if(current>=messages.length){

        current=0;

    }

    document.getElementById("aiMessage").innerHTML=messages[current];

},12000);



// ==========================
// Här kopplar vi Beds24 senare
// ==========================

// fetchBookings();

// fetchOccupancy();

// fetchRevenue();

console.log("Dashboard startad.");
