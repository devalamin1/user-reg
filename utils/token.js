// utils/token.js
import jwt from "jsonwebtoken";

const secretKey = "your-secret-key"; // Replace with your actual secret key

export function generateToken(data) {
  return jwt.sign(data, secretKey, { expiresIn: "1h" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null; // Token is invalid
  }
}
