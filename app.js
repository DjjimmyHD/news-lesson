const apiKey = "85a5c3f67a9c4ca4a4f71870f18c31ba";
/*your API key here*/

function getNews(query) {
  const url = `https://newsapi.org/v2/everything/?q=${query}&language=en`;

  const head = {
    headers: new Headers({
      "X-Api-Key": apiKey,
    }),
  };

  fetch(url, head)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.text());
    })
    .then((responseJson) => console.log(responseJson))
    .catch((err) => {
      console.log(err);
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

$("#js-form").on("submit", function (event) {
  let textInput = $("#js-search-term").val();
  console.log("i ran");
  event.preventDefault();
  console.log(textInput);
  getNews(textInput);
  $("#js-search-term").val(" ");
  $("#js-error-message").empty();
});

// $(getNews);
// $(handleSubmit);
