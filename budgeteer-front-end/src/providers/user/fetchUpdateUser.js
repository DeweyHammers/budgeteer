const fetchUpdateUser = (user) => {
  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((response) => response.json());
};

export default fetchUpdateUser;
