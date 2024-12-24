import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT is not defined in the env variables");
}

export function signJwtToken(payload) {
  try {
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: "30d",
    });
    return token;
  } catch (error) {
    console.error("Error signing JWT token:", error);
    throw new Error("Failed to sign JWT token");
  }
}

export function verifyJwtToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("Error verifying JWT token:", error);
    throw new Error("Failed to verify JWT token");
  }
}
