const key = "3f64e360057d47c8b196b826db2d2470";
const api = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;
const resultContainer = document.querySelector(".info");

async function getInfo() {
  try {
    const response = await fetch(api);
    const result = await response.json();

    resultContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      resultContainer.innerHTML += `<li>${result.results[i].name} - ${result.results[i].rating} - ${result.results[i].tags.length} </li> `;
    }
  } catch (error) {
    resultContainer.innerHTML = "Something went wrong";
  }
}

getInfo();
