function showFeature(letter) {
  const displayArea = document.getElementById("display-area");
  let content = "";

  switch (letter) {
    case "A":
      content = `
        <div>
            <img src="Assets/img/css-letter-a.png" alt="Aspect Ratio">
            <button onclick="hideFeature(this)">Hide Result</button>
        </div>`;
      break;
    case "B":
      content = `
        <div>
            <img src="Assets/img/css-letter-b.png" alt="Border">
            <button onclick="hideFeature(this)">Hide Result</button>
        </div>`;
      break;
    case "C":
      content = `
        <div>
            <img src="Assets/img/css-letter-c.png" alt="Colors">
            <button onclick="hideFeature(this)">Hide Result</button>
        </div>`;
      break;
  }

  displayArea.insertAdjacentHTML("beforeend", content);
}

function hideFeature(button) {
  button.parentElement.remove();
}
