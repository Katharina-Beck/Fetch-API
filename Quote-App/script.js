const btnQuote = document.querySelector("#btnQuote");
const quote = document.querySelector("#quote");
const name = document.querySelector("#name");

btnQuote.addEventListener("click", function () {
  const p = fetch("https://dummy-apis.netlify.app/api/quote");

  p.then((response) => {
    // console.log(response.status);
    // console.log(response.ok);
    return response.json();
  }).then((data) => {
    // console.log(data);

    quote.innerHTML = data.quote;
    name.innerHTML = "-" + data.author;
  });
});
