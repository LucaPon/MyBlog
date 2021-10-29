const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchData = async () => {
  return Promise.all([
    fetch(BASE_URL + "/users"),
    fetch(BASE_URL + "/posts"),
  ]).then(function (responses) {
    return Promise.all(
      responses.map(function (response) {
        if (!response.ok) {
          throw Error("Unable to fetch data");
        }
        return response.json();
      })
    );
  });
};

export const login = async (email) => {
  return fetch(BASE_URL + "/users?email=" + email).then(function (response) {
    if (!response.ok) {
      throw Error("Unable to fetch data");
    }

    return response.json();
  });
};

export const createPost = async (post) => {
  return fetch(BASE_URL + "/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(function (response) {
    if (!response.ok) {
      throw Error("Unable to post data");
    }

    return response.json();
  });
};
