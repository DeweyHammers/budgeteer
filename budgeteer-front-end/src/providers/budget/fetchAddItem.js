const fetchAddItem = (item) => {
  return fetch("http://localhost:3000/budgets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((response) => response.json());
};

export default fetchAddItem;
