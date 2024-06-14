async function fetchNewsApi(apiKey, q, country, source) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&sources=${source}&apiKey=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
}

fetchNewsApi("7a9c622267b2438ebcb0890ceeada316");

// const searchBar = document.getElementById("searchBar");
// const advancedSearch = document.getElementById("advanced");
// const form = document.getElementById("searchForm");
// let advancedSearchUpBtn;
// let input;

// advancedSearch.addEventListener("click", function () {
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     fetch(form.action, {
//       method: "post",
//       body: new FormData(form),
//     });
//   });

//   advancedSearchUpBtn = document.createElement("div");
//   advancedSearchUpBtn.setAttribute("id", "up-arrow");
//   const upArrowButton = document.createElement("button");
//   upArrowButton.classList.add(
//     "my-2",
//     "inline-flex",
//     "items-center",
//     "py-2.5",
//     "px-4",
//     "text-sm",
//     "font-bold",
//     "text-center",
//     "text-slate-50"
//   );

//   const upArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   upArrow.setAttribute("aria-hidden", "true");
//   upArrow.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//   upArrow.setAttribute("width", "24");
//   upArrow.setAttribute("height", "24");
//   upArrow.setAttribute("fill", "none");
//   upArrow.setAttribute("viewbox", "0 0 24 24");

//   const upArrowPath = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "path"
//   );
//   upArrowPath.setAttribute("stroke", "currentColor");
//   upArrowPath.setAttribute("stroke-linecap", "round");
//   upArrowPath.setAttribute("stroke-linejoin", "round");
//   upArrowPath.setAttribute("stroke-width", "2");
//   upArrowPath.setAttribute("d", "m16 14-4-4-4 4");

//   upArrow.appendChild(upArrowPath);
//   upArrowButton.innerText = `Advanced Search `;
//   upArrowButton.appendChild(upArrow);

//   advancedSearchUpBtn.appendChild(upArrowButton);

//   advancedSearch.parentElement.replaceChild(
//     advancedSearchUpBtn,
//     advancedSearch
//   );

//   // create a form and attach the first input box into it

//   input = document.createElement("div");
//   input.classList.add("asi");

//   const qInput = document.createElement("input");
//   qInput.classList.add(
//     "block",
//     "max-w-44",
//     "mx-auto",
//     "p-2.5",
//     "w-full",
//     "z-20",
//     "text-sm",
//     "text-gray-900",
//     "bg-gray-50",
//     "rounded-lg",
//     "border-s-gray-50",
//     "border-s-2",
//     "border",
//     "border-gray-300",
//     "focus:ring-blue-500",
//     "focus:border-blue-500",
//     "dark:bg-gray-700",
//     "dark:border-s-gray-700",
//     "dark:border-gray-600",
//     "dark:placeholder-gray-400",
//     "dark:text-white",
//     "dark:focus:border-blue-500"
//   );

//   qInput.setAttribute("type", "keywords");
//   qInput.setAttribute("placeholder", "Keywords");
//   input.appendChild(qInput);

//   const countryInput = document.createElement("input");
//   countryInput.classList.add(
//     "block",
//     "max-w-44",
//     "mx-auto",
//     "p-2.5",
//     "w-full",
//     "z-20",
//     "text-sm",
//     "text-gray-900",
//     "bg-gray-50",
//     "rounded-lg",
//     "border-s-gray-50",
//     "border-s-2",
//     "border",
//     "border-gray-300",
//     "focus:ring-blue-500",
//     "focus:border-blue-500",
//     "dark:bg-gray-700",
//     "dark:border-s-gray-700",
//     "dark:border-gray-600",
//     "dark:placeholder-gray-400",
//     "dark:text-white",
//     "dark:focus:border-blue-500"
//   );

//   countryInput.setAttribute("type", "country");
//   countryInput.setAttribute("placeholder", "country");
//   input.appendChild(countryInput);

//   searchBar.appendChild(input);
// });

// advancedSearchUpBtn.addEventListener("click", function () {
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     fetch(form.action, {
//       method: "post",
//       body: new FormData(form),
//     });
//   });
//   advancedSearchUpBtn.parentNode.replaceChild(
//     advancedSearch,
//     advancedSearchUpBtn
//   );
//   $(input).hide;
// });
