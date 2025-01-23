import { authMiddleware, withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// Ensure this is being used properly in your application
export default function middleware(req) {
  return withAuth(req);
}

// Ensure this middleware applies only to the correct routes
export const config = {
  matcher: ["/profile"], // Add any protected routes here
};




// import {
//   authMiddleware,
//   withAuth,
// } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default function middleware(req) {
//   return withAuth(req);
// }

// export const config = {
//   matcher: ["/dashboard"],
// };
