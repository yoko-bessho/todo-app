// 必要なDOM要素（input, button, ul）を取得する
const todoInput = document.querySelector("#todo-input");
const button = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// 「追加」ボタンがクリックされたら、以下の処理を行うイベントリスナーを登録する
button.addEventListener("click", function (event) {
    // a. inputに入力されたテキストを取得する
    const text = todoInput.value;
    if (text === "") return;
    console.log(text);

    // b. 新しい <li> 要素を作成する
    const list = document.createElement("li");

    // c. <li> 要素のテキストを a で取得したテキストに設定する
    list.textContent = text;

    // d. <ul> 要素の子要素として <li> を追加する
    todoList.appendChild(list);

    // e. inputの中身を空にする
    todoInput.value = "";
});
