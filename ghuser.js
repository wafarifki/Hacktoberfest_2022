const axios = require("axios");

const token = "github-user-token";

const getUserDetails = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return await axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

const main = async () => {
  const filename = process.argv.slice(2)[0];
  const details = await getUserDetails(filename);

  console.log(details);
};

main();
