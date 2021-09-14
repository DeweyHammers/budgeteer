const fetchLoggedin = () => {
  return fetch("http://localhost:3000/logged_in", {
    credentials: "include",
  }).then((response) => response.json());
};

export default fetchLoggedin;
