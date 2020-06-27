
function getHistory() {
    return document.getElementById("history").innerText;
}
function setHistory(num) {
    document.getElementById("history").innerText = num;
}
function getResult() {
    return document.getElementById("result").innerText;
}
function setResult(num) {
    document.getElementById("result").innerText += num;
}
function clearResult() {
    document.getElementById("result").innerText = "";
    document.getElementById("history").innerText = "";
}
function backSpace() {
    var result = getResult();
    var history = getHistory();
    result = result.substr(0, result.length - 1);
    clearResult();
    setHistory(history);
    setResult(result);
}
function operation(opr) {
    var result = getResult();
    var history = getHistory();
    if (result != "") {
        history += result;
        if (opr == '=') {
            clearResult();
            setResult(eval(history));
            setHistory(history);
        }
        else {
            clearResult();
            history += opr;
            setHistory(history);
        }

    }
}