let pompe;
let P_counter = 5;
let P_counterCent = 0;
let P_counterSec = 30;
let P_reset;
let P_start;
let P_times = null;
let P_timer = true;

let abdo;
let A_counter = 5;
let A_counterCent = 0;
let A_counterSec = 30;
let A_reset;
let A_start;
let A_times = null;
let A_timer = true;

const audioElement = new Audio("reveil.mp3");

document.addEventListener("DOMContentLoaded", function () {
    abdo = document.getElementById("abdo");
    A_series = document.getElementById("serie_abdos");
    A_reset = document.getElementById("A_reset");
    A_start = document.getElementById("A_sta_top");

    A_reset.addEventListener("click", function () {
        A_counterCent = 0;
        A_counterSec = 30;
        abdo.innerHTML = A_counterSec + "Sec " + A_counterCent + "Centièmes";
        A_series.innerHTML = "Plus que " + A_counter + " séries";
    });

    A_start.addEventListener("click", function () {
        if (A_timer === false) {
            window.clearTimeout(A_times);
            A_timer = true;
        } else if (A_timer === true) {
            A_times = window.setTimeout(A_timesCalc, 10);
            A_timer = false;
            A_counter--;
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pompe = document.getElementById("pompe");
    P_series = document.getElementById("serie_pompes");
    P_reset = document.getElementById("P_reset");
    P_start = document.getElementById("P_sta_top");

    P_reset.addEventListener("click", function () {
        P_counterCent = 0;
        P_counterSec = 30;
        pompe.innerHTML = P_counterSec + "Sec " + P_counterCent + "Centièmes";
        P_series.innerHTML = "Plus que " + P_counter + " séries";
    });

    P_start.addEventListener("click", function () {
        if (P_timer === false) {
            window.clearTimeout(P_times);
            P_timer = true;
        } else if (P_timer === true) {
            P_times = window.setTimeout(P_timesCalc, 10);
            P_timer = false;
            P_counter--;
        }
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////               Fonctions              /////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function play() {
    let audio = new Audio("../musique/reveil.mp3");
    audio.play("5");
}

function A_timesCalc() {
    A_times = window.setTimeout(A_timesCalc, 10);
    A_counterCent--;

    if (A_counterCent < 0) {
        A_counterSec--;
        A_counterCent = 100;
    }

    if (A_counterSec === 0 && A_counterCent === 0) {
        window.clearTimeout(A_times);
        play();
        A_timer = true;
        A_counterSec = 30;
    }

    abdo.innerHTML = A_counterSec + "Sec " + A_counterCent + "Centièmes";
    A_series.innerHTML = "Plus que " + A_counter + " séries";
}

function P_timesCalc() {
    P_times = window.setTimeout(P_timesCalc, 10);
    P_counterCent--;

    if (P_counterCent < 0) {
        P_counterSec--;
        P_counterCent = 100;
    }

    if (P_counterSec === 0 && P_counterCent === 0) {
        window.clearTimeout(P_times);
        play();
        P_timer = true;
        P_counterSec = 30;
    }

    pompe.innerHTML = P_counterSec + "Sec " + P_counterCent + "Centièmes";
    P_series.innerHTML = "Plus que " + P_counter + " séries";
}
