const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const secret = process.env.JWT_SECRET || "default-secret-key";

    const token = authHeader.split(" ")[1];  // safer than replace

    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();   // ✅ VERY IMPORTANT
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
