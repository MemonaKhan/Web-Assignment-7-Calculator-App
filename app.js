
function getHistory() {
    return document.getElementById("history").value;
}
function setHistory(num) {
    document.getElementById("history").value = num;
}
function getResult() {
    return document.getElementById("result").value;
}
function setResult(num) {
    document.getElementById("result").value += num;
}
function clearResult() {
    document.getElementById("result").value = "";
    document.getElementById("history").value = "";
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
        console.log("history+=reult " + history);
        if (opr == '=') {
            history += result;
            clearResult();
            setResult(eval(history));
            setHistory(history);
        }
        else {
            console.log("before clear result " + history);
            if (history[history.length - 1] != opr) {
                if (eval(history) == result) {
                    clearResult();
                    history = result;
                    console.log("after if " + history);
                }
                else {
                    history += result;
                    clearResult();
                }
            }
            else{
                history += result;
                    clearResult();
            }
            history += opr;
            console.log("history += opr " + history);
            setHistory(history);
        }

    }
}