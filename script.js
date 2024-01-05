const p = fetch("https://dummy-apis.netlify.app/api/quote");

p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  return response.json();
})
.then((data) => {
  console.log(data);
});
