import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  creatIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const creatIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //list タグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //ぼたん完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストから削除
    const addeTarget = completeButton.parentNode;

    //todo内容のテキスト取得
    const text = addeTarget.firstElementChild.innerText;

    //div以下を初期化
    addeTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      creatIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addeTarget.appendChild(li);
    addeTarget.appendChild(backButton);
    //完了リストに追
    document.getElementById("complete-list").appendChild(addeTarget);
  });

  //ボタン削除作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンのdivを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素をせってい
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに登録
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
