const cookieExtractor = (req) => {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};
module.exports = cookieExtractor;
