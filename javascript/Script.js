function showFeature(letter) {
  const displayArea = document.getElementById("display-area");
  let content = "";

  switch (letter) {
    case "A":
      content = `
        <div>
            <img src="Assets/img/css-letter-a.png">
            <button onclick="hideFeature(this)">Hide Result</button>
        </div>`;
      break;
    case "B":
      content = `
        <div>
            <img src="Assets/img/css-letter-b.png">
            <button onclick="hideFeature(this)">Hide Result</button>
        </div>`;
      break;
    case "C":
      content = `
        <div>
            <img src="Assets/img/css-letter-c.png">
            <button onclick="hideFeature(this)">Hide Result</button>
        </div>`;
      break;
  }

  displayArea.insertAdjacentHTML("beforeend", content);
}

function hideFeature(button) {
  button.parentElement.remove();
}
