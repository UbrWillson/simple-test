let button = document.getElementById ('finish');
button.addEventListener ('click', CheckList);

function CheckList () {
let result = 0;

let a1 = document.getElementById('q1').value;

let a2 = document.getElementById('q2').value;

let a3 = document.getElementById('q3').value;

let a4 = document.getElementById('q4').value;

let a5 = document.getElementById('q5').value;

if (a1 === '2') {
 result ++;
}
if (a2 === '3') {
 result++;
}
if (a3 === '4') {
    result++;
}
if (a4 === '6') {
    result++;
}
if (a5 === 'три') {
    result++;
}

alert ('Количество правильных ответов:' + result);
}