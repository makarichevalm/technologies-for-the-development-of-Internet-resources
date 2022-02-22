/* 
 Макаричева Елизавета, 20ВП1, 18 вариант
 */
function output(){
    check();
}
function format_d(date){// дд мм гг
    var d = new Date(date);
    var day = d.getDate();
    var month = d.getMonth() + 1; //месяцы с 0
    var year = d.getFullYear();
    if (day < 10){
        day = '0' + day;
    }
    if (month < 10){
        month = '0' + month;
    }
    var d = day + '.' + month + '.' + year;
    return d;
}
function new_st(){
    var d = new Date(document.getElementById('data').value);
    var new_year = new Date(2022, 00, 01);
    var diff = new_year.setDate(new_year.getDate())-d.setDate(d.getDate());
    var num_day = diff/86400000; //количество дней 1000*60*60*24
    var k_dayn = Math.round(num_day);
    //console.log(k_dayn);//вычисление в миллисекундах
    return k_dayn;
}
function old_st(){
    var new_d = new_st();
    var k_dayo = new_d - 13;
    //console.log(k_dayo);
    if (k_dayo < 0){
        k_dayo = new_d+13;
    }
    return k_dayo;
}
const array = [];
function check(){
    const d = document.getElementById('data').value;
    //console.log(d);
    const _d = format_d(d);
    const new_elem = _d;//_
    const d_original = array.length === 0 || 
            array.every(arg =>arg !== new_elem);
    if(d_original){
        array.push(new_elem);
        add_elem(d);
        console.log(array);
    }
    else{
        alert("Данное значение есть в таблице!");
    }
}
function add_elem(d){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.textContent = format_d(d);
    tr.appendChild(td);
    //
    var td = document.createElement("td");
    td.textContent = new_st();
    tr.appendChild(td);
   //
    var td = document.createElement("td");
    td.textContent = old_st();
    tr.appendChild(td);
    document.getElementById('table').appendChild(tr);
};