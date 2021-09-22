const fetchEditTranscation = (transaction) => {
  return fetch(`http://localhost:3000/transactions/${transaction.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  }).then((response) => response.json());
};

export default fetchEditTranscation;
