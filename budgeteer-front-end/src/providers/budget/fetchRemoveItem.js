const fetchRemoveItem = (id) => {
  return fetch(`http://localhost:3000/budgets/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });
};

export default fetchRemoveItem;
