import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signJwtToken(payload) {
  try {
    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("30d")
      .sign(JWT_SECRET);
    return token;
  } catch (error) {
    console.error("Error signing JWT token:", error);
    throw new Error("Failed to sign JWT token");
  }
}

export async function verifyJwtToken(token) {
  try {
    const { payload } = await jose.jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    console.error("Error verifying JWT token:", error);
    throw new Error("Failed to verify JWT token");
  }
}
