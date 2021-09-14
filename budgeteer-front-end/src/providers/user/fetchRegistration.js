const registrations = ({
  username,
  email,
  password,
  password_confirmation,
}) => {
  return fetch("http://localhost:3000/registrations", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: {
        username,
        email,
        password,
        password_confirmation,
      },
    }),
  }).then((response) => response.json());
};

export default registrations;
