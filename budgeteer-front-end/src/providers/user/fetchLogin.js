const login = ({ username, password }) => {
  return fetch("http://localhost:3000/sessions", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  }).then((response) => response.json());
};

export default login;
