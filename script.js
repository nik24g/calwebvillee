function insert(value){
    expression.innerHTML += value;
}

function resultant(expression){
    let expressionElements = expression.split("");
    let result;
    let finalExpression;
    for (let i = 0; i < expressionElements.length; i++) {
        const element = expressionElements[i];
        if (element == "(" && i > 0) {
            if (expressionElements[i-1] == "+" || expressionElements[i-1] == "-" || expressionElements[i-1] == "*" || expressionElements[i-1] == "/" || expressionElements[i-3] == "s" || expressionElements[i-3] == "t" || expressionElements[i-3] == "c" || expressionElements[i-3] == "*s" ||expressionElements[i-3] == "*c" || expressionElements[i-3] == "*t"){
                continue;            
            }
            else{
                expressionElements[i] = "*(";
            }
        }
        if (element == ")" && i < expressionElements.length - 1) {
            if (expressionElements[i+1] == "+" || expressionElements[i+1] == "-" || expressionElements[i+1] == "*" || expressionElements[i+1] == "/" || expressionElements[i+1] == ")"){
                continue;
            }
            else{
                expressionElements[i] = ")*";
            }
        }
        if ((element == "s" || element == "c" || element == "t") && i > 0) {
            if (expressionElements[i-1] == "+" || expressionElements[i-1] == "-" || expressionElements[i-1] == "*" || expressionElements[i-1] == "/" || expressionElements[i-1] == "("){
                continue;
            }
            else{
                if (element == "s" && expressionElements[i-1] != "o" && expressionElements[i-2] != "r")  {
                    expressionElements[i] = "*s";
                }
                else if (element == "c"){
                    expressionElements[i] = "*c";
                }
                else if (element == "t"){
                    expressionElements[i] = "*t";
                }
            }
        }
    }
    console.log(expressionElements);
    if (expressionElements[i-2] != "r") {
        if (degreeCheck.checked) {
            finalExpression = expressionElements.join("").replace(/sin\(/g, "Math.sin((Math.PI/180)*").replace(/cos\(/g, "Math.cos((Math.PI/180)*").replace(/tan\(/g, "Math.tan((Math.PI/180)*")
        }
        else{
            finalExpression = expressionElements.join("").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan")
        }
    }
    console.log(finalExpression);
    result = eval(finalExpression)
    total.innerHTML = result;
}

function allClear(){
    total.innerHTML = "";
    expression.innerHTML = "";
    
}
function clean(exp){
    let updatedExpression = exp.substr(0, exp.length - 1)
    expression.innerHTML = updatedExpression;
}

function resin(value){
    return value * 392.9;
}