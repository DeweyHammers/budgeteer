const fetchRemoveTransaction = (transaction) => {
  return fetch(`http://localhost:3000/transactions/${transaction.id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default fetchRemoveTransaction;
