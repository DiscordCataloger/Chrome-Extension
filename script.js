// async function fetchNewsApi(apiKey, q, country, source) {
//   const response = await fetch(
//     `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&sources=${source}&apiKey=${apiKey}`
//   );
//   const data = await response.json();
//   console.log(data["public_repos"]);
// }

// fetchNewsApi("7a9c622267b2438ebcb0890ceeada316");

const dropButton = document.getElementById("dropdown-button");
const dropMenu = document.getElementById("dropdown");
const searchKeywords = document.getElementById("keywords");
const searchCategories = document.getElementById("categories");
const searchCountries = document.getElementById("coountries");
const searchMedia = document.getElementById("media");

dropButton.addEventListener("click", function () {
  if (dropMenu.style.display === "none" || dropMenu.style.display === "") {
    dropMenu.style.display = "unset";
  } else {
    dropMenu.style.display = "none";
  }
});

const selectSearch = (searchItem) => {
  searchItem.addEventListener("click", function () {
    dropButton.innerText = searchItem.innerText;
    dropMenu.style.display = "none";
    // Create a new SVG element
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    // Set the SVG element's attributes
    svgElement.setAttribute("class", "w-2.5 h-2.5 ms-2.5");
    svgElement.setAttribute("aria-hidden", "true");
    svgElement.setAttribute("viewBox", "0 0 10 6");
    svgElement.setAttribute("fill", "none");

    // Create the path element
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("stroke", "currentColor");
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute("stroke-width", "2");
    pathElement.setAttribute("d", "m1 1 4 4 4-4");

    // Append the path element to the SVG element
    svgElement.appendChild(pathElement);
    dropButton.appendChild(svgElement);
    // console.log(dropButton);
  });
};

selectSearch(searchKeywords);
selectSearch(searchCategories);
selectSearch(searchCountries);
selectSearch(searchMedia);
