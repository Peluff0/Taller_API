const API_URL = "https://api.disneyapi.dev/character";
const dataContainer = document.getElementById("contenedor");

function showData(movies) {
  dataContainer.innerHTML = "";
  for (const element of movies) {
    dataContainer.innerHTML += `
          <div class="col-12 col-md-4 col-lg-3 p-2">
            <div class="card" style="max-height: 275px;">
              <img src="${element.imageUrl}" style="height: 10rem;" class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="text-center card-text">${element.name}</h4>
              </div>
            </div>
          </div>
            `;
  }
}

function filtrado(movies){
let moviesFiltered = movies
moviesFiltered.sort((a, b) => a.name.localeCompare(b.name));
showData(moviesFiltered);

}
fetch(API_URL)
  .then((response) => {
    return response.json();
  })
  .then((datos) => {
    console.log(datos.data[0].name);
    filtrado(datos.data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
