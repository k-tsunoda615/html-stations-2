function displayList() {
    const fruits = document.getElementById("fruits");
    const ul = document.createElement("ul");
    
    // 既存のp要素をすべて取得
    const paragraphs = fruits.getElementsByTagName("p");
    
    // p要素の内容をliに変換してulに追加
    while (paragraphs.length > 0) {
      const p = paragraphs[0];  // 常に最初の要素を取得
      const li = document.createElement("li");
      li.textContent = p.textContent;
      ul.appendChild(li);
      fruits.removeChild(p);  // 元のp要素を削除
    }
    
    fruits.appendChild(ul);
  }