var questions = JSON.parse(localStorage.getItem("questions")) || [];
var answer = [];

function Add() {
    var qns = document.getElementById("qns").value;
    var opt1 = document.getElementById("opt1").value;
    var opt2 = document.getElementById("opt2").value;
    var opt3 = document.getElementById("opt3").value;
    var opt4 = document.getElementById("opt4").value;
    var ans = document.getElementById("Ans").value;
    var question = {
        qns: qns,
        opt1: opt1,
        opt2: opt2,
        opt3: opt3,
        opt4: opt4,
        ans: ans
    }
    questions.push(question);
    localStorage.setItem("questions", JSON.stringify(questions));
    show();
}

function show() {
    let data = localStorage.getItem("questions");
    var questions = JSON.parse(data);
    let newdata = document.getElementById("show");

    newdata.innerHTML = questions.map((q) => `
        <div style="background-color:white; margin: 15px; padding: 5px; font-size: medium; box-shadow: 2px 5px 10px white;"> 
<button onclick="deleteque(${questions.indexOf(q)})" style="color: white; background-color: rgba(55, 180, 219, 0.88); border-radius:5px; padding: 6px;">Delete</button>

            <h1>Q: ${q.qns}</h1>
            <h2>A. ${q.opt1}</h2>
            <h2>B. ${q.opt2}</h2>
            <h2>C. ${q.opt3}</h2>
            <h2>D. ${q.opt4}</h2>
            <h1 id="ans">Ans. ${q.ans}</h1>
        </div>`
    ).join("");
}
function deleteque(index) {
    questions.splice(index, 1);
    localStorage.setItem("questions", JSON.stringify(questions));
    show();
}
function showTest() {
    window.location.href = "quiz_single_question.html"

}

function selectopt(index, ansv) {
    answer[index] = ansv;
    console.log(answer);
}
