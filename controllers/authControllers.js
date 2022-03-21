module.exports = {
  signup_get: (req, res) => {
    res.render("signup");
  },
  login_get: (req, res) => {
    res.render("login");
  },
  signup_post: (req, res) => {
    res.send("sign up");
  },
  login_post: (req, res) => {
    res.send("login");
  },
};
