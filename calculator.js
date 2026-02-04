const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        return "エラー： 0で割ることはできません";
    }
    return a / b;
};

console.log("5 + 3 =", add(5, 3));
console.log("5 - 3 =", subtract(5, 3));
console.log("5 * 3 =", multiply(5, 3));
console.log("5 / 3 =", divide(5, 0));
console.log("5 / 3 =", divide(5, 3));

//計算機関数を作成する
const calculator = (a, operator, b) => {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "無効な演算子です";
    }
};

//課題3: 上記の計算関数を使って複数の計算を連続で行う
const calculations = [
    { a: 5, operator: "+", b: 3 },
    { a: 10, operator: "-", b: 4 },
    { a: 6, operator: "*", b: 7 },
    { a: 15, operator: "/", b: 3 },
];
console.log("複数の計算結果:");

for (const calc of calculations) {
    const result = calculator(calc.a, calc.operator, calc.b);
    console.log(`${calc.a} ${calc.operator} ${calc.b} = ${result}`);
}

//課題4: 計算履歴を保存する

const history = [];

//履歴つき計算関数
const calculateWithHistory = (a, operator, b) => {
    const result = calculator(a, operator, b);
    const record = {
        expression: `${a} ${operator} ${b}`,
        result: result,
        timestamp: new Date().toLocaleString("ja-JP"),
    };
    history.push(record);
    return result;
};

//履歴を表示する関数
const showHistory = () => {
    console.log("計算履歴:");
    if (history.length === 0) {
        console.log("履歴はありません");
        return;
    }
    for (let i = 0; i < history.length; i++) {
        const record = history[i];
        console.log(
            `${i + 1}. ${record.expression} = ${record.result} (日時: ${record.timestamp})`,
        );
    }
};
calculateWithHistory(100, "+", 200);
calculateWithHistory(50, "*", 3);
calculateWithHistory(20, "/", 4);
showHistory();


