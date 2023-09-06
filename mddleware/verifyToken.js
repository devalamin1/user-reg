// middleware/verifyToken.js
import { parseCookies } from "nookies";

export function verifyToken(req) {
  const cookies = parseCookies({ req });
  const authToken = cookies.authToken;

  // Verify the authToken here (decode and validate it)
  // If valid, allow the request to proceed; otherwise, deny access
}
