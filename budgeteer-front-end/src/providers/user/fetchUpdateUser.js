const fetchUpdateUser = (user) => {
  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: {
        username: user.username,
        email: user.email,
        assign_money: user.assign_money,
      },
    }),
  }).then((response) => response.json());
};

export default fetchUpdateUser;
