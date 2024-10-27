const jwt=require("jsonwebtoken");
const  User  =require ("../models/user.model");

 const verifyJWT = async (req, res, next) => {
  try {
    // Retrieve token from cookies or Authorization header
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    // If no token found, send an unauthorized error
    if (!token) {
      return res.status(401).json({ message: "Unauthorized request. No token provided." });
    }    

    // Verify token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Check if the user exists
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Attach user info to the request object for future middleware/routes
    req.user = user;
    next();
  } catch (err) {
    // Token verification errors
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token." });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired." });
    }

    // General server error
    console.error("Error in verifyJWT middleware:", err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports={verifyJWT}

