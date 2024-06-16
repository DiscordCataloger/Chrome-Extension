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

// create news card
function createNewsCard(url, imgSrc, newsTitle, description, date) {
  // Create the main <a> element
  const newsCard = document.createElement("a");
  newsCard.href = url;
  newsCard.target = "_blank";
  newsCard.className =
    "flex flex-row items-center mx-auto m-8 bg-white border border-gray-200 rounded-lg shadow max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600";

  // Create the <img> element
  const img = document.createElement("img");
  img.className =
    "object-cover w-48 rounded-t-lg h-36 rounded-none rounded-s-lg";
  img.src = imgSrc;
  img.alt = "";

  // Create the content <div>
  const content = document.createElement("div");
  content.className =
    "h-[156px] w-[318px] flex flex-col justify-between pt-4 pl-4 pr-4 pb-1 leading-normal";

  // Create the news title <h5>
  const title = document.createElement("h5");
  title.className =
    "overflow-hidden h-[50%] mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-200";
  title.id = "newsTitle";
  title.textContent = newsTitle;

  // Create the description <p>
  const desc = document.createElement("p");
  desc.className =
    "overflow-hidden h-[50%] font-normal text-gray-700 dark:text-gray-400";
  desc.textContent = description;

  // Create the date <span>
  const newsDate = document.createElement("span");
  newsDate.className = "text-right font-mono text-gray-400 dark:text-gray-500";
  newsDate.textContent = date;

  // Append the elements
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(newsDate);
  newsCard.appendChild(img);
  newsCard.appendChild(content);

  // console.log(newsCard);
  document.getElementById("newsItems").appendChild(newsCard);
}

const loading = () => {
  const loadingImg = document.createElement("img");
  loadingImg.className = "object-cover w-48 mx-auto m-20";
  loadingImg.src =
    "https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif";
  loadingImg.alt = "";
  document.getElementById("newsItems").appendChild(loadingImg);
};

const main = async (api, keyword, category) => {
  // Show the loading image
  loading();

  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&fq=news_desk:("${category}")&api-key=${api}`
  );
  const data = await res.json();
  console.log(data.response.docs);

  // Remove the loading image after a 2-second delay
  setTimeout(() => {
    document.getElementById("newsItems").innerHTML = "";

    for (let i = 0; i < 7; i++) {
      try {
        createNewsCard(
          data.response.docs[i].web_url,
          `https://static01.nyt.com/${data.response.docs[i].multimedia[0].url}`,
          data.response.docs[i].headline.main,
          data.response.docs[i].abstract,
          data.response.docs[i].pub_date.substring(0, 10)
        );
      } catch (error) {
        createNewsCard(
          data.response.docs[i].web_url,
          "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg",
          data.response.docs[i].headline.main,
          data.response.docs[i].abstract,
          data.response.docs[i].pub_date.substring(0, 10)
        );
      }
    }
  }, 600);
};

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  document.getElementById("newsItems").innerHTML = "";
  let inputKeyword = document.getElementById("search-dropdown").value;
  console.log(inputKeyword);
  console.log(dropButtonCat.innerText);
  main(
    "ZipOLjfXVQ8pmFXgq6kSD6LYFrLnWm9M",
    inputKeyword,
    dropButtonCat.innerText.trim()
  );
  // main("ZipOLjfXVQ8pmFXgq6kSD6LYFrLnWm9M", "tennis", "Sports");
});

// // Assuming the RSS feed URL is stored in a variable called 'rssUrl'
// fetch("https://www.yahoo.com/news/rss")
//   .then((response) => response.text())
//   .then((data) => {
//     // Parse the XML data into a JavaScript object
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(data, "application/xml");

//     // Extract the relevant information from the XML document and create a JavaScript object
//     const rssObject = {
//       title: doc.querySelector("channel > title").textContent,
//       description: doc.querySelector("channel > description").textContent,
//       link: doc.querySelector("channel > link").textContent,
//       items: Array.from(doc.querySelectorAll("item")).map((item) => ({
//         title: item.querySelector("title")?.textContent || "",
//         link: item.querySelector("link")?.textContent || "",
//         description: item.querySelector("description")?.textContent || "",
//         pubDate: item.querySelector("pubDate")?.textContent || "",
//       })),
//     };

//     // Now you can use the 'rssObject' in your Chrome extension
//     console.log(rssObject.items[0]);
//     // description ~152 letters
//     createNewsCard(
//       rssObject.items[0].link,
//       "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg",
//       rssObject.items[0].title,
//       "Lorem ipsum dolo velit. Nam condimentum iaculis mi. Etiam hendrerit pellentesque nisl, et posuere nisi tincidunt id. Interdum et malesuada fames ac ante"
//     );
//   })
//   .catch((error) => console.error("Error fetching RSS feed:", error));
