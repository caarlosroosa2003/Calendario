let mainElement = document.querySelector("main");

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

let monthCounter = 8;
let currentDate = new Date(`2023-${monthCounter}-`)

function addMonth(){
    let monthElement = document.createElement("div");
    monthElement.classList.toggle("month");

    let titleMonthElement = document.createElement("h4");
    titleMonthElement.innerText = monthNames[monthCounter];

    let daysElement = document.createElement("div");
    daysElement.classList.toggle("days");

    daysElement = `
    <div class="day">L</div>
    <div class="day">M</div>
    <div class="day">W</div>
    <div class="day">J</div>
    <div class="day">V</div>
    <div class="day">S</div>
    <div class="day">D</div>`

    let numDaysMonth = 
}