function showFeature (letter) {
  const displayArea = document.getElementById("display-area");
  let content = "";

  switch (letter) {
    case "A":
      content = `
                <div>
                    <img src="Assets\img\css-letter-a.png" alt="Aspect Ratio">
                    <button onclick="hideFeature()">Hide Result</button>
                </div>`;
      break;
    case "B":
      content = `
                <div>
                    <img src="Assets\img\css-letter-b.png" alt="Border">
                    <button onclick="hideFeature()">Hide Result</button>
                </div>`;
      break;
    case "C":
      content = `
                <div>
                    <img src="Assets\img\css-letter-c.png" alt="Colors">
                    <button onclick="hideFeature()">Hide Result</button>
                </div>`;
      break;
    default:
      break;
  }

  displayArea.innerHTML = content;
}

function hideFeature() {
  const displayArea = document.getElementById("display-area");
  displayArea.innerHTML = "";
}
