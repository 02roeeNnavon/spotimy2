export default {
  API_URL:
    process.env.NODE_ENV === "production"
      ? "https://spotimy1.herokuapp.com"
      : "http://localhost:4000",
};
