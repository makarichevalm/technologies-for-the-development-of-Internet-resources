/* 
 Макаричева Елизавета, 20ВП1, Вариант 18
 */

function show() {
    time();
    document.getElementById('showf').style.display = 'block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('num').style.display = 'none';
    //podskaz();
}
/*function podskaz() {
    $('#check').on('click', function () {
        let check = $('#check').prop('checked');
        if (check) {
            $('[data-toggle="tooltip"]').toolTip('show');
        } else {
            $('[data-toggle="tooltip"]').toolTip('hide');
        }
        console.log($('#check').prop('checked'));
        //$('#q3').tooltip();
        //$('#q3').innerHtml='title="Укажите число"';
        //}
        // else{
        //$('#q3').innerHtml='title=""';
    });
}*/
function time() {
    let timepass = 0;
    var input = document.getElementById('number'); // введенное значение
    var timers = document.getElementById('timer'); //поле для таймера
    var timeMinut = parseInt(input.value) * 60;
    var timer = setInterval(function () {
        sec = timeMinut % 60;
        //console.log(sec);
        min = (timeMinut / 60) % 60;
        //console.log(min);
        if (timeMinut <= 0) {
            clearInterval(timer);
            //console.log(timer);
            alert('Время закончилось');
            t();
            check();
        } else {
            let t = Math.trunc(min) + ':' + Math.trunc(sec);
            timers.innerHTML = t;
        }
        --timeMinut;
        ++timepass;
    }, 1000);
    var stop = document.getElementById('prov');
    stop.addEventListener('click', function () {
        clearInterval(timer);
        s = timepass % 60;
        m = (timepass / 60) % 60;
        let time = Math.trunc(m) + ':' + Math.trunc(s);
        timers.innerHTML =
            "<p id='timestyle' class='timestyle'>Время прохождения: " +
            time +
            '</p>';
    });
}
function t() {
    var input = document.getElementById('number');
    //console.log(input);
    var timers = document.getElementById('timer'); //поле для таймера
    var timeMinut1 = parseInt(input.value) * 60;
    var second = timeMinut1 % 60;
    var minute = (timeMinut1 / 60) % 60;
    let t = Math.trunc(minute) + ':' + Math.trunc(second);
    //console.log(t);
    timers.innerHTML =
        "<p id='timestyle' class='timestyle'>Время прохождения: " + t + '</p>';
}

function block() {
    document.getElementById('showf').style.display = 'none';
}
function check() {
    block();
    var count = 0;
    var ans1 = 'Венера';
    var ans2 = 'древнеримского бога войны';
    var ans3 = '8';
    var ans4 = 'Плутон Эрида';
    var ans5 = 'Уран и Нептун';
    var ans6 = 'Марс Юпитер';
    var ans7 = 'звезда';
    var ans8 = 'Юпитер';
    var q1 = document.mytest.q1.value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    var q4 = check_checkbox1();
    var q5 = document.mytest.q5.value;
    var q6 = check_checkbox2();
    var q7 = document.getElementById('q7').value;
    var q8 = document.getElementById('q8').value;
    let res = [
        [q1, ans1],
        [q2, ans2],
        [q3, ans3],
        [q4, ans4],
        [q5, ans5],
        [q6, ans6],
        [q7, ans7],
        [q8, ans8],
    ];
    table =
        "<table class='table'><tr class='table_act'><td>№</td><td>Ваш ответ</td><td>Правильный ответ</td>";
    var all = 8;
    if (q1 === res[0][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>1</td><td>" +
            res[0][0] +
            '</td><td>' +
            res[0][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>1</td><td>" +
            res[0][0] +
            '</td><td>' +
            res[0][1] +
            '</td></tr>';
    }
    if (q2 === res[1][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>2</td><td>" +
            res[1][0] +
            '</td><td>' +
            res[1][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>2</td><td>" +
            res[1][0] +
            '</td><td>' +
            res[1][1] +
            '</td></tr>';
    }
    if (q3 === res[2][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>3</td><td>" +
            res[2][0] +
            '</td><td>' +
            res[2][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>3</td><td>" +
            res[2][0] +
            '</td><td>' +
            res[2][1] +
            '</td></tr>';
    }
    if (q4 === res[3][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>4</td><td>" +
            res[3][0] +
            '</td><td>' +
            res[3][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>4</td><td>" +
            res[3][0] +
            '</td><td>' +
            res[3][1] +
            '</td></tr>';
    }
    if (q5 === res[4][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>5</td><td>" +
            res[4][0] +
            '</td><td>' +
            res[4][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>5</td><td>" +
            res[4][0] +
            '</td><td>' +
            res[4][1] +
            '</td></tr>';
    }
    if (q6 === res[5][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>6</td><td>" +
            res[5][0] +
            '</td><td>' +
            res[5][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>6</td><td>" +
            res[5][0] +
            '</td><td>' +
            res[5][1] +
            '</td></tr>';
    }
    if (q7 === res[6][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>7</td><td>" +
            res[6][0] +
            '</td><td>' +
            res[6][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>7</td><td>" +
            res[6][0] +
            '</td><td>' +
            res[6][1] +
            '</td></tr>';
    }
    if (q8 === res[7][1]) {
        count++;
        table +=
            "<tr class='table_yes'><td>8</td><td>" +
            res[7][0] +
            '</td><td>' +
            res[7][1] +
            '</td></tr>';
    } else {
        table +=
            "<tr class='table_no'><td>8</td><td>" +
            res[7][0] +
            '</td><td>' +
            res[7][1] +
            '</td></tr>';
    }
    for (var i = 0; i < res.length; i++) {
        console.log(res[i]);
    }
    document.getElementById('result').innerHTML =
        "<p id='otv' class='otv'>Результат: " +
        count +
        ' / ' +
        all +
        '</p>' +
        table;
}
function check_checkbox1() {
    var checkbox = document.getElementsByName('q4');
    var checked = ''; //[]
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checked += checkbox[i].value + ' ';
        }
    }
    return checked;
}
function check_checkbox2() {
    var checkbox = document.getElementsByName('q6');
    var checked = ''; //[]
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checked += checkbox[i].value + ' ';
        }
    }
    return checked;
}
