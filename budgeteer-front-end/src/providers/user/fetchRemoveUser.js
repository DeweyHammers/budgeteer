const fetchRemoveUser = (user) => {
  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: "DELETE",
    credentials: "include",
  }).then((response) => response.json());
};

export default fetchRemoveUser;
