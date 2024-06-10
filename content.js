async function fetchNewsApi(apiKey, q, country, source) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${q}&country=${country}&sources=${source}&apiKey=${apiKey}`
  );
  const data = await response.json();
  console.log(data["public_repos"]);
}

fetchNewsApi("7a9c622267b2438ebcb0890ceeada316");
