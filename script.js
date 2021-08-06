const month = ['Январь','Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Откябрь', 'Ноябрь', 'Декабрь'];
const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const yearAndMonth = document.querySelector('#yearAndMonth')
const daysTr = document.querySelector('#daysTr')
const buttonNextMonth = document.querySelector('#nextMonth')
const buttonPrevMonth = document.querySelector('#prevMonth')
const yearSpan = document.querySelector('#year')
const monthSpan = document.querySelector('#month')
const date = new Date();

//------------------------------------
//Если обернуть в фунцию и повесить листенер "load" на window или document, показывает что innerHTML пустой блять. Хотя на странице все есть. И не получается дальше его обрабатывать.
yearSpan.innerHTML = date.getFullYear()
monthSpan.innerHTML = month[Number(date.getMonth())]
//------------------------------------

checkDateForCorrectness()
highLightСurrentDay(Number(yearSpan.innerHTML), month.indexOf(monthSpan.innerHTML), Number(date.getDate()))


buttonNextMonth.addEventListener('click',  nextDate)
// Увеличивает месяц на 1
function nextMonth() {
    let monthNum =  month.indexOf(monthSpan.innerHTML)
    monthNum =+ monthNum + 1
    monthSpan.innerHTML = month[monthNum]
    
}
//Увеличивает год на 1
function nextYear() {
    let yearNum = Number(yearSpan.innerHTML) + 1
    yearSpan.innerHTML = yearNum
}
//Меняет месяц и если нужно год на следующий
function nextDate() {
    let num = month.indexOf(monthSpan.innerHTML)
    if (num >= month.length - 1) {
        nextYear()
        monthSpan.innerHTML = month[0]
        
    }else{
        nextMonth()
    }
    clearCells()
    checkDateForCorrectness()
    highLightСurrentDay(Number(yearSpan.innerHTML), month.indexOf(monthSpan.innerHTML), Number(date.getDate()))
}

buttonPrevMonth.addEventListener('click', prevDate)

//Уменьшает месяц на 1
function prevMonth() {
    let monthNum =  month.indexOf(monthSpan.innerHTML)
    monthNum =+ monthNum - 1
    monthSpan.innerHTML = month[monthNum]
    
}
//Уменьшает год на 1
function prevYear() {
    let yearNum = Number(yearSpan.innerHTML) - 1
    yearSpan.innerHTML = yearNum
}
//Меняет месяц и если нужно год на предыдущий
function prevDate() {
    let num = month.indexOf(monthSpan.innerHTML)
    if (num <= 0) {
        prevYear()
        monthSpan.innerHTML = month[month.length - 1]
    }else{
        prevMonth()
    }
    clearCells()
    checkDateForCorrectness()
    highLightСurrentDay(Number(yearSpan.innerHTML), month.indexOf(monthSpan.innerHTML), Number(date.getDate()))
}

//Проверяет дату на корректность и если она верна создает нужное кол-во ячеек
function checkDateForCorrectness() {
    let checkYear = Number(yearSpan.innerHTML)
    let checkMonth = month.indexOf(monthSpan.innerHTML)
    for (let i = 31; i >= 28; i--) {
        if (checkDate(checkYear, checkMonth + 1, i) == true) {
            createCells(i)
             break;
         }
    }
    
}

//Сама функция проверки даты на корректность
function checkDate(year, month, day){
    let date = new Date(year, month -1, day);
       if(date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day){
          return true;
       }else{
           return false}
 }

//Создает нужное кол-во ячеек(дней)
function createCells(param) {
     for (let i = 1; i <= param; ++i) {
         let cell = document.createElement('td')
         cell.setAttribute('class', 'cells')
         cell.setAttribute('id', i)
         cell.innerHTML = i
         daysTr.appendChild(cell)
     }
 }

 //Удаляет все ячейки
 function clearCells() {
    daysTr.innerHTML = ''
 }


 //Выделяет сегодняшнюю дату
 function highLightСurrentDay(year, month, day) {
     if (year == date.getFullYear() && month == date.getMonth()){
        let cell = document.getElementById(day)
        cell.style.backgroundColor = 'black'
        cell.style.color = 'white'
     }
 }