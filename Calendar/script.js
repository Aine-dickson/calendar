let printControl = 0
let excess = false

let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

let now = new Date()
let today = now.getDay()
let todate = now.getDate()
let date = 0
let month_start = new Date(now.getFullYear(), now.getMonth(), 1)
let prev_month = new Date(now.getFullYear(), now.getMonth(), 0)
let startDay = month_start.getDay()
let prev_monthLength = prev_month.getDate()

let lastDaysControl = startDay-1

$(document).ready(() => {
    // Declaration of table container for calendar
    let table = "<table>" 
    // "For loop" for creating the horizontal table header containing days
    for(let x = 0; x < 7; x++) {
       table += `<th>${days[x]}</th>`
    }
    
    // Block of loops for drawing the table rows & coloumns for holding dates 
    // outer loop for creating rows
    for(let i = 0; i < 6; i++){
        table += `<tr>`
        // Nested loop for creating coloumns
        for(let j = 1; j <= 7; j++){
            if (printControl >= startDay) {
                if (date <= 29) {
                    date++
                    if (excess) {
                        if(date == todate){
                            table += `<td id="todate">${date}</td>`
                        } else {
                            table += `<td class="prev">${date}</td>`
                        }
                    } else {
                        if(date == todate){
                            table += `<td id="todate">${date}</td>`
                        } else {
                            table += `<td>${date}</td>`
                        }
                    }
                } else {
                    date = 1
                    if(date == todate){
                        table += `<td id="todate">${date}</td>`
                    } else {
                        table += `<td class="prev">${date}</td>`
                    }
                    excess = true
                }
            } else {
                table += `<td class="prev">${prev_monthLength - lastDaysControl}</td>`
                lastDaysControl--
            }
            printControl++
        }
        table += "</tr>"
    }

    table += "<table>"
    // Drawing the calendar into the browser
    $("main").html(table);
})
