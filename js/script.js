console.log("script.js loaded")

// Script ici

let form = document.getElementById("f2");
let modeTransport = document.getElementById("transport");
let submit = document.getElementById("submit");
let result = document.getElementById("result2");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let distance = parseFloat(document.getElementById("distance").value);
    let time = parseFloat(document.getElementById("time").value);
    let poids = parseFloat(document.getElementById("poids").value);

    let brnKcal = undefined;
    let vitesse = 0;
    let MET = 0;
    
    if ((isNaN(distance)) || (distance ="") || (isNaN(time)) || (time = "") || (isNaN(poids)) || (poids = "")) {
        alert("Veuillez saisir des valeurs numériques");
    }
    else {
        switch (modeTransport.value) {
            case "car": 
                distance = parseFloat(document.getElementById("distance").value);
                time = parseFloat(document.getElementById("time").value);
                poids = parseFloat(document.getElementById("poids").value);
                brnKcal = Math.floor(distance * time);
                result.innerHTML = `
                    <h3 style="font-size: 2em">
                        Vous Brûlerez : 
                    </h3>
                    <p style="font-size: 2em">
                    ${brnKcal} kCals
                    </p>
                    `;
                console.log(brnKcal);
                console.log(`Dstance switch : ${distance}`);
                console.log(`Time switch : ${time} * ${distance}`);
                break;
            case "bike": 
                distance = parseFloat(document.getElementById("distance").value);
                time = parseFloat(document.getElementById("time").value);
                poids = parseFloat(document.getElementById("poids").value);
                vitesse = 22;
                MET = vitesse * 0.1;
                let duree = distance / 3.6;
                brnKcal = Math.floor(MET * poids * (time/60)); 
                result.innerHTML = `
                    <h3 style="font-size: 2em">
                        Vous Brûlerez : 
                    </h3>
                    <p style="font-size: 2em">
                    ${brnKcal} kCals
                    </p>
                    `;
                    console.log(brnKcal);
                    console.log(MET);
                    console.log(poids);
                    console.log(duree);
                break;
            case "walk": 
                distance = parseFloat(document.getElementById("distance").value);
                time = parseFloat(document.getElementById("time").value);
                poids = parseFloat(document.getElementById("poids").value);
                let fdeWalk = 6 * (0.035 + (0.029 * (poids / 70)));
                brnKcal = Math.floor(distance * poids * fdeWalk);   
                result.innerHTML = `
                <h3 style="font-size: 2em">
                Vous Brûlerez : 
                </h3>
                <p style="font-size: 2em">
                ${brnKcal} kCals
                </p>
                `;
                console.log(brnKcal);
                console.log(distance);
                console.log(poids);
                console.log(fdeWalk);
                break;
        }
    }

});