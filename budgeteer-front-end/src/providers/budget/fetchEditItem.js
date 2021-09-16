const fetchEditItem = (item) => {
  return fetch(`http://localhost:3000/budgets/${item.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((response) => response.json());
};

export default fetchEditItem;
