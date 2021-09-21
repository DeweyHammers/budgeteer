const fetchAddTransaction = (transaction) => {
  return fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  }).then((response) => response.json());
};

export default fetchAddTransaction;
