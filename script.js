async function fetchNewsApi(apiKey, q, country, source) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&sources=${source}&apiKey=${apiKey}`
  );
  const data = await response.json();
  console.log(data["public_repos"]);
}

fetchNewsApi("7a9c622267b2438ebcb0890ceeada316");

const searchBar = document.getElementById("searchBar");
const advancedSearch = document.getElementById("advanced");

advancedSearch.addEventListener("click", function () {
  // create a form and attach the first input box into it

  const input = document.createElement("div");
  input.classList.add("asi");

  const qInput = document.createElement("input");
  qInput.classList.add(
    "block",
    "max-w-44",
    "mx-auto",
    "p-2.5",
    "w-full",
    "z-20",
    "text-sm",
    "text-gray-900",
    "bg-gray-50",
    "rounded-lg",
    "border-s-gray-50",
    "border-s-2",
    "border",
    "border-gray-300",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "dark:bg-gray-700",
    "dark:border-s-gray-700",
    "dark:border-gray-600",
    "dark:placeholder-gray-400",
    "dark:text-white",
    "dark:focus:border-blue-500"
  );

  qInput.setAttribute("type", "keywords");
  qInput.setAttribute("placeholder", "Keywords");
  input.appendChild(qInput);
  searchBar.appendChild(input);
});
