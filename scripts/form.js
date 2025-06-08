const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector("#product");

products.forEach(product => {
    const item = document.createElement("option");
    item.value = product.id;
    item.textContent = product.name;
    select.appendChild(item);
})

const button = document.querySelector("#button");

let numReviews = Number(localStorage.getItem("numReviews-ls"));

button.addEventListener("click", function () {
    numReviews++;
    localStorage.setItem("numReviews-ls", numReviews);

})
  
