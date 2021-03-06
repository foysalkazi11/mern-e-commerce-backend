// Set the options for the cookie
let cookieOptions = {
  // Delete the cookie after 7 days
  expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),

  httpOnly: true
  // sameSite: "none"
};
// In production, set the cookie's Secure flag
// to ensure the cookie is only sent over HTTPS
if (process.env.NODE_ENV === "production") {
  cookieOptions.sameSite = "none";
  cookieOptions.secure = true;
}

module.exports = cookieOptions;
