const fetchRemoveItem = (id) => {
  return fetch(`http://localhost:3000/budgets/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  }).then((response) => response.json());
};

export default fetchRemoveItem;
