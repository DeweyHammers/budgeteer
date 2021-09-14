const logout = () => {
  return fetch("http://localhost:3000/logout", {
    method: "DELETE",
    credentials: "include",
  });
};

export default logout;
