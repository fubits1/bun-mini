// http.js
export default {
  port: 3000,
  async fetch(request) {
    const joke = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.joke);

    return new Response(joke);
  },
};
