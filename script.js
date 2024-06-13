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
const dropButtonCat = document.getElementById("dropdown-button-cat");
const dropMenuCat = document.getElementById("dropdown-cat");
const dropButtonCountry = document.getElementById("dropdown-button-country");
const dropMenuCountry = document.getElementById("dropdown-country");

// Main Select
const searchKeywords = document.getElementById("keywords");
const searchCategories = document.getElementById("categories");
const searchCountries = document.getElementById("coountries");

// Category
const searchMedia = document.getElementById("media");
const searchBusiness = document.getElementById("business");
const searchEntertain = document.getElementById("entertainment");
const searchGeneral = document.getElementById("general");
const searchHealth = document.getElementById("health");
const searchScience = document.getElementById("science");
const searchSports = document.getElementById("sports");
const searchTech = document.getElementById("technology");

// Country
const searchLocal = document.getElementById("local");
const searchInter = document.getElementById("international");
const searchUS = document.getElementById("us");

// Search Bar
const inputField = document.getElementById("search-dropdown");
const selectFieldCat = document.getElementById("dropdown-button-cat");
const selectFieldCountry = document.getElementById("dropdown-button-country");

const selectSearch = (searchItem, btn, menu) => {
  btn.addEventListener("click", function () {});
  searchItem.addEventListener("click", function () {
    btn.innerText = searchItem.innerText;
    menu.classList.add("hidden");
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
    btn.appendChild(svgElement);
    // console.log(dropButton);

    // Change search bar
    switch (btn.innerText) {
      case "Keywords":
        inputField.style.display = "flex";
        selectFieldCat.style.display = "none";
        selectFieldCountry.style.display = "none";
        break;
      case "Categories":
        inputField.style.display = "none";
        selectFieldCat.style.display = "flex";
        selectFieldCountry.style.display = "none";
        break;
      case "Countries":
        inputField.style.display = "none";
        selectFieldCat.style.display = "none";
        selectFieldCountry.style.display = "flex";
        break;
    }
  });
};

// Main Select
selectSearch(searchKeywords, dropButton, dropMenu);
selectSearch(searchCategories, dropButton, dropMenu);
selectSearch(searchCountries, dropButton, dropMenu);
selectSearch(searchMedia, dropButton, dropMenu);

// Category Select
selectSearch(searchBusiness, dropButtonCat, dropMenuCat);
selectSearch(searchEntertain, dropButtonCat, dropMenuCat);
selectSearch(searchGeneral, dropButtonCat, dropMenuCat);
selectSearch(searchHealth, dropButtonCat, dropMenuCat);
selectSearch(searchScience, dropButtonCat, dropMenuCat);
selectSearch(searchSports, dropButtonCat, dropMenuCat);
selectSearch(searchTech, dropButtonCat, dropMenuCat);

// Country Select
selectSearch(searchLocal, dropButtonCountry, dropMenuCountry);
selectSearch(searchInter, dropButtonCountry, dropMenuCountry);
selectSearch(searchUS, dropButtonCountry, dropMenuCountry);
